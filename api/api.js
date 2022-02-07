


module.exports=function (express,pool) {

  const apiRouter = express.Router();


  apiRouter.route('/plovilo')
    .get(async function(req,res) {
      try {
        console.log("provat cu");
        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM plovilo');
        conn.release();
        res.json({status:'OK', plovilo:rows})
        console.log("uspio uvasti");
      }
      catch (e) {
        console.log(e);
      }
    })

  apiRouter.route('/plovilo/:id')
    .get(async function (req,res) {
      try {
        console.log("provat cu");
        let conn = await pool.getConnection();
        let rows = await conn.query('SELECT * FROM plovilo WHERE id=?',req.params.id);
        conn.release();
        res.json({status:'OK', plovilo:rows[0]})
        console.log("uspio uvasti");
      }
      catch (e) {
        console.log(e);
        res.json({ status: 'NOT OK' });
      }
    })


  return apiRouter;

}
