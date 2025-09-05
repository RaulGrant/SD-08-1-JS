export class Player {
   constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.inventory = {};
  }
  
  // Añade un artículo al inventario.

  addItem(itemName, quantity = 1) {
    if (this.inventory[itemName]) {
      // Si el artículo ya existe, suma la cantidad.
      this.inventory[itemName] += quantity;
    } else {
      // Si no, crea la nueva entrada.
      this.inventory[itemName] = quantity;
    }
    console.log(`[Inventario] Se añadió ${quantity}x ${itemName}.`);
  }

  // Elimina una cantidad de un artículo del inventario.

  removeItem(itemName, quantity = 1) {
    if (this.inventory[itemName]) {
      this.inventory[itemName] -= quantity;
      console.log(`[Inventario] Se eliminó ${quantity}x ${itemName}.`);
      // Si la cantidad llega a 0 o menos, elimina el artículo por completo.
      if (this.inventory[itemName] <= 0) {
        delete this.inventory[itemName];
        console.log(`[Inventario] ${itemName} se ha agotado.`);
      }
    } else {
      console.log(`[Inventario] No tienes ${itemName}.`);
    }
  }
  
  // Muestra el inventario en la consola.
  showInventory() {
    console.log(`\n--- Inventario de ${this.name} ---`);
    // Object.keys obtiene un array con los nombres de los artículos.
    if (Object.keys(this.inventory).length === 0) {
        console.log("   (Vacío)");
    } else {
        for (const item in this.inventory) {
            console.log(`- ${item}: ${this.inventory[item]}`);
        }
    }
    console.log("--------------------------");
  }
}

// --- DEMOSTRACIÓN DE USO ---
console.log("--- Tarea 7: Sistema de Inventario ---");
const player = new Player("Geralt");

player.showInventory();
player.addItem("Poción", 5);
player.addItem("Espada de plata");
player.addItem("Poción", 2); // Añade más del mismo artículo.
player.showInventory();

player.removeItem("Poción", 3);
player.removeItem("Espada de plata");
player.showInventory();