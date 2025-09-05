export class Player {
 
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }


  info() {

    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`);
  }
}

const player1 = new Player("Tara", 6);
const player2 = new Player("Kratos", 99);


player1.info();
player2.info();