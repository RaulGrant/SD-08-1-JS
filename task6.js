export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
  }
}

class Party {
  constructor(name) {
    this.name = name;
    this.members = []; 
  }

  // Método para añadir un jugador al array 'members'.
  addMember(player) {
    this.members.push(player);
    console.log(`\n[GRUPO] ${player.name} se ha unido a "${this.name}".`);
  }

  // Método para eliminar un jugador del array por su nombre.
  removeMember(playerName) {
    const index = this.members.findIndex(p => p.name === playerName);
    if (index !== -1) {
      const [removedPlayer] = this.members.splice(index, 1);
      console.log(`\n[GRUPO] ${removedPlayer.name} ha abandonado "${this.name}".`);
    } else {
      console.log(`\n[GRUPO] Jugador "${playerName}" no encontrado.`);
    }
  }

  // Muestra todos los miembros actuales.
  listMembers() {
    console.log(`\n--- Miembros de "${this.name}" ---`);
    this.members.forEach(p => console.log(`- ${p.name} (Nivel ${p.level})`));
    console.log("--------------------------");
  }
}

// --- DEMOSTRACIÓN DE USO ---
console.log("--- Tarea 6: Sistema de Grupos ---");
const player1 = new Player("Link");
const player2 = new Player("Zelda", 5);
const party = new Party("Héroes de Hyrule");

party.addMember(player1);
party.addMember(player2);
party.listMembers();

party.removeMember("Link");
party.listMembers();