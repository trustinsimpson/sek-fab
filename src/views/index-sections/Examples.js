import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
            <Card style={{ width: "20rem" }}>
        <CardImg alt="..." data-src="holder.js/100px180/" top></CardImg>
        <CardBody>
          <CardTitle tag="h4">Card title</CardTitle>
          <CardText className="text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Go somewhere
          </Button>
        </CardBody>
      </Card>
            </div>
            {/* <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
              >
                View Landing Page
              </Button>
            </div> */}
            <div className="col">
              <a href="examples/profile-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profile.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/profile-page"
                outline
                tag={Link}
              >
                View Profile Page
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
