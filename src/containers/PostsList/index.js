import PostsList from '../../components/PostsList';
import { addPost, deletePost } from '../../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    posts: state.posts
});

export default connect(mapStateToProps, {addPost, deletePost})(PostsList);
