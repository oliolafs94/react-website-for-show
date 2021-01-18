// //https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}


import CatBreed from './cat-breeds';
import './search-style.css';

import React, {Component} from 'react'

// class SearchList extends Component {

//     render() {
//         return (
//             <>
//             <h1>Cat Breeds!</h1>
//             <div>
//                 <input className="input" type="text" placeholder="Type here for cat breeds in the list" onChange={this._onKeyUp}/>
//             </div>
//             <br/>
//             <div style={{ display: "flex", flexWrap: "wrap" }}>
//                 {CatBreed.map((breeds, index) => {
//                     return (
//                         <div style={{ flex: 1, flexBasis: "25%"}}>
//                             <div className="polaroid">
//                                 <img className="image" src={breeds.image} alt="kisi" />
//                                 <div className="container">
//                                     <h1 key={index} className="text">{breeds.name}</h1>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//             </>
//         )
//     }
// }

// export default SearchList

import { Button, Input, Footer, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';


class SearchList extends Component {

    state = {
        search : ""
    }

    renderCats = cat =>{

        return <div style={{ marginTop : '20px', display: 'inline-block'}}>
            <Card>
                <CardBody>
                    <div><img src={cat.image} className="image" alt={cat.name} /></div>
                    <h1 title={cat.name}>{cat.name.substring(0, 30).toUpperCase()}{ cat.name.length > 30 }</h1>
                </CardBody>
            </Card>
        </div>
    }

    onchange = e =>{
        this.setState({ search : e.target.value });
    }

    render() {

        const { search } = this.state;
        const filteredCats = CatBreed.filter( cat =>{
            return cat.name.indexOf( search ) !== -1
        })

        return (
            <div className="img-wrap">
            <main style={{marginTop: '4rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <Input className="input" icon="search" onChange={this.onchange} hint="Filter out cat breeds here"/>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div style={{flex: 1, flexBasis: "25%"}}>
                        {
                            filteredCats.map( cat =>{
                                return this.renderCats(cat)
                            })
                        }
                    </div>
                </div>
            </main>
            </div>
        );
    }
}

export default SearchList;