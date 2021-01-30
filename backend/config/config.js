module.exports = {
  production: {
    username: 'yodalis',
    password: 'Siaht3008',
    database: 'bdPopmovie',
    host: 'srvpopmovie.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
