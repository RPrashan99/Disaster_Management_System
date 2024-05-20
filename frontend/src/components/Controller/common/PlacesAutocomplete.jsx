import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import Divider from '@mui/material/Divider';

export const PlacesAutocomplete = (props) => {

    const {setLocation, setLocationLatLang} = props;

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            componentRestrictions: { country: 'LK' },
        },
        debounce: 300,
    });
    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect =
        ({ description }) =>
            () => {
                // When user selects a place, we can replace the keyword without request data from API
                // by setting the second parameter to "false"
                setValue(description, false);
                clearSuggestions();
                setLocation(description);

                // Get latitude and longitude via utility functions
                getGeocode({ address: description }).then((results) => {
                    const { lat, lng } = getLatLng(results[0]);
                    setLocationLatLang({latitude:lat, longitude:lng});
                    console.log("📍 Coordinates: ", { lat, lng });
                });
            };

    const renderSuggestions = () =>
        data.map((suggestion, index) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <div className="bg-white">
                    <li className="p-2" key={place_id} onClick={handleSelect(suggestion)}>
                        <strong>{main_text}</strong> <small>{secondary_text}</small>
                    </li>
                    {index !== data.length - 1 && <Divider variant="middle" component="li" />}
                </div>
            );
        });

    return (
        <div ref={ref} className="flex flex-col border w-[310px]">
            <input
                className="w-full p-2 border border-black rounded-md"
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Shelter Location"
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === "OK" && <ul style={{ maxHeight: '100px', overflowY: 'auto', listStyle: 'none', padding: '0' }}>{renderSuggestions()}</ul>}
        </div>
    );
};