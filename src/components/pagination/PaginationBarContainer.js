import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import {setPage} from '../../redux/actions';
import PaginationBar from './PaginationBar';

const mapStateToProps = (state) => {
  const {page, listing} = state;
  const totalPages = listing ? listing.length : 0;

  return {page, totalPages}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setPage}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(PaginationBar);