import { output_button_click } from "../includes/output_button_click";
import { output_link_click } from "../includes/output_link_click";

let React = require('react');

export let Output = props => {

	return (
		<div
			className={ 'Output' }
		>
			<h1>{ "h1: " + props.text_h1 }</h1>
            <h2>{ "h2: " + props.text_h2 }</h2>
            <h3>{ "h3: " + props.text_h3 }</h3>
			<button onClick={ e => output_button_click(e) }>Hello</button>
			<button onClick={ e => output_button_click(e) }>There</button>
            <p>
                <a href="#"
                    onClick={ e => output_link_click(e) }
                >
                    Link Here
                </a>
            </p>
		</div>
	)
};
