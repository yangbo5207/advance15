import React, { Component } from 'react';
import Image from '../../components/Image';
import Switch from '../../components/Switch';

export default class Images extends Component {
    render() {
        return (
            <div className="advance-pages-item">
                <section className="code-box">
                    <div className="show-demo code-box-item">
                        <div className="show-box-title">演示</div>

                        <p>scaleToFill： 不保持比例，直接完全填充</p>
                        <Image mode="scaleToFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095562560&di=b17be6d66804d0fbe0a19c2bfa80f180&imgtype=0&src=http%3A%2F%2Fupload.qianhuaweb.com%2F2017%2F0224%2F1487915723762.JPEG" />

                        <p>aspectFit: 保持比例，长边完整显示，另外一边居中</p>
                        <Image mode="aspectFit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095741460&di=c25065ec6c2a6bb3d4a1992ccd8d0b4f&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dca1fd2eb054f78f0805e92f74c012663%2Fbd3eb13533fa828b97ecd15cfb1f4134960a5a45.jpg" />
                        .
                        <Image mode="aspectFit" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />

                        <p>aspectFill: 保持比例，短边完全显示，长边居中</p>
                        <Image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095741460&di=c25065ec6c2a6bb3d4a1992ccd8d0b4f&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dca1fd2eb054f78f0805e92f74c012663%2Fbd3eb13533fa828b97ecd15cfb1f4134960a5a45.jpg" />
                        .
                        <Image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />

                        <p>wspectFill: 保持比例，当外框尺寸比例与图片尺寸比例相比，发现即使是让图片的短边完全显示，图片仍然无法填充时就需要使用这种模式，以保证图片尺寸比例与外框比例无论是什么情况下都能填充</p>
                        aspectFill
                        <Image mode="aspectFill" width="550" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        wspectFill
                        <Image mode="wspectFill" width="550" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />

                        <p>裁剪模式： 保持原图，top, bottom, left, right, top-left, top-right, bottom-left, bottom-right</p>
                        <Image mode="top" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="bottom" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="top-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="top-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="bottom-left" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                        <Image mode="bottom-right" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492095816149&di=31472d3836bc9f54166b99e6d08f8147&imgtype=0&src=http%3A%2F%2Fpic5.qiyipic.com%2Fcommon%2F20130524%2F7dc5679567cd4243a0a41e5bf626ad77.jpg%3Fsrc%3Dfocustat_4_20130527_7" />
                    </div>
                    <div className="show-desc code-box-item">
                        <div className="show-box-title">描述</div>
                        <p>图片</p>
                    </div>
                    <div className="show-code code-box-item">
                        <div className="show-box-title">代码</div>
                    </div>
                </section>
                <Switch nextType="comment" prevType="button" />
            </div>
        )
    }
}
