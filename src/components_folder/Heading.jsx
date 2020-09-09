import React from 'react';
import { Link } from 'react-router-dom';
import BasketIcon from '../components_folder/icons/shopping_basket.svg';
import logopic from '../images/sneakerking-logo.png'



// below is class method for Home.jsx
class Heading extends React.Component {
    
        render(){
            return(
            <header>
                 <img src={logopic} className = "logo" alt="" width="170"/>
                <div className="container">
               <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sneakers">Sneakers</Link></li>
                        <li><Link to="/socks">Socks</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/users">Login / Register</Link></li>
                    </ul>
                        <div className="nav-cart">
                            <span>0</span>
                            <Link>
                                <img src={BasketIcon} className="basketCart" alt="basket icon" width="22"/>
                            </Link>
                         </div>
                </nav>
            </div>
          </header>
        )
    }
}
           
    


export default Heading;