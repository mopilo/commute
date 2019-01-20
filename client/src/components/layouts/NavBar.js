import React from 'react';
import {Link} from 'react-router-dom';


export const NavBar = () =>  {
        return(
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link
                            to="/"
                            style={{fontFamily : "monospace"}}
                            className="col s5 brand-logo center black-text"
                        >
                        <i className="material-icons">code</i> Mern
                        </Link>
                    </div>
                </nav>
            </div>
        )
    
}

