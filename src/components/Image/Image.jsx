import React, { Component } from 'react';
import classNames from 'classnames';
import { setImageMode } from './utils';
import './style.css';

class Image extends Component {

    state = {
        mode: null
    }

    componentDidMount() {
        const { mode, bindload, binderror } = this.props;

        setImageMode(this.refs.wrap, mode).then(mode => {
            this.setState({
                mode
            })
            bindload && bindload();
        })
        .catch(err => {
             binderror && binderror();
        })
    }

    render() {
        const { src, alt, width, height, className } = this.props;
        const { mode } = this.state;

        const wrapStyle = {
            width: `${width}px`,
            height: `${height}px`
        }

        const classes = classNames('image-wrap', className);

        return (
            <div ref="wrap" className={ classes } style={ wrapStyle }>
                <img ref="image" className={ mode } src={ src } alt={ alt } />
            </div>
        )
    }
}

export default Image;


// 图片会缓存，在IE下，只有新图片才会触发图片的onLoad事件，因此在绑定onLoad事件之前，需要先判断是否已经缓存
// 如果已经缓存，那么img.complete = true
