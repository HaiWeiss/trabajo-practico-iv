# Glosario - Trabajo Practico IV

| Concepto | Explicación | Ejemplo |
| :--- | :--- | :--- |
| **Tipado Estático** | Es el sistema donde los tipos se definen antes de ejecutar el programa. Sirve para que el compilador te avise de errores mientras escribís el código. | `let edad: number = 20;` |
| **Union Type** | Nos permite decir que una variable puede ser de dos o más tipos diferentes (por ejemplo, string o number) usando la barra `\|`. | `let id: number \| string;` |
| **Interface** | Define la estructura o la "forma" que tiene que tener un objeto. Obliga a que el objeto cumpla con ciertas propiedades y tipos. | `interface Usuario { nombre: string; }` |
| **Tipado de Funciones** | Consiste en aclarar explícitamente qué tipos de datos recibe la función y qué tipo de dato va a devolver al terminar. | `function suma(a: number): number` |
| **Tipos Literales** | Se usa cuando queremos limitar una variable a valores exactos y específicos, en lugar de permitir cualquier string o número. | `type Direccion = "arriba" \| "abajo";` |
| **Enum** | Sirve para agrupar constantes relacionadas bajo un mismo nombre. Ayuda a leer mejor el código en lugar de usar números sueltos. | `enum Estado { Pendiente, Listo }` |
| **Type Assertion** | Es una forma de decirle al compilador manualmente "tratá esta variable como este tipo", asumiendo nosotros la responsabilidad. | `(valor as string).length` |