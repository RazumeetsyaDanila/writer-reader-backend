// const db = require('../db');
const sequelize = require('../db');
const { QueryTypes } = require('sequelize');

class WriterController {
    async messageCreate(req, res, next) {
        try {
            const { message, user_id } = req.body
            const message_id = await sequelize.query("INSERT INTO messages (message_text, message_date) " +
                "VALUES ($message, current_date) RETURNING message_id",
                {
                    type: QueryTypes.INSERT,
                    bind: { message: message }
                });

            await sequelize.query("INSERT INTO user_messages (user_id, message_id) " +
                "VALUES ($user_id, $message_id)",
                {
                    type: QueryTypes.INSERT,
                    bind: { user_id: user_id, message_id: message_id[0][0].message_id }
                });

            return res.json({ message: "Сообщение добавлено!" })
        } catch (e) {
            return res.json(e.message);
        }
    }

    // async messageCreate(req, res) {
    //     try {
    //         const { message, user_id } = req.body
    //         const message_id = await db.query("INSERT INTO messages (message_text, message_date) " +
    //             "VALUES ($1, current_date) RETURNING message_id", [message]);

    //         await sequelize.query("INSERT INTO user_messages (user_id, message_id) " +
    //             "VALUES ($1, $2)", [user_id, message_id[0][0].message_id]);

    //         return res.json({ message: "Сообщение добавлено!" })
    //     } catch (e) {
    //         return res.json(e.message);
    //     }
    // }

    async messagesGet(req, res, next) {
        try {
            const { user_id } = req.body
            const messages = await sequelize.query("SELECT * FROM messages m " +
                "JOIN user_messages u_m ON (m.message_id = u_m.message_id) " +
                "WHERE u_m.user_id = $user_id", {
                    type: QueryTypes.SELECT,
                    bind: {user_id: user_id}
                })
            return res.json(messages)
        } catch (e) {
            return res.json(e.message)
        }
    }

    // async messagesGet(req, res) {
    //     try {
    //         const { user_id } = req.body
    //         const messages = await db.query("SELECT * FROM messages m " +
    //             "JOIN user_messages u_m ON (m.message_id = u_m.message_id) " +
    //             "WHERE u_m.user_id = $1", [user_id])
    //         return res.json(messages)
    //     } catch (e) {
    //         return res.json(e.message)
    //     }
    // }

    async messageDelete(req, res, next) {
        try {
            const { message_id } = req.body
            await sequelize.query("DELETE from messages WHERE message_id = $message_id",
                {
                    type: QueryTypes.DELETE,
                    bind: { message_id: message_id }
                }
            )
            return res.json({ message: "Сообщение " + message_id + " удалено!" })
        } catch (e) {
            return res.json(e.message)
        }
    }

    // async messageDelete(req, res) {
    //     try {
    //         const { message_id, user_id } = req.body
    //         await sequelize.query("DELETE from user_message WHERE message_id = $1 and user_id = $2", [message_id, user_id])
    //         await sequelize.query("DELETE from messages WHERE message_id = $1", [message_id])
    //         return res.json({ message: "Сообщение " + message_id + " удалено!" })
    //     } catch (e) {
    //         return res.json(e.message)
    //     }
    // }
}

module.exports = new WriterController()