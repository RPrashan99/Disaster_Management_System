import React, {Component} from "react";

class AutocompleteInput extends Component {
    componentDidMount() {
      const { google } = this.props;
      const input = document.getElementById('autocomplete-input');
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.setComponentRestrictions({ country: 'us' });
  
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log(place); // You can access the selected place details here
      });
    }
  
    render() {
      return (
        <input id="autocomplete-input" type="text" placeholder="Enter a location" />
      );
    }
  }
  
  export default AutocompleteInput;
  