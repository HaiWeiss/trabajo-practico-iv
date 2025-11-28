// Funcion para gestionar el inventario
function updateStock(currentStock: number, quantityChange: number): number {
    return currentStock + quantityChange;
}

// Test
const initialStock = 50;
const newStock = updateStock(initialStock, 20); // Sumamos 20
const soldStock = updateStock(newStock, -5);    // Restamos 5

console.log(`Stock inicial: ${initialStock}`);
console.log(`Stock tras reponer: ${newStock}`);
console.log(`Stock tras venta: ${soldStock}`);