import React, { Component } from 'react';
import Layout from './components/Layout';
import PostsList from './components/PostsList';
import Editor from './components/Editor';
import { connect } from 'react-redux';

class App extends Component {
    state = {
        currentPost: this.props.posts[0].id
    }

    render() {
        return (
            <Layout>
                <PostsList currentPost={this.state.currentPost} viewPost={(id) => this.setState({currentPost: id})} />
                <Editor post={this.props.posts.find(post => post.id === this.state.currentPost)} />
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps)(App);
