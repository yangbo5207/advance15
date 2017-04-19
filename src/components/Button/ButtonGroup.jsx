import React from 'react';
import classNames from 'classnames';


export default function ButtonGroup(props) {
    const {
        prefixCls = 'tiger-button-group',
        className,
        ...others
    } = props;

    const classes = classNames(prefixCls, classNames);

    return <div {...others} className={classes} />
}
