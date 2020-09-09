// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'


// export class Sneakers extends Component {

  

//     render() {
//         const {sneakers,addCart} = this.context;
//         return (
//             <div id="sneakers">
//                {
//                    sneakers.map(sneakers =>(
//                        <div className="" key={sneakers.id}>
//                            <Link to={`/sneakers/${sneakers.title}`}>
//                                <img src={sneakers.image} alt=""/>
//                            </Link>
//                            <div className="content">
//                                <h3>
//                                    <Link to={`/sneakers/${sneakers.id}`}>{sneakers.title}</Link>
//                                </h3>
//                                <span>${sneakers.price}</span>
//                                <p>{sneakers.description}</p>
//                                <button onClick={()=> addCart(sneakers.id)}>Add to cart</button>
//                            </div>
//                        </div>
//                    ))
//                }
//             </div>
//         )
//     }
// }

// export default Sneakers