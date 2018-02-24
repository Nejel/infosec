import { MySQLMapper } from 'airborne-base';
import Session from '../models/Session';

class JournalMapper extends MySQLMapper {
    constructor(di) {
        super(di);
        this.dbTable = di.get('config').sources.trips;
        this.db = di.get('db').connections.mysql;
        this.Model = Trip;
    }
    
    #Поиск 5ти пользователей, сгенерировавших наибольшее количество запросов
    #Решение1
    first() {
        const SQL = `SELECT * FROM
        (SELECT src_user, COUNT(*) FROM ${this.dbTable}
        GROUP BY src_user
        ORDER BY COUNT(*) DESC
        ) AS Data;`;

        return this.executeSQL(SQL);
    }
    
    #Поиск 5ти пользователей, отправивших наибольшее количество данных
    #Решение2
    second() {
        const SQL = `SELECT src_user, input_byte FROM ${this.dbTable}
        ORDER BY input_byte DESC
        LIMIT 5;`;

        return this.executeSQL(SQL);
    }

    #Поиск регулярных запросов (запросов выполняющихся периодически) по полю src_user
    #Решение3
    third() {
        const SQL = `SELECT *, COUNT(src_user)
        FROM ${this.dbTable}
        GROUP BY src_user HAVING COUNT(src_user) > 1
        ORDER BY COUNT(src_user) DESC;`;

        return this.executeSQL(SQL);
    }
    
    #Поиск регулярных запросов (запросов выполняющихся периодически) по полю src_ip
    #Решение4
    fourth() {
        const SQL = `SELECT *, COUNT(src_ip)
        FROM ${this.dbTable}
        GROUP BY src_ip HAVING COUNT(src_ip) > 1
        ORDER BY COUNT(src_ip) DESC;`;

        return this.executeSQL(SQL);
    }

    executeSQL(SQL) {
        return new Promise((resolve, reject) => {
            this.exec(SQL, (error, rows, f) => {
                if (err) {
                    reject(error, f);
                }
                if (rows === undefined) {
                    return [];
                }
                return resolve(this.buildCollection(rows));
            });
        });
    }
}

export default JournalMapper;
