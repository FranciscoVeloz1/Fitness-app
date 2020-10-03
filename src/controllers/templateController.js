const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('select * from table', (err, row) => {
            if (err) {
                res.json(err)
            }

            res.render('route/view', {
                data: row
            })
        })
    })
}

controller.save = (req, res) => {

    const data = req.body

    req.getConnection((err, conn) => {
        conn.query('insert into table set ?', [data], (err, row) => {
            console.log(row)
            res.redirect('/')
        })
    })
}

controller.edit = (req, res) => {

    const { id } = req.params

    req.getConnection((err, conn) => {
        conn.query('select * from table where id = ?', [id], (err, row) => {
            res.render('route/view', {
                data: row[0]
            })
        })
    })
}

controller.update = (req, res) => {

    const { id } = req.params

    const newRow = req.body

    req.getConnection((err, conn) => {
        conn.query('update table set ? where id = ?', [newRow, id], (err, row) => {
            res.redirect('/')
        })
    })
}

controller.delete = (req, res) => {

    const { id } = req.params

    req.getConnection((err, conn) => {
        conn.query('delete from table where id = ?', [id], (err, row) => {
            res.redirect('/')
        })
    })
}
        
module.exports = controller