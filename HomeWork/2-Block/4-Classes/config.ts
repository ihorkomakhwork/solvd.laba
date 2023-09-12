export default  {
    application: {
      root:  './app',
    },
    
    static: {
      port: 8000
    },
    
    api: {
      port: 8001,
      transport: 'http',
      host: '127.0.0.1',
    },
    
    db: {
      host: '127.0.0.1',
      port: 5432,
      database: 'bookstore',
      user: 'postgres',
      password: 'postgres',
    },
};