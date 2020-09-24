import React, { Component } from 'react'
import axios from 'axios';


class Sneakers extends Component {

        constructor() {
            super();
            this.state = {
                sneakers: [],
            }
        }
        componentDidMount() {
            axios.get("https://sneaker-king.herokuapp.com/")
            .then(res => this.setState({ sneakers: res.data }))
            .catch(error => console.error( error.message ));
        }
        render() {
            return (
                <div className="products">
                    {/* <img src={logopic} className = "logo" width="100"/> */}
                    <div className="container">
                    {
                        this.state.sneakers.map((sneakers,counter) => {
                            console.log(sneakers);
                            return (
                                <div className='wrapper'>
                                <div className="image">
                                    <img src={sneakers.image} a href="www.google.com" className="sneaker-image" alt="jordan black sneakers" width="200" /> 
                                    <h3 className="sneaker-box">{sneakers.title}</h3>
                                    <h3 className="sneaker-box">${sneakers.price}</h3>
                                    {/* props.addBasket adds a on click action to adding to basket from addActions file  */}
                                    <a className="addToCart cart1" href="/cart">Add to Cart</a>
                                </div>
                                </div>
                                // </div>
    
                            )
                        }
                      )
                    }
                </div>
              </div>
            )
        }
    }

export default Sneakers;


