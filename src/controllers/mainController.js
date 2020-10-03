const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from peso', (err, row) => {
            if(err) {
                res.json(err)
            }

            res.render('index', {
                data: row
            })
        })
    })
}


module.exports = controller