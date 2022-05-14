"use strict";

var React = require("react");
var RecipeApi = require("./RecipeApi");
var RecipeList = require("./RecipeList.jsx");

var Recipes = React.createClass({
  getInitialState: function () {
    return {
      recipes: [],
    };
  },

  componentDidMount: function () {
    if (this.isMounted()) {
      this.setState({
        recipes: RecipeApi.getAllRecipes(),
      });
    }
  },

  render: function () {
    return (
      <div>
        <h1>Our Recipes</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  },
});

module.exports = Recipes;
