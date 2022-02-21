const {Sequelize} = require('sequelize')
const Pool = require('pg').Pool
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)

// module.exports = new Sequelize('postgres://zohumzphqarxqg:d38d0a4081357a210d07a9ea8064d8027149220ac8d4a97620b339a3a3c88a07@ec2-34-255-134-200.eu-west-1.compute.amazonaws.com:5432/d2ubuus78geot2')

// module.exports = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });

// const pool = new Pool({
// // connectionString: "postgres://zohumzphqarxqg:d38d0a4081357a210d07a9ea8064d8027149220ac8d4a97620b339a3a3c88a07@ec2-34-255-134-200.eu-west-1.compute.amazonaws.com:5432/d2ubuus78geot2",
// connectionString: "jdbc:postgresql://localhost:5432/postgres",
//     ssl: {
//     rejectUnauthorized: false
// }
// })

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'writer-reader-db-ws',
//     password: 'mypostgresbd',
//     port: 5432,
//   })

// module.exports = pool

