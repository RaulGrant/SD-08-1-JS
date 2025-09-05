// task2.js

export class Player {

  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}
const player1 = new Player("Aragorn", 5);
const player2 = new Player("Gandalf", 20);

console.log(player1);
console.log(player2);