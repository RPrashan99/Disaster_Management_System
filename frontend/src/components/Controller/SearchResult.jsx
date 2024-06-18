import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import pluralize from 'pluralize';
import leven from 'leven';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const searchMapping = {
    '/controller/news': ['news', 'newsitems', 'alerts'],
    '/controller/volunteering': ['volunteering', 'volunteer', 'help','campains','shramadana'],
    '/controller/ContactInfoAdder': ['contact', 'authorities', 'connection', 'associate','phone','mobile', 'email','address', 'army','navy','police','hospital','headquarters'],
    '/controller/requests': ['request', 'disasters','fire'],
};

const findDestination = (searchTerm) => {
    const maxDistance = 2;
    for (const destination in searchMapping) {
        for(const keyword of searchMapping[destination]){
            for (const term of searchTerm){
                const singularTerm = pluralize.singular(term);
                const pluralTerm = pluralize.plural(term);
                
                const A = leven(term,keyword) <= maxDistance;
                const B = leven(singularTerm, keyword) <= maxDistance;
                const C = leven(pluralTerm, keyword) <= maxDistance;

                if (
                    keyword === term ||
                    keyword === singularTerm ||
                    keyword === pluralTerm ||
                    leven(term, keyword) <= maxDistance ||
                    leven(singularTerm, keyword) <= maxDistance ||
                    leven(pluralTerm, keyword) <= maxDistance
                ) {
                    return destination;
                }
            }
        }
    }
    return null;
};

const SearchResults = () => {
    const navigate = useNavigate();
    const query = useQuery().get('query');
    const searchTerm = query.trim().toLowerCase().split(/\s+/);
    const destination = findDestination(searchTerm);
    const [SearchResult, setSearchResult] = useState(null);
    useEffect(() =>{
        if (destination) {
            navigate(destination);
          } else {
            setSearchResult(`No result found for: ${query}`);
        }
        console.log("destination:",destination)
    },[]);

    return(
        <div>
            {destination?(
                <p>Redirecting</p>
            ):(
                <div>
                    <h1 className='mt-10 text-[2rem] text-center justify-center text-ControllerPrim'>Search result</h1>
                    <p className=' text-center justify-center text-black '>{SearchResult}</p>
                </div>            
            )}
        </div>
    );
};


export default SearchResults;