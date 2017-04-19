import React from 'react';
import Icon from '../Icon';
import {Link} from 'react-router';
import {navmap} from '../../pages/Index/config';

import './style.css';

const defaultProps = {
    prevType: null,
    nextType: 'button'
}

export default (props = defaultProps) => {
    const {prevType, nextType} = props;
    return (
        <div className="switch-nav">
            <div className="switch prev">
                <Icon type="arrowleft" />
                <Link to={prevType ? `/${prevType}` : null}  className="link">
                    {navmap[prevType] ? `${prevType} ${navmap[prevType]}` : 'null'}
                </Link>
            </div>
            <div className="switch next">
                <Link to={nextType ? `/${nextType}` : null} className="link">
                    {navmap[nextType] ? `${nextType} ${navmap[nextType]}` : 'null'}
                </Link>
                <Icon type="arrowright" />
            </div>
        </div>
    )
}
