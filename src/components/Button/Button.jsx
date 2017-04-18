import React, { Component } from 'react';
import omit from 'lodash/omit';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import Icon from '../Icon';

import './style.css';

class Button extends Component {

    static defaultProps = {
        prefixCls: 'tiger-button',
        loading: false,
        clicked: false
    }

    state = {
        loading: this.props.loading
    }

    timeout: number;
    delayTimeout: number;

    componentWillReceiveProps(nextProps) {
        const currentLoading = this.props.loading;
        const {loading} = nextProps;

        if (currentLoading) {
            clearTimeout(this.delayTimeout);
        }

        if (loading && loading.delay) {
            this.delayTimeout = setTimeout(() => this.setState({ loading }), loading.delay);
        } else {
            this.setState({
                loading
            })
        }

        this.setState({
            loading: nextProps.loading
        })
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
    }

    handleClick = (e) => {
        this.setState({
            clicked: true
        })

        clearTimeout(this.timeout);
        // 500ms之后将clicked设置为false
        this.timeout = setTimeout(() => this.setState({
            clicked: false
        }), 500);

        const onClick = this.props.onClick;
        onClick && onClick(e);
    }

    handleMouseUp = e => {
        findDOMNode(this).blur();
        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    }

    render() {
        const { loading, clicked } = this.state;
        const {type, shape, context, prefixCls, className, htmlType, icon, ricon, ...others} = this.props;

        const classes = classNames(prefixCls, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-clicked`]: clicked,
        }, className);

        const iconType = loading ? 'loading' : icon;
        const iconNode = iconType ? <Icon type={iconType} /> : null;

        const riconNode = ricon ? <Icon type={ricon} /> : null;

        return (
            <button
                {...omit(others, ['loading', 'clicked'])}
                type={htmlType || 'button'}
                className={classes}
                onMouseUp={this.handleMouseUp}
                onClick={this.handleClick}
            >
                {iconNode}
                <span>{context}</span>
                {riconNode}
            </button>
        )
    }
}

export default Button;
