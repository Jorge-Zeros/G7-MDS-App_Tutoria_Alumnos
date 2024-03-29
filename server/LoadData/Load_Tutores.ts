import * as fs from "fs";
import csv = require("csv-parser");
import { Tutor } from "../src/models/Usuario";
import mongoose from "mongoose";

const connectionString =
  "Aqui va el enlace de coneccion con el mongodb Atlas" ||
  "";
console.log(connectionString);
mongoose
  .connect(connectionString, {})
  .then((req) => console.log("Database connected!"))
  .catch((err) => {
    console.log(err);
    console.log("No funciono la coneccion a la db");
  });

/* ID_Docente	Apellido Paterno	Apellido Materno	Nombres
    112314	ENCISO 	RODAS	LAURO
    123455	ACURIO	USCA	NILA ZONIA
    332487	MEDRANO	VALENCIA	IVÁN CÉSAR
    843247	CANDIA	OVIEDO	DENNIS IVAN
    651120	MEDINA	MIRANDA	KARELIA
    462588	IBARRA	ZAMBRANO	WALDO ELIO
    279012	VERA	OLIVERA	HARLEY
    389902	BACA	CARDENAS	LINO AQUILES
    590124	CHULLO	LLAVE	BORIS
    102966	FALCON	HUALLPA	ELIDA
*/

/* Puedes crear un array de arrays con los datos de los codigo de tutores y nombres concatenando los apellido paterno, materno y nombres
 */

const tutores = [
  ["112314", "ENCISO RODAS LAURO"],
  ["123455", "ACURIO USCA NILA ZONIA"],
  ["332487", "MEDRANO VALENCIA IVÁN CÉSAR"],
  ["843247", "CANDIA OVIEDO DENNIS IVAN"],
  ["651120", "MEDINA MIRANDA KARELIA"],
  ["462588", "IBARRA ZAMBRANO WALDO ELIO"],
  ["279012", "VERA OLIVERA HARLEY"],
  ["389902", "BACA CARDENAS LINO AQUILES"],
  ["590124", "CHULLO LLAVE BORIS"],
  ["102966", "FALCON HUALLPA ELIDA"],
];

// Insertar los datos en la base de datos
(async () => {
  for (const tutor of tutores) {
    const user = new Tutor({
      codigo: tutor[0],
      nombre: tutor[1],
      email: `${tutor[0]}@unsaac.edu.pe`,
    });

    try {
      await user.save();
    } catch (error) {
      console.error(`Error al guardar el usuario: ${error}`);
    }
  }
})().catch((err) => console.error(err));
