import Layout from '../../components/Layout';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    bgColor: state.background
})

export default connect(mapStateToProps)(Layout)