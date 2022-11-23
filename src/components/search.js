import React from 'react';
import './search.css';
import {useState} from "react";

const Search = () => {
    const [search, setSearch] = useState('');
    return (
        <div className='search'>
            <div className='guess'>
                <p>Total Guesses: 0</p>
                <p id='isOdd'></p>
            </div>
            <div className='searchContent'>
                Please enter a name here: <br/>
                <div>
                    <input type='text' id='fname' name='fname'/>
                    <button id='submitQuery'>Submit</button>
                </div>
            </div>
            <div className='result'>
                All Guesses: <br/>
                <div className='guessResult'>

                </div>
            </div>
        </div>
    )
}

export default Search;