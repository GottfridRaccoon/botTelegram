import mariadb from 'mariadb';
import config from 'config';
const username = config.get('database.user');
const passwd = config.get('database.password');
const hostname = config.get('database.host');

let pool = mariadb.createPool({
    host: hostname,
    user: username,
    password: passwd,
    connectionLimit: 5,
    database: 'bot',
    charset: 'utf8mb4'
});
export default function database() {
    pool.getConnection()
        .then(conn => {
            console.log("Подключилось, идендификатор подключения : " + conn.threadId);
            conn.release();
        })
        .catch(err => {
            console.log("Не подключилось, ошибка: " + err);
        });


    function insertQuery(usr_id, first_name, last_name, username) {
        pool.query({
            rowsAsArray: true,
            sql: `INSERT INTO users (ID, user_name,first_name, last_name) VALUES ('${usr_id}','${username}','${first_name}','${last_name}')  
     ON DUPLICATE KEY UPDATE user_name ='${username}', first_name ='${first_name}', last_name ='${last_name}'`
        });

    }


    async function selectTable(table, columns, value) {
        let val = [];
        await pool.query({
            rowsAsArray: true,
            sql: "SELECT " + columns + " FROM `" + table + "` WHERE " + value

        }).then((query) => {
            val = query;
            console.log("!!!!!!!SELECT " + columns + " FROM `" + table + "` WHERE " + value);
        }).catch(err => console.log(err));
        return val;
    }

    return {
        selectTable: selectTable,
        insertQuery: insertQuery
    };

}