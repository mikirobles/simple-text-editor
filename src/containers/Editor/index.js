import Editor from '../../components/Editor';
import { connect } from 'react-redux';
import { editPost } from '../../actions/index';

export default connect(null, {editPost})(Editor);
