

export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }


  info() {
    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`);
  }

  levelUp() {
    console.log(`Subiendo de nivel a ${this.name}...`);
    this.level++; // Incrementa la propiedad 'level' en 1.
  }
}
const player1 = new Player("Ryu", 10);

player1.info();

player1.levelUp();

player1.info();