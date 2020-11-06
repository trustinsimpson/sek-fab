/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="d-flex justify-content-center" lg="8" md="12">
            <nav>
              <a href="https://trustinsimpson.com/" target="_blank">
                Developed by Trustin Simpson
              </a>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="twitter"
                href="https://twitter.com/SimpsonTrustin"
                id="tooltip735272548"
                size="md"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Follow me
              </UncontrolledTooltip>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
