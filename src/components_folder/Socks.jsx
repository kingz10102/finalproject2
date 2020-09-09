import axios from 'axios';
import React, { Component } from 'react'



class Socks extends Component {

        constructor() {
            super();
            this.state = {
                socks: [],
            }
        }
        componentDidMount() {
            axios.get("http://localhost:8080/socks")
            .then(res => this.setState({ socks: res.data }))
            .catch(error => console.error( error.message ));
        }
        render() {
            return (
                <div className="products">
                    {/* <img src={logopic} className = "logo" width="100"/> */}
                    <div className="container">
                    {
                        this.state.socks.map((socks,counter) => {
                            console.log(socks);
                            return (
                                <div className='wrapper'>
                                <div className="image">
                                    <img src={socks.image} className="sneaker-image" alt="" width="200" /> 
                                    <h3 className="sneaker-box">{socks.title}</h3>
                                    <h3 className="sneaker-box">${socks.price}</h3>
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

export default Socks


