import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCollapse,
  CardBody,
  Card,
} from "reactstrap";

// core components

function About() {
  return (
    <>
      <div
        className="section section-about"
        data-background-color="black"
        id="about-section"
      >
        <Container>
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <h3 className="title">A bond stronger than your first marriage</h3>
              <h5 className="description">
                Since I was child, I knew I wanted to work for myself and that I
                wasn't destined for an office, but I didn't know exactly what I
                wanted to do. Over time, as I worked around my grandpa's
                farm, I started to see how important welding is.
                Eventually I began to see that there's so much more to fabrication
                than just fixing a couple broken welds, and I began to see
                a dream for the future! Years, trade school, a couple
                welding jobs, and fab projects later - now that dream of working
                for myself has become a reality!
              </h5>
              <h5 className="description">
                Let me know what your needs are, and we'll figure out exactly
                how I can help with your next project!
              </h5>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-round"
                size="lg"
                color="info"
                id="buttonToggler"
              >
                Contact
              </Button>
              <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
                <Card color="neutral" id="about-card">
                  <CardBody>
                    <h5 className="text-muted">
                      <i className="now-ui-icons tech_mobile mr-1 align-middle"></i>
                        (620) 224-8242
                    </h5>
                    <hr className="w-50"></hr>
                    <h5 className="text-muted">
                      <i className="now-ui-icons ui-1_email-85 mr-1 align-middle"></i>
                        lawson22small@gmail.com
                    </h5>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center sharing-area text-center">
            <Col className="text-center" lg="8" md="12">
              <h3>Thank you for supporting local business!</h3>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="facebook"
                href="https://www.facebook.com/SEK-Fabrication-108075677742785"
                id="tooltip735272548"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip735272548">
                Like us
              </UncontrolledTooltip>
              {/* <Button
                className="btn-neutral btn-icon btn-round"
                color="linkedin"
                href="https://www.linkedin.com/company-beta/9430489/?ref=creativetim"
                id="tooltip647117716"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip647117716">
                Follow us
              </UncontrolledTooltip> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
