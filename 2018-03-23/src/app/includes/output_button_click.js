let React = require('react');

export let output_button_click = (e) => {
    return (
        e.target.innerHTML = "" + Math.random() + " - - - - - -" + Math.random() + ""
    )
};
