class mainController {

    List(req, res) {
        req.getConnection((err, conn) => {
            conn.query('select * from peso', (err, row) => {
                if (err) {
                    res.json(err)
                }

                res.render('index', {
                    data: row
                })
            })
        })
    }

    Save(req, res) {
        const data = req.body

        req.getConnection((err, conn) => {
            conn.query('insert into peso set ?', [data], (err, row) => {
                console.log(row)
                res.redirect('/')
            })
        })
    }

    Edit(req, res) {
        const { id } = req.params

        req.getConnection((err, conn) => {
            conn.query('select * from peso where id = ?', [id], (err, row) => {
                res.render('update', {
                    data: row[0]
                })
            })
        })
    }

    Update(req, res) {

        const { id } = req.params

        const newRow = req.body

        req.getConnection((err, conn) => {
            conn.query('update peso set ? where id = ?', [newRow, id], (err, row) => {
                res.redirect('/')
            })
        })
    }

    Delete(req, res) {

        const { id } = req.params

        req.getConnection((err, conn) => {
            conn.query('delete from peso where id = ?', [id], (err, row) => {
                res.redirect('/')
            })
        })
    }
}

const controller = new mainController()

module.exports = controller