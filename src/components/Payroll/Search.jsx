import React, { Component } from 'react'
import { Button, Col } from "reactstrap";

export default class Search extends Component {
  render() {
    return (
      <Col sm={6} md={3} lg={3} xl={2}>
        <Button color="primary" block>
          Search
        </Button>
      </Col>
    )
  }
}
