import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";

// Your page components
import About from "./components/about"; // Ensure these components exist
import Contact from "./components/contact";
import Pricing from "./components/pricing";
import Docs from "./components/docs";
import Login from "./components/login";
import GetStarted from "./components/getStarted";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToPage = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <>
      <Wrapper>
        <Navbar>
          <Logo onClick={() => navigate("/")}>Interactive Studios</Logo>
          <Hamburger onClick={toggleMenu}>☰</Hamburger>
          <NavMenu isOpen={isOpen}>
            <NavItem onClick={() => navigateToPage("/about")}>About</NavItem>
            <NavItem onClick={() => navigateToPage("/contact")}>
              Contact
            </NavItem>
            <NavItem onClick={() => navigateToPage("/pricing")}>
              Pricing
            </NavItem>
            <NavItem onClick={() => navigateToPage("/docs")}>Docs</NavItem>
          </NavMenu>
          <NavButtons>
            <LoginButton onClick={() => navigateToPage("/login")}>
              Log In
            </LoginButton>
            <GetStartedButton onClick={() => navigateToPage("/get-started")}>
              Get Started
            </GetStartedButton>
          </NavButtons>
        </Navbar>

        <SplineBackground>
          <Spline scene="https://prod.spline.design/ve-OO0T3Q5PPiYD2/scene.splinecode" />
        </SplineBackground>

        <Header>
          <h1>Explore the new wave</h1>
          <p>Collaborate with your Colleges, Faster & More Efficient!</p>
          <button className="explore" onClick={() => navigateToPage("/docs")}>
            Explore
          </button>
          <button
            className="pricing"
            onClick={() => navigateToPage("/pricing")}
          >
            Pricing
          </button>
        </Header>
      </Wrapper>

      {/* Add Routes here */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  position: relative;
  z-index: 1;
  text-align: center; /* Center text in the header */
`;

const Navbar = styled.nav`
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
  width: 80%;
  max-width: 1000px;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-family: "Spline Sans", monospace;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 20px;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Hamburger = styled.div`
  cursor: pointer;
  color: white;
  font-size: 24px;
  margin-left: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavMenu = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  margin-top: 15px;
  gap: 15px;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0);
  padding: 20px;
  border-radius: 8px;
  z-index: 9;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 20px;
  }
`;

const NavItem = styled.div`
  margin-bottom: 15px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-left: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const LoginButton = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const GetStartedButton = styled.button`
  background-color: white;
  color: black;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SplineBackground = styled.div`
  position: fixed; /* Fixes the background */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Keep it behind other elements */
`;
