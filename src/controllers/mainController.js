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

controller.save = (req, res) => {
    const data = req.body

    req.getConnection((err, conn) => {
        conn.query('insert into peso set ?', [data], (err, row) => {
            console.log(row)
            res.redirect('/')
        })
    })
}

module.exports = controller