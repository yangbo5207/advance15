import React, { Component } from 'react';
import classNames from 'classnames';
import './style.css';

class Image extends Component {

    state = {
        mode: null
    }

    componentDidMount() {
        const { mode, bindload, binderror } = this.props;

        this.getMode(mode).then(mode => {
            this.setState({
                mode
            })
            bindload && bindload();
        })
        .catch(err => {
             binderror && binderror();
        })
    }

    getMode = mode => {
        const { wrap, image } = this.refs;

        return new Promise((resolve, reject) => {
            if (image.complete) {
                resolve();
            } else {
                image.onload = (event) => {
                    resolve(event);
                }
                image.onerror = (err) => {
                    reject(err)
                }
            }
        }).then(() => {
            let resultMode = mode;
            const imgRate = image.naturalHeight / image.naturalWidth;
            const wrapRate = wrap.offsetHeight / wrap.offsetWidth;
            switch (mode) {
                case 'aspectFit':
                    resultMode = imgRate >= 1 ? 'aspectFit-y' : 'aspectFit-x';
                    break;
                case 'aspectFill':
                    resultMode = imgRate >= 1 ? 'aspectFill-x' : 'aspectFill-y';
                    break;
                case 'wspectFill':
                    resultMode = wrapRate > imgRate ? 'aspectFill-y' : 'aspectFill-x';
                    break;
                default:
                    resultMode = mode;
            }

            if (!resultMode) {
                resultMode = 'scaleToFill';
            }

            return resultMode;
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
