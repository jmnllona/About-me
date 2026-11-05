import type { Request, Response } from "express";
import db from "../db.js"
import pool from "../db.js";


export const getPokemonData = async (_req: Request, res: Response) => {
  try {
    const result = await db.query(`
      SELECT
        p.id,
        p.name,
        p.types
         p.species
        p.height
        p.weight
        p.image
        p.description
        p.evolves_to
        p.evolves_from
      FROM pokemon_data AS p
      ORDER BY m.id ASC
    `);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Data",
      });
    }

    return res.json({
      success: true,
      message: "Pokemon Data fetched!",
      data: result.rows,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "There is an error somewhere... Internal Server Error",
    });
  }
};


export const createMediaBulk = async (req: Request, res: Response) => {
    const client = await pool.connect();

    try {
        const { media } = req.body;

        if (!Array.isArray(media) || media.length === 0) {
            return res.status(400).json({
                message: "media must be a non-empty array.",
            });
        }

        await client.query("BEGIN");

        const values: unknown[] = [];
        const placeholders: string[] = [];

        media.forEach((item, index) => {
            const { pokemonId, name , image } = item;

            if (!pokemonId || !image || !name) {
                throw new Error(
                    `Invalid media data at index ${index}.`
                );
            }

            const offset = index * 3;

            placeholders.push(
                `($${offset + 1}, $${offset + 2}, $${offset + 3})`
            );

            values.push(
                pokemonId,
                name,
                image
                
            );
        });

        const result = await client.query(
            `
            INSERT INTO pokemonsprites
                (pokemon_id,  image)
            VALUES
                ${placeholders.join(", ")}
            RETURNING *
            `,
            values
        );

        await client.query("COMMIT");

        return res.status(201).json({
            message: `${result.rows.length} media records created.`,
            data: result.rows,
        });
    } catch (error) {
        await client.query("ROLLBACK");

        console.error("Error creating media:", error);

        return res.status(500).json({
            message: "Failed to create media.",
        });
    } finally {
        client.release();
    }
};