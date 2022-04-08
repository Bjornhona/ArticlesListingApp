import {compose} from "redux";
import { connect } from "react-redux";
import ArticlesList from "./ArticlesList";

const mapStateToProps = (state) => {
  const {listing, isLoading} = state;
  const docs = listing && listing.docs;

  return {docs, isLoading}
}

export default compose(connect(mapStateToProps, null))(ArticlesList);