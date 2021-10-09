import React, { FC } from "react";
import NavBar from "./NavBar";


function Layout(children: any) {
  return (
    <div>
      <NavBar />
      <div>
        {children.children}
      </div>
    </div>
  );
};

export default Layout;
