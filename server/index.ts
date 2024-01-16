import express from "express";
import cors from "cors";
import "./loadEnvironment.js";
// index.ts o app.ts
import "./db/connection";
// cargar rutas
import userRoutes from "./routes/users";
// Cargar usuarios

const PORT = process.env.PORT || 3600;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
const app = express();

const corsOptions: cors.CorsOptions = {
  origin: CORS_ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Load the routes
app.use("/users", userRoutes);

// Middleware para manejar errores 404 (Recurso no encontrado)
app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

// Middleware para manejar errores
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
