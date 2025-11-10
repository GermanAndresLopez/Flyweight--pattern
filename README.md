# Patrón Flyweight en TypeScript

Este proyecto es una implementación del **patrón de diseño estructural Flyweight**, desarrollada en **TypeScript**, con el objetivo de mostrar cómo optimizar el uso de memoria cuando se crean muchos objetos similares.

## 🧩 Descripción del proyecto

Implementamos el **patrón Flyweight** para demostrar cómo compartir el estado común entre múltiples instancias, evitando la duplicación de datos innecesarios.  
En este ejemplo, se puede observar cómo los objetos comparten su parte **intrínseca** (la que no cambia) y reciben de forma externa su parte **extrínseca** (la que varía según el contexto).

El propósito es entender cómo este patrón mejora el rendimiento en escenarios donde se crean cientos o miles de objetos con información repetida.

## ⚙️ Tecnologías utilizadas

- **TypeScript**
- **Node.js**

Cómo ejecutar el proyecto

Clona el repositorio:

git clone https://github.com/GermanAndresLopez/Flyweight--pattern


Ingresa al directorio:

cd Flyweight--pattern


Instala las dependencias:

npm install


Ejecuta el ejemplo:

npm run dev


o si usas ts-node:

npx ts-node src/index.ts

💡 Ejemplo de funcionamiento

En este ejemplo, cada vez que el cliente solicita un objeto con un estado intrínseco igual, la FlyweightFactory devuelve una instancia ya existente en lugar de crear una nueva.

Esto reduce el consumo de memoria y mejora el rendimiento cuando se manejan grandes volúmenes de objetos similares.

🔍 Conceptos clave

Estado intrínseco: Información compartida entre todos los objetos (por ejemplo, tipo, color o forma base).

Estado extrínseco: Información que cambia por cada uso (por ejemplo, posición, tamaño o contexto).

El patrón Flyweight permite reutilizar instancias existentes, logrando eficiencia sin perder flexibilidad.

📚 Cuándo usar este patrón

Utilizo el patrón Flyweight cuando:

Necesito crear una gran cantidad de objetos similares.

La mayoría de esos objetos comparten datos comunes.

Quiero reducir el consumo de memoria y optimizar recursos.

📜 Licencia

Este proyecto está bajo la licencia MIT.
Puedes usarlo libremente con fines educativos o de demostración.
