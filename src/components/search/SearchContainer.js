import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import {setText} from '../../redux/actions';
import Search from './Search';

const mapStateToProps = (state) => {
  const {text} = state;

  return {text}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setText}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(Search);