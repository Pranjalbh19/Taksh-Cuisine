import React from 'react';
import Header from "./Header";
import Footer from "./Footer"
const Layout = ({children}) => {
  return (
    <div>
        <Header>DFJSK</Header>
       <div>{children}</div> 
       <Footer></Footer>
    </div>
  )
}

export default Layout

