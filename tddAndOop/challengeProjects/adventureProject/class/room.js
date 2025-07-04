class Room {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }
  getEnemies() {
    const { World } = require("./world");
    return World.getEnemiesInRoom(this);
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    if (this.getEnemies().length > 0) {
      console.log(
        `Enemies: ${this.getEnemies()
          .map((enemy) => enemy.name)
          .join(", ")}`
      );
    }
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map((item) => item.name).join(", ")}`);
    }
    console.log(this.getExitsString());
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`;
  }

  connectRooms(direction, connectingRoom) {
    // Check if the direction and connecting room are valid
    if (["n", "s", "e", "w"].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {
    return this.items.find((item) => item.name === name);
  }
  getEnemyByName(name) {
    // Fill this in
  }
}

module.exports = {
  Room,
};
