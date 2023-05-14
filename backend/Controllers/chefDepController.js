const conn = require('../Services/db')



exports.getAllGroups = (req, res, next) => {
    conn.query("SELECT * FROM groupe", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}

exports.getAllSalles = (req, res, next) => {
    conn.query("SELECT * FROM salle", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}


exports.insertSeance = async(req, res, next) => {
    const values = Object.values(req.body)

    conn.query("INSERT INTO seance(id_teacher,id_module,id_groupe,start_time,end_time,day,id_salle) VALUES ?", [
        [values]
    ], function(err, result) {
        if (err)
            throw err
        res.status(201).json({
            status: "success",
            message: "seance inserted",
        })


    })

}

exports.getAllSeances = (req, res, next) => {
    conn.query(`SELECT * FROM seance
                INNER JOIN subject ON seance.id_module = subject.id_module  
                INNER JOIN teacher ON seance.id_teacher = teacher.id      `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}