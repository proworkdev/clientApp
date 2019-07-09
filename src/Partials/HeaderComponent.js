import React, { Component } from 'react';

export default class HeaderComponent extends Component {

    render() {

        return (
            <div>
                <div className="header">
                    <div className="top-right-action">
                        <ul>
                            <li className="dropdown">
                                <p>John Doe</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
