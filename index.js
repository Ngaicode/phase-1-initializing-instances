// Write your code here
"use strict";
// creates a class called brakfast
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
//  a class called dinner with the correct parameters
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}
// a class called lunch with the correct parameters
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
