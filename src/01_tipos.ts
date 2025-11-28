// Tipos fundamentales
let productName: string = "Razer DeathStalker V2 Pro";
let productPrice: number = 249.99;

console.log(`Producto: ${productName}, Precio: $${productPrice}`);

// Tipo Union
let productId: string | number;

productId = 777; // Prueba con numero
console.log(`ID (number): ${productId}`);

productId = "ABC-777"; // Prueba con string
console.log(`ID (string): ${productId}`);

// Interfaz Basica
interface Product {
    name: string;
    price: number;
}

const myProduct: Product = {
    name: "Razer Basilisk V3 Pro",
    price: 159.00
};

console.log("Objeto myProduct:", myProduct);