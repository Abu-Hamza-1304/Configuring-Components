"use strict";
/* we are creating a mock web API and we will
access data that is hard-coded in RecipeData.js */
var recipes = require("./RecipeData").recipes;
var _ = require("lodash");

// In a real app this would be done on the server
var _generatedId = function (recipe) {
  return recipe.category.toLowerCase() + "-" + recipe.recipeName;
};

/* Here we are getting a cloned copy so that we can
pass an item by value rather than by reference */
var _cloneMe = function (item) {
  return JSON.parse(JSON.stringify(item));
};

// Here is the reference to generate RecipeApi
var RecipeApi = {
  getAllRecipes: function () {
    return _cloneMe(recipes);
  },

  // get recipe by ID value
  getRecipeById: function (id) {
    var recipe = _.find(recipes, { id: id });
    return _cloneMe(recipe);
  },

  // A mock call to save a recipe
  saveRecipe: function (recipe) {
    // Here's we're pretending to make an ajax call to a web api
    console.log("AJAX call saved recipe to the _");

    if (recipe.id) {
      var existingRecipeIndex = _.indexOf(recipes, _.find(recipe));
      recipes.splice(existingRecipeIndex, 1, recipe);
    } else {
      recipe.id = _generatedId(recipe);
      recipes.push(_cloneMe(recipe));
    }
    return recipe;
  },

  // A mock call to delete a recipe
  deleteRecipe: function (id) {
    console.log("AJAX call deleted recipe from the _");
    _.remove(recipes, { id: id });
  },
};

// This is that we're exporting - the RecipeApi
module.exports = RecipeApi;
