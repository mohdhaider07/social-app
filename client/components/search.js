import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context";
import SearchResult from "./cards/searchResult";
const Search = ({handleFollow,handleUnfollow}) => {
    const [state] = useContext(UserContext);
    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    const searchUser = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:8000/api/search-user/${query}`)
            console.log("search data", data);
            setResult(data);
        } catch (err) {
            console.log(err)
        }

    }
    return (<>
        <form className="flex flex-row" onSubmit={searchUser}>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search" className="p-2 border"></input>
            <button className="p-2 px-4 border ml-4 hover:bg-black hover:text-white" >Search</button>
        </form>
        {result.length >0 && (<SearchResult
            people={result}
            handleFollow={handleFollow}
            handleUnfollow={handleUnfollow}
        />)
        }
    </>);
}
export default Search;