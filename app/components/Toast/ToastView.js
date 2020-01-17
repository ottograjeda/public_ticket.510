import React, { Component } from 'react'; 
import ReactDOM from "react-dom";

// a component ( stateFULL = uses state to display UI )
class Toast extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	  		showToast: false, // is the toggle
		};
		this.buttonClick = this.buttonClick.bind(this);
		//this.resetClick = this.resetClick.bind(this); // see below
	}

	buttonClick = () => {
		//console.log(event.detail) // see # of clicks
		// activate on first click only = avoid multiple clicks
		if(!event.detail || event.detail == 1) {
			//console.log('state ' +this.state.showToast)
			// setState no callback
			//this.setState({	showToast: true, }); // will not allow second click as state set to true
			// setState with callback
		    this.setState( {
		    	showToast: true
		    	}, () => {
		      		setTimeout( () => 
		      			this.setState({ showToast: false })
		    		,  3000) // should match animation (if animation used)
		    		});
		}
	}

	/* 
	// see below
	resetClick = () => {
		console.log('reset')
		console.log('state ' +this.state.showToast)
		this.setState({	showToast: false, });
	}
	*/

	componentDidMount() {
		//console.log('did mount - toast')
	}
	
	render () {

		const { showToast } = this.state; 

	    // conditional render
		// using span since default css/js properties for span are minimal
	    if (showToast) { 
			//console.log('@ if state ' +this.state.showToast)
	      	aDiv = <span className='toast'>TOAST</span> /// span position is relative to button
	      	///this.resetClick(); // will fail - use setTimeout in buttonClick or add Reset Button to UI
	    } else {
			//console.log('@ if state ' +this.state.showToast)
	      	aDiv = ''
	    }
	    // NOTE: if props needed, render + buttonClick would need refactor
	    // NOTE: Toast display is relative to button ; if fixed (position of) Toast needed, edit toast.css
	    // For inspiration, inspect code from any of these packages. https://www.npmjs.com/search?q=reactjs%20snackbar

	    return (

		// Reset Button (is commented out). Move+Add (in right code block location) if not using callback with setState
		// <p /><span><small><button style={{zIndex:'2',}} className='btn' onClick={this.resetClick}>Reset</button></small></span>
    	<div className='mui--text-center'>
    		<p /><span><small><button style={{zIndex:'2',}} className='btn' onClick={this.buttonClick}>Show Toast</button></small></span>
	    	<div className='mui-container mui--text-center'>{aDiv}</div>
    	</div>

	    );

  	} 
} 

export default Toast
