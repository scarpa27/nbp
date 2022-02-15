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

                        if (rows.length === 0) {
                            res.json({resp: {mess: 2}})
                        }

                        if (crypto.pbkdf2Sync(req.body.pass, rows[0].salt, 10000, 64, 'sha512')
                            .toString('hex') === rows[0].sifra) {
                            const token = jwt.sign({
                                    oib: rows[0].oib,
                                    level: rows[0].ovlast_id
                                },
                                secret, {
                                    expiresIn: 30000
                                });
                            res.json({resp: {rows: rows, token: token, mess: 1}});
                        } else {
                            res.json({resp: {mess: 3}})
                        }
                    });
            } catch (e) {
                console.log("error in auth");
                console.log(e);
            }
        });


    authRouter.route('/reg')
        .post(
            async function (req, res) {
                try {
                    let x = req.body;
                    let conn = null;

                    let salt = crypto.randomBytes(128).toString('base64');
                    let hash = crypto.pbkdf2Sync( x.sifra, salt, 10000, 64, 'sha512').toString('hex');

                    await pool
                        .then(function (p) {
                            return p.getConnection();
                        })
                        .then(function (connection) {
                            conn = connection;
                            return conn.query("INSERT INTO operater SET ime=?, prezime=?, oib=?, ovlast_id=?, sifra=?, salt=?",[x.ime, x.prezime, x.oib, x.ovlast_id, hash, salt]);
                        })
                        .then(rows => {
                            conn.release();
                            console.log(rows);
                        })

                }
                catch (e) {
                    console.log(e);
                }
            }
        )


    return authRouter;


}
