let React = require('react');

export let output_link_click = (e) => {
    return (
        e.target.innerHTML = Math.random()
    )
};
