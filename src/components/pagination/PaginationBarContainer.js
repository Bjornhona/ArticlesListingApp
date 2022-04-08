import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import {setPage} from '../../redux/actions';
import PaginationBar from './PaginationBar';

const mapStateToProps = (state) => {
  const {page, listing} = state;
  const totalPages = listing && listing.docs ? listing.docs.length : 0;
  const meta = listing && listing.meta;

  return {page, totalPages, meta}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setPage}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(PaginationBar);