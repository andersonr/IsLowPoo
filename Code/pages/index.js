import React, { Component } from "react";
import Router from "next/router";

export default class Index extends Component {
  componentDidMount = () => {
    //Router.push("/components");
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            Router.push("/components");
          }}
        >
          {" "}
          Componentes de exemplo{" "}
        </Button>
        <hr />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            Router.push("/landing");
          }}
        >
          Landing
        </Button>
      </Container>
    );
  }
}
