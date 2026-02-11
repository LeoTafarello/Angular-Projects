import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("images"));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/places", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const fileContent = await fs.readFile("./data/places.json");

  const placesData = JSON.parse(fileContent);

  res.status(200).json({ places: placesData });
});

app.get("/user-places", async (req, res) => {
  const fileContent = await fs.readFile("./data/user-places.json");

  const places = JSON.parse(fileContent);

  res.status(200).json({ places });
});

// app.put("/user-places", async (req, res) => {
//   try {
//     const placeId = req.body.placeId;

//     const fileContent = await fs.readFile("./data/places.json", "utf-8");
//     const placesData = JSON.parse(fileContent);

//     // Usando trim() para evitar espaços em branco e garantindo que é string
//     const place = placesData.find((p) => p.id.toString().trim() === placeId.toString().trim());

//     if (!place) {
//       console.log("5. ERRO: find() não encontrou o objeto.");
//       return res.status(404).json({ message: "Lugar não encontrado." });
//     }

//     const userPlacesFileContent = await fs.readFile("./data/user-places.json", "utf-8");
//     const userPlacesData = JSON.parse(userPlacesFileContent);

//     const currentUsersPlaces = Array.isArray(userPlacesData) ? userPlacesData : [];

//     let updatedUserPlaces = currentUsersPlaces;

//     if (!currentUsersPlaces.some((p) => p.id === place.id)) {
//       updatedUserPlaces = [...currentUsersPlaces, place];
//     }

//     await fs.writeFile("./data/user-places.json", JSON.stringify(updatedUserPlaces));
//     res.status(200).json({ userPlaces: updatedUserPlaces });

//   } catch (error) {
//     console.error("ERRO CRÍTICO NO BACKEND:", error);
//     res.status(500).json({ message: "Erro interno." });
//   }
// });

app.put("/user-places", async (req, res) => {

  const placeId = req.body.placeId;

  //return res.status(500).json(); //teste para erros

  const fileContent = await fs.readFile("./data/places.json");
  const placesData = JSON.parse(fileContent);

  const place = placesData.find((place) => place.id == placeId);

  const userPlacesFileContent = await fs.readFile("./data/user-places.json");
  const userPlacesData = JSON.parse(userPlacesFileContent);

  let updatedUserPlaces = userPlacesData;

  if (!userPlacesData.some((p) => p.id === place.id)) {
    updatedUserPlaces = [...userPlacesData, place];
  }

  await fs.writeFile(
    "./data/user-places.json",
    JSON.stringify(updatedUserPlaces)
  );

  res.status(200).json({ userPlaces: updatedUserPlaces });
});

app.delete("/user-places/:id", async (req, res) => {
  const placeId = req.params.id;

  const userPlacesFileContent = await fs.readFile("./data/user-places.json");
  const userPlacesData = JSON.parse(userPlacesFileContent);

  const placeIndex = userPlacesData.findIndex((place) => place.id === placeId);

  let updatedUserPlaces = userPlacesData;

  if (placeIndex >= 0) {
    updatedUserPlaces.splice(placeIndex, 1);
  }

  await fs.writeFile(
    "./data/user-places.json",
    JSON.stringify(updatedUserPlaces)
  );

  res.status(200).json({ userPlaces: updatedUserPlaces });
});

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(3000);
