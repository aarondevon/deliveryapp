import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component<any, any> {

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/main">Main</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}