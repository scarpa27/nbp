module.exports = function (express, pool, jwt, secret, crypto) {
    let authRouter = express.Router();

    authRouter.route('/')
        .post(async function (req, res) {
            try {
                let conn = null;
                await pool
                    .then(function (p) {
                        return p.getConnection();
                    })
                    .then(function (connection) {
                        conn = connection;
                        return conn.query("SELECT * FROM operater WHERE id=?", [req.body.id]);
                    })
                    .then(rows => {
                        conn.release();

                        if (crypto.pbkdf2Sync(req.body.pass, rows[0].salt, 10000, 64, 'sha512')
                            .toString('hex') === rows[0].sifra) {
                            const token = jwt.sign({
                                    oib: rows[0].oib,
                                    level: rows[0].ovlast_id
                                },
                                secret, {
                                    expiresIn: 30000
                                });
                            res.json({resp: {rows: rows, token: token}});
                        }
                    });
            }
            catch (e) {
                console.log("error in auth");
                console.log(e);
            }
        });






return authRouter;



}
