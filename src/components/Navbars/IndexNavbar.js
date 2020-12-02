import React from "react";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand target="_blank" id="navbar-brand">
              <NavLink
                href="#pablo"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("header-section").scrollIntoView();
                }}
              >
                SEK Fabrication
              </NavLink>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Welding and Fabrication Services
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services-section")
                      .scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(false);
                  }}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Services</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("about-section").scrollIntoView();
                    document.documentElement.classList.toggle("nav-open");
                    setCollapseOpen(false);
                  }}
                >
                  <i className="now-ui-icons travel_info"></i>
                  <p>About</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/SEK-Fabrication-108075677742785/"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="mailto: lawson22small@gmail.com"
                  target="_blank"
                  id="email-tooltip"
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p className="d-lg-none d-xl-none">Email</p>
                </NavLink>
                <UncontrolledTooltip target="#email-tooltip">
                  Email us
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
