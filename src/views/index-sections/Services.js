import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {  Button, Container, Row, Col } from "reactstrap";
import Cards from "./Card";
import mig from "../../assets/img/mig-welder.jpg";
import tig from "../../assets/img/tig-welder.jpg";

// core components

function Services() {
  return (
    <>
      <div className="section section-examples" data-background-color="white">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <Col>
          <Cards pic={ mig } title="MIG Welding" text="Metal inert gas welding. Used when I want to use it, losers."/>
            </Col>
            <Col>
            <Cards pic={ tig } title="TIG Welding" text="Tungsten inert gas welding. Used when I want to use it, scrubs."/>
            </Col>
            <Col>
            <Cards pic={ tig } title="TIG Welding" text="Tungsten inert gas welding. Used when I want to use it, scrubs."/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
