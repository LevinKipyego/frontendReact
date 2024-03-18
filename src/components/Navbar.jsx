//const { Component } = require("react");
import './Navbar.css'
import { Component } from 'react'
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    state = {clicked:false}
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
            <h1 className="navbar-logo">Trippy</h1>

            <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "ri-close-line":"ri-bar-chart-horizontal-line" }></i>
            
            </div>
            <ul className={this.state.clicked ? 'nav-menu active':'nav-menu'}>
                {MenuItems.map((item,index) => {
                
                    return(<li key={index}>
                        
                        <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                     </li>
                    );
                })}
                <button>Sign Up</button>
            </ul>
            
        </nav>
        )
    }
}

export default Navbar;