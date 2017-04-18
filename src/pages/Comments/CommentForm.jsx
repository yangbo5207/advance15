import React, { Component } from 'react';

class CommentForm extends Component {
    state = {
        author: '',
        text: ''
    }

    handleAuthorChange = e => this.setState({
        author: e.target.value
    })

    handleTextChange = e => this.setState({
        text: e.target.value
    })

    handleSubmit = e => {
        e.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();

        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({
            author,
            text
        })

        this.setState({
            author: '',
            text: ''
        })
    }

    render() {
        const { author, text } = this.state;
        return (
            <form className="commentForm" onSubmit={ this.handleSubmit }>
                <input type="text" placeholder="Your name" value={author} onChange={this.handleAuthorChange} />
                <input type="text" placeholder="say something..." value={text} onChange={this.handleTextChange} />
                <input type="submit" value="POST" />
            </form>
        )
    }
}

export default CommentForm;
