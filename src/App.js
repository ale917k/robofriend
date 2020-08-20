import React from "react";

//redux
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "./redux/actions";

//components
import MainPage from "./components/MainPage/MainPage";

const App = (props) => <MainPage {...props} />;

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
