import CatBreed from './cat-breeds';
import './search-style.css';

import React from 'react'

const SearchList = () => {
    return (
        <>
        <h1>Cat Breeds!</h1>
        <div>
            <input className="input" type="text" placeholder="Type here for cat breeds in the list"/>
        </div>
        <br/>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {CatBreed.map((breeds, index) => {
                return (
                    <div style={{ flex: 1, flexBasis: "25%"}}>
                        <div className="polaroid">
                            <img className="image" src={breeds.image} alt="kisi" />
                            <div className="container">
                                <h1 key={index} className="text">{breeds.name}</h1>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default SearchList
