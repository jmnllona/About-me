import pool from "../db.js";
export const createMedia = async (req, res) => {
    try {
        const { pokemonId, image, shinyImage } = req.body;
        if (!pokemonId || !image || !shinyImage) {
            return res.status(400).json({
                message: "pokemonId, image, and shinyImage are required.",
            });
        }
        const result = await pool.query(`
            INSERT INTO pokemonsprites (pokemon_id, image, shiny_image)
            VALUES ($1, $2, $3)
            RETURNING *
            `, [pokemonId, image, shinyImage]);
        return res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error("Error creating media:", error);
        return res.status(500).json({
            message: "Failed to create media.",
        });
    }
};
export const createMediaBulk = async (req, res) => {
    const client = await pool.connect();
    try {
        const { media } = req.body;
        if (!Array.isArray(media) || media.length === 0) {
            return res.status(400).json({
                message: "media must be a non-empty array.",
            });
        }
        await client.query("BEGIN");
        const values = [];
        const placeholders = [];
        media.forEach((item, index) => {
            const { pokemonId, image, shinyImage } = item;
            if (!pokemonId || !image || !shinyImage) {
                throw new Error(`Invalid media data at index ${index}.`);
            }
            const offset = index * 3;
            placeholders.push(`($${offset + 1}, $${offset + 2}, $${offset + 3})`);
            values.push(pokemonId, image, shinyImage);
        });
        const result = await client.query(`
            INSERT INTO pokemonsprites
                (pokemon_id, image, shiny_image)
            VALUES
                ${placeholders.join(", ")}
            RETURNING *
            `, values);
        await client.query("COMMIT");
        return res.status(201).json({
            message: `${result.rows.length} media records created.`,
            data: result.rows,
        });
    }
    catch (error) {
        await client.query("ROLLBACK");
        console.error("Error creating media:", error);
        return res.status(500).json({
            message: "Failed to create media.",
        });
    }
    finally {
        client.release();
    }
};
//# sourceMappingURL=mediaController.js.map