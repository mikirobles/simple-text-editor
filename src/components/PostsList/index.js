import styled from 'styled-components';
import ConfirmModal from '../ConfirmModal';
import { addPost, deletePost } from '../../actions/index';
import { connect } from 'react-redux';
import React from 'react';

const Fragment = React.Fragment;

const PostsListWrapper = styled.div`
    grid-column: 1 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 20px;
    padding: 20px;
    background: #5f4b66;
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
    background: ${props => (!props.selected ? '#e8e9eb' : '#d3d4d6')};
    position: relative;
    .delete {
        width: 20px;
        height: 20px;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        outline: none;
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0.2;
        cursor: pointer;
        transition: 0.1s ease all;
        &:hover {
            opacity: 0.4;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

const CreateButtonWrapper = Button.extend`
    background: #ffffff10;
    outline: none;
    border: 3px solid #ffffff70;
    color: #ffffff70;
    transition: 0.15s ease all;
    font-size: 2em;
    &:hover,
    &:focus {
        background: #ffffff20;
        border-color: #fff;
        color: #fff;
    }
`;

const CreateButton = props => (
    <CreateButtonWrapper {...props}>+</CreateButtonWrapper>
);

const initialModalState = {
    modal: {
        show: false,
        id: null
    }
};

const DeleteButton = ({ onClick }) => (
    <a onClick={onClick} className={'delete'}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_96165.png" alt="" />
    </a>
);

class PostList extends React.Component {
    state = initialModalState;

    showModal = id => {
        this.setState({
            modal: {
                show: true,
                id: id
            }
        });
    };

    confirmDeleteModal = () => (
        <ConfirmModal
            text={'Are you sure you want to delete this post?'}
            onConfirm={() => {
                const nextPost = this.props.posts.find(
                    post => post.id !== this.state.modal.id
                );
                if (nextPost) {
                    this.props.viewPost(nextPost.id);
                    this.props.deletePost(this.state.modal.id);
                }
                this.closeModal();
            }}
            onCancel={this.closeModal}
        />
    );

    closeModal = () => {
        this.setState(initialModalState);
    };

    render() {
        const { posts, addPost, viewPost, currentPost } = this.props;
        const sortedPosts = posts ? posts.sort((a, b) => a.id - b.id) : null;
        return (
            <Fragment>
                <PostsListWrapper>
                    {posts
                        ? sortedPosts.map((post, i) => (
                              <PostButton
                                  onClick={() => viewPost(post.id)}
                                  key={i}
                                  selected={post.id === currentPost}
                              >
                                  {posts.length > 1 ? (
                                      <DeleteButton
                                          onClick={() =>
                                              this.showModal(post.id)
                                          }
                                      />
                                  ) : null}
                                  {post.title}
                              </PostButton>
                          ))
                        : null}
                    <CreateButton
                        onClick={() => addPost(posts[posts.length - 1].id + 1)}
                    />
                </PostsListWrapper>
                {this.state.modal.show ? this.confirmDeleteModal() : null}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    addPost: id => dispatch(addPost({ id })),
    deletePost: id => dispatch(deletePost({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
