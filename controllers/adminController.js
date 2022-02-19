const { User } = require('../models/models')

class AdminController {
    async users(req, res) {
        let users = await User.findAll({ attributes: ['login', 'role'] })
        return res.json(users)
    }

    async user_delete(req, res) {
        try {
            const { login } = req.body
            if (login !== "admin" && login !== "reader" && login !== "writer") {
                await User.destroy({
                    where: {
                        login: login
                    }
                });
                return res.json({ message: "Пользователь удален!" })
            }
            else return res.json({ message: "Этого пользователя удалять нельзя!" })
        } catch (e) {
            return res.json(e.message);
        }
    }
}

module.exports = new AdminController()