const config = {
    apiVersion: '1.0',
    protocol: 'https',
    apiHost: 'example.com',
    host: '127.0.0.1',
    port: 3010,
    debug: true,
    db: {
      mysql: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'yandex_users',
        driver: 'mysql',
        charset: 'utf8mb4',
        dateStrings: true
      }
    }
  };
  
  module.exports = Object.assign({}, config);
  