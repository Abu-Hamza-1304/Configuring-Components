"use strict";
/* use immediately invoked function expression (IIFE)
to get around not using strict mode here */
// $ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var Home = require("./HomePage.jsx");
var About = require("./AboutPage.jsx");
var Header = require('./Header.jsx');
var Recipes = require("./RecipePage.jsx");

var App = React.createClass({
  render: function () {
    var Child;
    switch (this.props.route) {
      case "about":
        Child = About;
        break;
      case "recipes":
        Child = Recipes;
        break;
      default:
        Child = Home;
    }
    return (
      <div>
        <Header />
        <Child />
      </div>
    );
  },
});

function _routeMe() {
  // this gets the part of the url after the '#'
  var route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, document.getElementById("root"));
}

window.addEventListener("hashchange", _routeMe);
_routeMe();
