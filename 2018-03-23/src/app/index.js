import { Output } from "./includes/Output";

let React = require('react'),
    ReactDOM = require('react-dom'),
    createReactClass = require('create-react-class')
;

ReactDOM.render(
	<Output
    	text_h1 = { Math.random() }
		text_h2 = { Math.random() }
		text_h3 = { Math.random() }
	/>,
    document.getElementById('main')
);
