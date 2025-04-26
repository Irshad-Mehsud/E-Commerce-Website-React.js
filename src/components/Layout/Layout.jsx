// Layout.jsx
import React from "react";
import DesktopNavbar from "../navbar/NavbarWrapper"; // adjust the path
import NavbarWrapper from "../navbar/NavbarWrapper";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarWrapper />
      <main>{children}</main>
    </>
  );
};

export default Layout;
