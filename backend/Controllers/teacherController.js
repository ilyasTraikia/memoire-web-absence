const conn = require('../Services/db')



exports.getAllPresences = (req, res, next) => {
    conn.query(`SELECT * FROM presence
    LEFT JOIN student ON presence.id_student = student.id_student    
    LEFT JOIN seance ON presence.id_seance = seance.id_seance 
    LEFT JOIN subject ON seance.id_module = subject.id_module 
                  `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}