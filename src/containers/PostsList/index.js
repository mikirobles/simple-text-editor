import PostsList from '../../components/PostsList';
import { addPost, deletePost } from '../../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    addPost: id => dispatch(addPost({ id })),
    deletePost: id => dispatch(deletePost({ id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
