import {bindActionCreators, compose} from "redux";
import { connect } from "react-redux";
import App from "./App";
import {setListing, setIsLoading} from './redux/actions';

const mapStateToProps = (state) => {
  const {text, page, desk} = state;
  
  return {text, page, desk}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({setListing, setIsLoading}, dispatch)

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);