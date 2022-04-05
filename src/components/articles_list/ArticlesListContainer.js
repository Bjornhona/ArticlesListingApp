import {compose} from "redux";
import { connect } from "react-redux";
import ArticlesList from "./ArticlesList";

const mapStateToProps = (state) => {
  const {listing, isLoading} = state;

  return {listing, isLoading}
}

export default compose(connect(mapStateToProps, null))(ArticlesList);