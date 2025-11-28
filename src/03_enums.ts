// Tipos Literales
type OrderStatus = "pending" | "shipped" | "delivered";

let orderStatus: OrderStatus = "pending";
console.log(`Estado de la orden inicial: ${orderStatus}`);

orderStatus = "shipped";
console.log(`Estado de la orden actualizado: ${orderStatus}`);

// Enum
enum LogLevel {
    Info = "Info",
    Warning = "Warning",
    Error = "Error"
}

function logMessage(level: LogLevel, message: string): void {
    console.log(`[${level}]: ${message}`);
}

// Test de Enum
logMessage(LogLevel.Info, "El sistema inicio correctamente.");
logMessage(LogLevel.Error, "Fallo la conexion a la base de datos.");