import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  componentDidMount = () => {
    //Router.push("/components");
  };

  render() {
    return (
      <div>
        <h2> Ops!! Parece que você está perdido, certo?</h2>
      </div>
    );
  }
}
