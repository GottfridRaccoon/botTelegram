const mariadb = require('mariadb');
const config = require('config');
const username = config.get('database.user');
const passwd = config.get('database.password');
const hostname = config.get('database.host');
let database = require('./database.js');
let queryMaria = new database();

let pool = mariadb.createPool({
    host: hostname,
    user: username,
    password: passwd,
    connectionLimit: 5,
    database: 'bot',
    charset: 'utf8mb4'
});

module.exports = function DB() {



    async function setGlobalRank(username, rank, is_admin) {
        let user = await queryMaria.selectTable("users", "user_name", "`user_name`='" + username + "'");

        pool.query({
                rowsAsArray: true,
                sql: "UPDATE users SET rank=" + rank + " WHERE `user_name`='" + user[0][0] + "'"
            })
            .catch(log => console.log(log));
    }

    function setLocalRank(rank) {
        pool.query({ rowsAsArray: true, sql: `INSERT INTO chat(rank) VALUES ('${rank}')` })
            .catch((err) => {



            });
    }
    //let setGlobalRank= setGlobalRan.bind(selectTable)
    return {

        setGlobalRank: setGlobalRank,
        setLocalRank: setLocalRank
    };

};



//pool.query({ rowsAsArray: true, sql: 'select * from test' })
// .then(res => {
//     console.log(res);

//});