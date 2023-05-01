const conn = require('../Services/db')





exports.getAllStrands = (req, res, next) => {
    conn.query("SELECT * FROM academic", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}





exports.insertStrand = async(req, res, next) => {
    const values = Object.values(req.body)

    conn.query("INSERT INTO academic(year,strand,section) VALUES ?", [
        [values]
    ], function(err, result) {
        if (err)
            throw err
        res.status(201).json({
            status: "success",
            message: "academic inserted",
        })


    })

}






exports.getAllSubjects = (req, res, next) => {
    conn.query("SELECT * FROM subject", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}





exports.insertSubject = async(req, res, next) => {
    const values = Object.values(req.body)

    conn.query("INSERT INTO subject(name,semester) VALUES ?", [
        [values]
    ], function(err, result) {
        if (err)
            throw err
        res.status(201).json({
            status: "success",
            message: "subject inserted",
        })


    })

}