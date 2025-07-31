/// <reference path="./global.d.ts" />
//
// @ts-check

const PRICES = {
    "Margherita": 7,
    "Caprese": 9,
    "Formaggio": 10,
    "ExtraSauce": 1,
    "ExtraToppings": 2
}

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if(extras.length === 0)
    return PRICES[pizza];
  else{
    const [first, ...rest] = extras;
    return PRICES[pizza] + pizzaPrice(first, ...rest);
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalPrice = 0;
  for(const pizzaOrder of pizzaOrders)
    totalPrice += pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras);
  return totalPrice;
}
