"use strict";

var React = require("react");
var ReactDOM = require("react-dom");

var Header = React.createClass({
  render: function () {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img alt="Brand" src="./myLogo.png" />
          </a>
          <ul className="nav nav-tabs">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/#recipes">Recipes</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
          </ul>
        </div>
      </div>
    );
  },
});

module.exports = Header;
