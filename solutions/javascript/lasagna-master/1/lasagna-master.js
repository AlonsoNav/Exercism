/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer){
  if (timer === undefined)
    return 'You forgot to set the timer.'
  if (timer === 0)
    return 'Lasagna is done.'
  else
    return 'Not done, please wait.'
}

export function preparationTime(layers, averageTime = 2){
  return layers.length * averageTime;
}

export function quantities(layers){
  const amounts = {noodles: 0, sauce: 0}
  layers.forEach((layer) => {
    if (layer == 'noodles')
      amounts.noodles += 50
    else if (layer == 'sauce')
      amounts.sauce += 0.2
  })
  return amounts
}

export function addSecretIngredient(friendsList, myList){
  if (friendsList.length > 0)
    myList.push(friendsList.at(-1))
}

export function scaleRecipe(recipe, portions){
  const newRecipe = {}
  portions /= 2
  for (let [key, value] of Object.entries(recipe)){
    newRecipe[key] = value * portions
  }
  return newRecipe
}