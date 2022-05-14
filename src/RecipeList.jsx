"use strict";
var React = require("react");

var RecipeList = React.createClass ({
  propTypes: {
    recipes: React.PropTypes.array.isRequired,
  },

  render: function () {
    var createRecipeRow = function (recipe) {
      return (
        <tr key={recipe.id}>
          <td>
            <a href={"/#recipe/" + recipe.id}>{recipe.id}</a>
          </td>
          <td>
            <a href={"/#recipe/" + recipe.id}>{recipe.recipeName}</a>
          </td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>Recipe Name</th>
            </tr>
          </thead>
          <tbody>{this.props.recipes.map(createRecipeRow, this)}</tbody>
        </table>
      </div>
    );
  },
});

module.exports = RecipeList;
