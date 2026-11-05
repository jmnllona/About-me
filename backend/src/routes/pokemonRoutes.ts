import { Router } from "express";

import { getPokemonData , createMediaBulk } from "../controllers/pokemonController.js"

const router = Router();


router.get("/pokemon/", getPokemonData)

router.post("/pokemon/add_sprite", createMediaBulk)



export default router;
