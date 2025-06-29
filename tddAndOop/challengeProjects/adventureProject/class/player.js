const { Character } = require("./character");
const { Enemy } = require("./enemy");
const { Food } = require("./food");

class Player extends Character {
  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const item = this.currentRoom.getItemByName(itemName);
    if (item) {
      this.currentRoom.items = this.currentRoom.items.filter((i) => i !== item); // remove from room
      this.items.push(item);
    }
  }

  dropItem(itemName) {
    const item = this.getItemByName(itemName);
    if (item) {
      this.items = this.items.filter((i) => i !== item);
      this.currentRoom.items.push(item);
    }
  }

  eatItem(itemName) {
    const item = this.getItemByName(itemName);
    if (item && item instanceof require("./food").Food) {
      // Remove the item from inventory
      this.items = this.items.filter((i) => i !== item);
    } else {
      console.log(`${itemName} is not edible.`);
    }
  }

  getItemByName(name) {
    return this.items.find((item) => item.name === name);
  }
  hit(name) {
    // Fill this in
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }
}

module.exports = {
  Player,
};
