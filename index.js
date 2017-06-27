let recipes = { name: "ingredients"};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign(recipes, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var newRecipes = Object.assign({}, object)
  return delete newRecipes[key];

}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
