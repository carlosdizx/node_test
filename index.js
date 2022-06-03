import { Persona } from "./src/Persona.js";
import { Color } from "./src/Color.js";

const personas = [];
const colroes = [];

for (let i = 0; i < 2; i++) {
  const genero = Math.floor(Math.random() * 2);
  const p = new Persona(i + 1, "---", "---", 1082, 316, genero);
  personas.push(p);
}

colroes.push(new Color(255, 255, 255));
colroes.push(new Color(100, 255, 255));

console.log(personas);
console.log("-------");
console.log(colroes);
