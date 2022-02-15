module.exports = function (express, pool, jwt, secret) {

    const apiRouter = express.Router();


    apiRouter.use(function (req, res, next) {
        const token = req.body.token || req.params.token || req.headers['x-access-token'] || req.query.token;

        if (token) {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    res.status(403).send({
                        success: false,
                        message: 'wrong token'
                    });
                }
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
        else {
            return res.status(403).send({
                success: false,
                message: 'no token'
            });
        }
    });


    apiRouter.route('/plovilo')
        .get(async function (req, res) {
            await baza(req, res, 'CALL brodSVI()');
        })
        .post(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'INSERT into plovilo SET drzava_reg_id=?, musterija_id=?, naziv=?',
                [x.drzava_reg_id, x.musterija_id, x.naziv]);
        });

    apiRouter.route('/plovilo/:id')
        .get(async function (req, res) {
            await baza(req, res, 'CALL brodID(?)', [req.params.id]);
        })
        .put(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'UPDATE plovilo SET drzava_reg_id=?, musterija_id=?, naziv=? WHERE id=?',
                [x.drzava_reg_id, x.musterija_id, x.naziv, x.id])
        })
        .delete(async function (req, res) {
            await baza(req, res, 'DELETE from PLOVILO where id=?', [req.params.id]);
        });


    apiRouter.route('/drzava')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM drzava');
        })
        .post(async function (req, res) {
            await baza(req, res, 'INSERT into drzava SET drzava=?', [req.body.drzava]);
        });

    apiRouter.route('/drzava/:id')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM drzava WHERE id=?', [req.params.id]);
        })
        .put(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'UPDATE drzava SET drzava=? WHERE id=?', [x.drzava, x.id]);
        })
        .delete(async function (req, res) {
            await baza(req, res, 'DELETE from drzava where id=?', [req.params.id]);
        });


    apiRouter.route('/mjesto')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM mjesto');
        })
        .post(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'INSERT into mjesto SET naziv=?, drzava_id=?', [x.naziv, x.drzava_id]);
        });

    apiRouter.route('/mjesto/:id')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM mjesto WHERE id=?', [req.params.id]);
        })
        .put(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'UPDATE mjesto SET naziv=?, drzava_id=? WHERE id=?', [x.naziv, x.drzava_id, x.id]);
        })
        .delete(async function (req, res) {
            await baza(req, res, 'DELETE from mjesto WHERE id=?', [req.params.id]);
        });


    apiRouter.route('/adresa')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * from adresa');
        })
        .post(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'INSERT into adresa SET mjesto_id=?, adresa=?', [x.mjesto_id, x.adresa]);
        });

    apiRouter.route('/adresa/:id')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM adresa WHERE id=?', [req.params.id]);
        })
        .put(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'UPDATE adresa SET mjesto_id=?, adresa=? WHERE id=?', [x.mjesto_id, x.adresa, x.id]);
        })
        .delete(async function (req, res) {
            await baza(req, res, 'DELETE from adresa WHERE id=?', [req.params.id]);
        });


    apiRouter.route('/vlasnik')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM musterija');
        })
        .post(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'INSERT into musterija SET ime=?, prezime=?, adresa_id=?, oib=?', [x.ime, x.prezime, x.adresa_id, x.oib]);
        });

    apiRouter.route('/vlasnik/:id')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM musterija WHERE id=?', [req.params.id]);
        })
        .put(async function (req, res) {
            let x = req.body;
            await baza(req, res, 'UPDATE musterija SET ime=?, prezime=?, adresa_id=?, oib=? WHERE id=?', [x.ime, x.prezime, x.adresa_id, x.oib, req.params.id]);
        })
        .delete(async function (req, res) {
            await baza(req, res, 'DELETE from musterija WHERE id=?', [req.params.id]);
        });


    apiRouter.route('/ovlast')
        .get(async function (req, res) {
            await baza(req, res, 'SELECT * FROM ovlast');
        });





    async function baza(req, res, q, e = null) {
        try {
            let conn = null;
            await pool
                .then(function (p) {
                    return p.getConnection();
                })
                .then(function (connection) {
                    conn = connection;
                    return conn.query(q, e);
                })
                .then(rows => {
                    conn.release();
                    res.json({resp: rows})
                });
        } catch (e) {
            console.log(e);
        }
    }

    apiRouter.route('/ja').get(function (req, res) {
        res.send({status:200, user: req.decoded});
    });

    return apiRouter;

}


// async function(req,res)
