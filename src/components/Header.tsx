import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component<any, any> {

    render() {
        return (

                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/main">Main</NavLink></li>
                        </ul>
                    </nav>
                </header>

        )
    }
}