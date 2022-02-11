module.exports=function (express,pool) {

  const apiRouter = express.Router();


  apiRouter.route('/plovilo')
    .get(async function(req,res) {
        await baza(req, res, 'CALL brodSVI()');
    })

  apiRouter.route('/plovilo/:id')
    .get(async function (req,res) {
      await baza(req,res,`CALL brodID(${req.params.id})`);
    })







  async function baza (req,res,q) {
    try {
      let conn=null;
      await pool
        .then(function (p) {
          return p.getConnection();
        })
        .then(function (connection) {
          conn = connection;
          return conn.query(q);
        })
        .then(rows => {
          conn.release;
          console.log(rows);
          res.json({resp:rows})
        });
    }
    catch (e) {
      console.log(e);
    }
  }

  return apiRouter;

}
