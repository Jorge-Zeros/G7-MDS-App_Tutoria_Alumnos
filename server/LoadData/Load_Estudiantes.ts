import * as fs from "fs";
import csv = require("csv-parser");
import { Estudiante } from "../src/models/Usuario";
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

const results: any[] = [];

fs.createReadStream("C:/Users/joen_/Downloads/lista.csv", {
  encoding: "latin1",
})
  .pipe(csv({ separator: ";", headers: ["codigo", "nombre"] }))
  .on("data", (data) => results.push(data))
  .on("end", async () => {
    // results contiene los datos del archivo CSV

    // Insertar los datos en la base de datos
    for (const result of results) {
      const user = new Estudiante({
        codigo: result.codigo,
        nombre: result.nombre,
        email: `${result.codigo}@unsaac.edu.pe`,
      });

      try {
        await user.save();
      } catch (error) {
        console.error(`Error al guardar el usuario: ${error}`);
      }
    }
  });
