import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import {setDesk} from '../../redux/actions';
import DeskFilterBar from './DeskFilterBar';

const mapStateToProps = (state) => {
  const {desk} = state;

  return {desk}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setDesk}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(DeskFilterBar);