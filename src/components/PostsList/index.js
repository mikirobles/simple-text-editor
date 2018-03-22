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

    showModal = date => {
        this.setState({
            modal: {
                show: true,
                date: date
            }
        });
    };

    confirmDeleteModal = () => (
        <ConfirmModal
            text={'Are you sure you want to delete this post?'}
            onConfirm={() => {
                const nextPost = this.props.posts.find(
                    post => post.date !== this.state.modal.date
                );
                if (nextPost) {
                    this.props.viewPost(nextPost.date);
                    this.props.deletePost({date: this.state.modal.date});
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
        const sortedPosts = posts && posts.sort((a, b) => a.date - b.date);
        return (
            <Fragment>
                <PostsListWrapper>
                    {posts &&
                        sortedPosts.map((post, i) => (
                            <PostButton
                                onClick={() => viewPost(post.date)}
                                key={i}
                                selected={post.date === currentPost}
                            >
                                {posts.length > 1 ? (
                                    <DeleteButton
                                        onClick={() => this.showModal(post.date)}
                                    />
                                ) : null}
                                {post.title || <span>Untitled {post.text && `(${post.text.split(' ').slice(0,3).join(' ')}...)`}</span>}
                            </PostButton>
                        ))}
                    <CreateButton
                        onClick={addPost}
                    />
                </PostsListWrapper>
                {this.state.modal.show && this.confirmDeleteModal()}
            </Fragment>
        );
    }
}

export default PostList;
