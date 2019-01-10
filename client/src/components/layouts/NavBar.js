import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {
    render(){
        return(
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <a
                            to="/"
                            style={{fontFamily : "monospace"}}
                            className="col s5 brand-logo center black-text"
                        >
                        <i className="material-icons">code</i> Mern
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;