const db = require('../db');
const sequelize = require('../db');
const { QueryTypes } = require('sequelize');

class ReaderController {
    async getAllMessages(req, res, next) {
        try {
            const messages = await sequelize.query("SELECT message_text, message_date, login, m.message_id FROM messages m " +
                "JOIN user_messages u_m ON (m.message_id = u_m.message_id) " +
                "JOIN users u ON (u_m.user_id = u .user_id)",
                {
                    type: QueryTypes.SELECT
                })
            return res.json(messages)
        } catch (e) {
            return res.json(e.message);
        }
    }

    // async getAllMessages(req, res) {
    //     try {
    //         const messages = await db.query("SELECT message_text, message_date, login, m.message_id FROM messages m " +
    //             "JOIN user_message u_m ON (m.message_id = u_m.message_id) " +
    //             "JOIN users u ON (u_m.user_id = u .user_id)")
    //         return res.json(messages)
    //     } catch (e) {
    //         return res.json(e.message);
    //     }
    // }
}

module.exports = new ReaderController()