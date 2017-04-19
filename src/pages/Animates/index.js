import React, { Component } from 'react';
import Switch from '../../components/Switch';

export default class Animate extends Component {
    render() {
        return (
            <div className="advance-pages-item animate">
                this is animate

                <Switch prevType="comment" />
            </div>
        )
    }
}
