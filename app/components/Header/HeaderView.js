import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <section>

  <br />
  <header className="mui-appbar mui--z1" style={{lineHeight:"35px"}}>
  <table width="100%">
  <thead>
    <tr style={{verticalAlign:"middle",backgroundColor:"initial"}}>
      <td className="mui--appbar-height mui--text-button" align="left" style={{padding:"15px"}}> <a href='/' className="mui--text-right" style={{color:"white"}}>Home</a></td>
      <td className="mui--appbar-height " align="right" style={{padding:"15px"}}> <a href='/about.html' className="mui--text-right" style={{color:"white"}}>About Us</a></td>
    </tr>
  </thead>
  </table>
  </header>

  </section>
)

export default Header
