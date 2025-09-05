
export class Player {
  
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.xp = 0;
    this.xpToNextLevel = 100; 
  }

  
  info() {
    console.log(
      `${this.name} | Nivel: ${this.level} | XP: ${this.xp}/${this.xpToNextLevel}`
    );
  }

  
  levelUp() {
    this.level++;
    this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.5);
    console.log(`🎉 ¡${this.name} ha subido al Nivel ${this.level}! 🎉`);
  }
  
  /**
   * Añade puntos de experiencia y comprueba si se debe subir de nivel.
   * @param {number} amount - La cantidad de XP ganada.
   */
  gainXp(amount) {
    this.xp += amount;
    console.log(`\n[XP] ${this.name} ha ganado ${amount} puntos de experiencia.`);
    
 
    while (this.xp >= this.xpToNextLevel) {
      this.xp -= this.xpToNextLevel;
      this.levelUp();
    }
  }
}


const player = new Player("Jesús");

player.info();
player.gainXp(250); 
player.info();