"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var About = React.createClass ({
  render: function () {
    return (
      <div>
        <h1>About This App!</h1>
        <p>
          A simple react app for learning a particular stack of technologies
          that we use including:
          <ul>
            <li>React & ReactDOM</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node.js & NPM</li>
            <li>Gulp Task Runner</li>
            <li>Browserify & Bootstrap</li>
            <li>and other supporting NPM plugins</li>
          </ul>
        </p>
      </div>
    );
  },
});

module.exports = About;