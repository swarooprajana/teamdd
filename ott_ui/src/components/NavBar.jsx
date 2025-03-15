import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, PlayCircleOutline, AccountCircle, Archive, Download, History } from "@mui/icons-material";
import { FaQrcode } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";


function NavBar() {
  const [value, setValue] = useState(0);
  const location = useLocation(); // Get current route location

  // List of paths where we want to hide the navbar
  const hiddenPaths = ["/", "/Login", "/confirm", "/Emailott", "/Welcome"];

  // Check if current path matches any hidden path
  const isNavbarHidden = hiddenPaths.includes(location.pathname);

  if (isNavbarHidden) {
    return null; // If the current path is in hiddenPaths, return null to hide the navbar
  }

  return (
    <>
      <Navbar style={{ width: "100%", backgroundColor: "#121212", height: "100px" }} expand="md" className="py-3 text-white">
        <Container style={{ width: "100%", justifyContent: "center" }}>
          <Nav className="d-flex flex-row flex-grow-1 align-items-center" style={{ gap: "30px", justifyContent: "space-around" }}>
            <Nav.Item>
              <Nav.Link as={Link} to="/Imageslider" className="px-4" style={{ color: "white" }}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/category/movies" className="px-4" style={{ color: "white" }}>
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  as={Link} to="/category/tv shows" className="px-4" style={{ color: "white" }}>Tv-Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Categories"  className="px-4" style={{ color: "white" }}>
                <h2 style={{ fontSize: "l-large", color: "white" }}><FaQrcode /></h2>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Subscription"  className="px-4" style={{ color: "white" }}>Subscription</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/download" className="px-4" style={{ color: "white" }}>Downloads</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/History" className="px-4" style={{ color: "white" }}>History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">
                <Button variant="info" className="px-4">Logout</Button>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="./Profile1" className="px-4" style={{ color: "white" }}>
                <h2 style={{ fontSize: "xxl-large", color: "green" }}><IoPersonCircleSharp /></h2>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      {/* Bottom Navigation for Mobile */}
      <Container fluid className="position-fixed bottom-0 start-0 w-100 bg-dark d-flex d-md-none">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          className="py-2 w-100"
          sx={{
            backgroundColor: "#121212",
            color: "white",
          }}
        >
          <BottomNavigationAction label="Home" icon={<Home />} sx={{ color: "white" }} component={Link} to="/Imageslider" />
          <BottomNavigationAction label="Videos" icon={<PlayCircleOutline />} sx={{ color: "white" }} component={Link} to="/Movies" />
          <div className="position-relative">
            <div
              className="position-absolute top-0 start-50 translate-middle p-2 rounded-circle bg-success shadow"
              style={{ width: "60px", height: "60px", border: "4px solid #121212" }}
            >
              <AccountCircle sx={{ fontSize: 40, color: "white" }} />
            </div>
          </div>
          <BottomNavigationAction label="Library" icon={<Archive />} sx={{ color: "white" }} component={Link} to="/Tvshows" />
          <BottomNavigationAction label="Downloads" icon={<Download />} sx={{ color: "white" }} component={Link} to="/download" />
          <BottomNavigationAction label="History" icon={<History />} sx={{ color: "white" }} component={Link} to="/History" />
        </BottomNavigation>
      </Container>
    </>
  );
}

export default NavBar;
