import React, { Component } from 'react';
import Button from '../../components/Button';
import Switch from '../../components/Switch';

import '../Index/post.css';

const {ButtonGroup} = Button;

class Pbutton extends Component {
    state = {
        loading: false,
        loading2: false
    }

    btnClick = e => {
        this.setState({
            loading: true
        })

        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    btn2Click = e => {
        this.setState({
            loading2: true
        })

        setTimeout(() => this.setState({ loading2: false }), 1000);
    }

    render() {

        const {loading, loading2} = this.state;

        return (
            <div className="advance-pages-item advance-pages-button">
                <section className="code-box">
                    <div className="show-demo code-box-item">
                        <div className="show-box-title">演示</div>
                        <p>
                            <Button context="Default" />
                            <Button type="primary" context="Primary" />
                            <Button type="danger" context="Danger" />
                        </p>
                        <p>
                            <Button type="primary" context="loading" icon="loading" loading={true} />
                        </p>
                        <p>
                            <Button type="primary" onClick={this.btnClick} context="submit" icon={loading ? 'loading' : null} loading={loading} disabled={ loading ? 'disabled' : null } />
                            <Button type="primary" onClick={this.btn2Click} context="Serach" icon={loading2 ? 'loading' : 'search'} loading={loading2} disabled={ loading2 ? 'disabled' : null } />
                        </p>
                        <p>
                            <Button type="primary" shape="circle" icon="good" />
                            <Button type="primary" shape="circle" icon="map" />
                            <Button type="danger" shape="circle" icon="warning" />
                        </p>
                        <ButtonGroup>
                            <Button type="primary" context="1" />
                            <Button context="2" />
                            <Button context="3" />
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button type="primary" context="go back" icon="arrowleft" />
                            <Button type="primary" context="go forward" ricon="arrowright" />
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button type="primary" context="299" icon="good" />
                            <Button type="primary" context="100" icon="bad" />
                        </ButtonGroup>
                    </div>
                    <div className="show-desc code-box-item">
                        <div className="show-box-title">描述</div>
                        <p>按钮</p>
                    </div>
                </section>

                <Switch nextType="image" prevType="icon" />
            </div>
        )
    }
}

export default Pbutton;
