
module.exports={

      port:  process.env.PORT || 8080,
      pool: {
          connectionLimit : 10,
          host     : 'eu-cdbr-west-02.cleardb.net',
          user     : 'b6e2c0bbb4a67a',
          password : '1491f8e9',
          database : 'heroku_01f08327838091c',
          debug    :  false
      },
      secret:'secret'

}







