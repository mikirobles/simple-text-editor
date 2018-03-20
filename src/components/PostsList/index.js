import styled from 'styled-components';
import { addPost, viewPost } from '../../actions/index';
import { connect } from 'react-redux';
import React from 'react';

const PostsListWrapper = styled.div`
    width: 300px;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 20px;
    padding: 20px;
    background: #5f4b66;
    height: calc(100vh - var(--header-height));
    box-shadow: inset -4px 0px 11px 0px #00000038;
`;

const Button = styled.button`
    height: 80px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 1em;
`;

const PostButton = Button.extend`
    background: ${props => !props.selected ? '#e8e9eb' : '#d3d4d6'};
`;

const CreateButton = Button.extend`
    background: #ffffff30;
    outline: none;
    border: 3px solid #ffffff90;
    color: #ffffff90;
    opacity: 0.8;
    transition: 0.15s ease all;
    font-size: 2em;
    &:hover,
    &:focus {
        opacity: 1;
    }
`;

const PostList = ({ posts, addPost, viewPost, currentPost }) => {
    const sortedPosts = posts ? posts.sort((a, b) => a.id - b.id) : null;
    return (
        <PostsListWrapper>
            {posts
                ? sortedPosts.map((post, i) => (
                      <PostButton
                          onClick={() => viewPost(post.id)}
                          key={i}
                          selected={post.id === currentPost}
                      >
                          {post.title}
                      </PostButton>
                  ))
                : null}
            <CreateButton
                onClick={() => addPost(posts[posts.length - 1].id + 1)}
            >
                +
            </CreateButton>
        </PostsListWrapper>
    );
};

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    addPost: id => dispatch(addPost({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
