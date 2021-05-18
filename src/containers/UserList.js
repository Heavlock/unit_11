import {connect} from "react-redux";
import List from '../components/List';

function mapStateToProps(state) {
    return {...state}
}

export default connect(
    mapStateToProps,
    null
)(List);