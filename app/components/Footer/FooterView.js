import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'
import './style.css';

class Footer extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    //console.log('did mount - footer')
  }

  // if dynamic content, you will need something like this
  // <div style="position:relative;" id="footer"></div>
  render() {
    return (
      <section>
        <footer >
        <hr style={{backgroundColor:"#2196F3", marginTop:"0",border:"1px!important",height:"1px!important",paddingTop:"1px!important"}} />
            <ul className="list-inline">
              <li className="list-inline-item">
              &copy; 2020 Awesome LLC. All Rights Reserved.
              </li>
            </ul>
        </footer>
     </section>
    );
  } 
} 

export default Footer
