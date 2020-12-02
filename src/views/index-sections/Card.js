import React from "react";
// reactstrap components
import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
// core components


function Cards(props){
  return (
    <>
      <Card style={{ width: "20rem" }}>
        <CardImg alt="..." top src={props.pic} style={{ height: "168.53px"}}></CardImg>
        <CardBody>
        <CardTitle tag="h4" className="text-muted">{props.title}</CardTitle>
          <CardText className="text-muted">
            {props.text}
          </CardText>
          {/* <Button
            color="info"
            href="#pablo"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about-section")
                .scrollIntoView();
            }}
          >
            Contact
          </Button> */}
        </CardBody>
      </Card>
    </>
  );
}

export default Cards;