const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    user_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'READER'}
}, {timestamps: true})

const Message = sequelize.define('message', {
    message_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message_date: {type: DataTypes.DATE, allowNull: true},
    message_text: {type: DataTypes.STRING}
})

const UserMessage = sequelize.define('user_message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.belongsToMany(Message, {through: UserMessage})
Message.belongsToMany(User, {through: UserMessage})

module.exports = {
    User,
    Message,
    UserMessage
}