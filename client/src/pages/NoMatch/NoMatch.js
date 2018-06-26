import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container>
    <Row>
      <Col size="12">
        <Jumbotron
          fontawesome="fas fa-blind" 
          title="404 Page Not Found" 
          lead="Please don't break our stuff 😢"/>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
