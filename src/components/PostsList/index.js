import ConfirmModal from '../ConfirmModal';
import { CreateButtonWrapper, PostButton, PostsListWrapper } from './style';
import React from 'react';

const Fragment = React.Fragment;

const CreateButton = props => <CreateButtonWrapper {...props} />;

const DeleteButton = ({ onClick }) => (
    <a onClick={onClick} className={'delete'}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_96165.png" alt="" />
    </a>
);

const initialModalState = {
    modal: {
        show: false,
        id: null
    }
};

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
                    this.props.deletePost({id: this.state.modal.id});
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
                    {posts &&
                        sortedPosts.map((post, i) => (
                            <PostButton
                                onClick={() => viewPost(post.id)}
                                key={i}
                                selected={post.id === currentPost}
                            >
                                {posts.length > 1 ? (
                                    <DeleteButton
                                        onClick={() => this.showModal(post.id)}
                                    />
                                ) : null}
                                {post.title}
                            </PostButton>
                        ))}
                    <CreateButton
                        onClick={() => addPost(posts[posts.length - 1].id + 1)}
                    />
                </PostsListWrapper>
                {this.state.modal.show && this.confirmDeleteModal()}
            </Fragment>
        );
    }
}

export default PostList;
