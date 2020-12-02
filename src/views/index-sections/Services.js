import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {  Button, Container, Row, Col } from "reactstrap";
import Cards from "./Card";
import mig from "../../assets/img/mig-welder.jpg";
import tig from "../../assets/img/tig-welder.jpg";
import stick from "../../assets/img/stick-welder.jpg";

// core components

function Services() {
  return (
    <>
      <div className="section section-examples" data-background-color="white" id="services-section">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <Col>
          <Cards pic={ mig } title="MIG Welding" text="Metal inert gas welding. Great control, perfect for welding thinner steels or aluminum."/>
            </Col>
            <Col>
            <Cards pic={ tig } title="TIG Welding" text="Tungsten inert gas welding. Perfect for non-ferous metals like brass, copper, etc."/>
            </Col>
            <Col>
            <Cards pic={ stick } title="Stick Welding" text="Perfect for welding dirty or rusty metal. Deep penetration allows for welding thicker materials."/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Services;
