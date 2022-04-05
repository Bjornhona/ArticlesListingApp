import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import ArticlesList from "./ArticlesList";
import * as actions from '../../redux/actions';

const mapStateToProps = (state) => {
  const {listing, isLoading, text, page, desk} = state;

  return {listing, isLoading, text, page, desk}
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(ArticlesList);