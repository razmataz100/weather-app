import { useRef } from "react";
import './Search.css'


const Search = () => {

    const cityVal = useRef();

    return(

        <div className="search-bar">
            <input type="text" placeholder="Search city" ref={cityVal} />
            <button id="search-button">Search</button>
        </div>  
    );
}
export default Search;