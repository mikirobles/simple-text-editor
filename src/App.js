import React, { Component } from 'react';
import { setRandomBg } from "./actions/index";
import Layout from './containers/Layout';
import PostsList from './containers/PostsList';
import Editor from './containers/Editor';
import { connect } from 'react-redux';

class App extends Component {
    state = {
        currentPost: this.props.posts[0].id
    };

    viewPost = id => {
        if (id !== this.state.currentPost) {
            this.props.setRandomBg();
            this.setState({ currentPost: id });
        }
    };

    render() {
        return (
            <Layout>
                <PostsList
                    currentPost={this.state.currentPost}
                    viewPost={this.viewPost}
                />
                <Editor
                    post={this.props.posts.find(
                        post => post.id === this.state.currentPost
                    )}
                />
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setRandomBg: () => dispatch(setRandomBg())
})

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
