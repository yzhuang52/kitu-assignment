import React from 'react';
import './search.css';
import {useState, useEffect} from "react";
import {useDispatch,  useSelector} from "react-redux";
import {getInfo} from "../actions/search";

const Search = () => {
    const [search, setSearch] = useState('');
    const infos = useSelector((state)=>state.infos);
    const dispatch = useDispatch();
    const [numberOfSearch, setNumberOfSearch] = useState(0);
    useEffect(() => {
        setNumberOfSearch(infos?.length);
        const isOdd = document.getElementById('isOdd');
        if(isOdd.style.visibility==='hidden'){
            document.getElementById('isOdd').style.visibility = 'visible';
        }else{
            document.getElementById('isOdd').style.visibility = 'hidden';
        }
    }, [infos]);

    const searchInfo = () => {
        if(search.length>0) {
            dispatch(getInfo(search));
        }

    }
    return (
        <div className='search'>
            <div className='guess'>
                <p>Total Guesses: {numberOfSearch}</p>
                <p id='isOdd'>What an odd number of guesses</p>
            </div>
            <div className='searchContent'>
                Please enter a name here: <br/>
                <div>
                    <input type='text' id='fname' name='fname' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                    <button id='submitQuery' onClick={searchInfo}>Submit</button>
                </div>
            </div>
            <div className='result'>
                All Guesses: <br/>
                <ul className='guessResult'>
                    {infos.map((info)=>(
                        <li key={info.name}>{info.name} - {info.age}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Search;