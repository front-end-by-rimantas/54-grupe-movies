import { connection } from "../db.js";

export async function getUserData(req, res, next) {
    req.user = {
        isLoggedIn: false,
    };

    if (!req.cookies.loginToken) {
        return next();
    }

    try {
        const sql = `
            SELECT
                users.id, users.email,
                users.created_at as userCreatedAt,
                tokens.created_at as tokenCreatedAt
            FROM users
            INNER JOIN tokens
                ON users.id = tokens.user_id
            WHERE tokens.text = ?;`;
        const [result] = await connection.query(sql, [req.cookies.loginToken]);

        if (result.length === 1) {
            req.user = {
                isLoggedIn: true,
                ...result[0],
            };
        }
    } catch (error) {
        console.log(error);
    }

    return next();
}