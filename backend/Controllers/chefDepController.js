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
                INNER JOIN teacher ON seance.id_teacher = teacher.id_teacher      `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}





exports.getAllSeancesTwo = (req, res, next) => {
    const compte_id = req.params.id
    conn.query(`SELECT seance.id_seance,seance.day,seance.id_groupe,student.id_student FROM seance
                INNER JOIN subject ON seance.id_module = subject.id_module  
                INNER JOIN teacher ON seance.id_teacher = teacher.id_teacher
                INNER JOIN groupe ON seance.id_groupe = groupe.id_groupe
                LEFT JOIN student ON groupe.id_groupe = student.id_groupe   
                WHERE seance.id_teacher = (SELECT id_teacher FROM teacher WHERE id_compte = ${compte_id}   `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}











exports.getAllSeancesByTeacher = (req, res, next) => {
    const compte_id = req.params.id
    conn.query(`SELECT seance.id_seance,seance.day,seance.id_groupe FROM seance
                INNER JOIN subject ON seance.id_module = subject.id_module  
                INNER JOIN teacher ON seance.id_teacher = teacher.id_teacher
                WHERE seance.id_teacher = (SELECT id_teacher FROM teacher WHERE id_compte = ${compte_id} )
                     `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}





exports.getAllJustifications = (req, res, next) => {

    conn.query(`  SELECT
                teacher.firstname as teacher_firstname,
                teacher.middlename as teacher_middlename,
                teacher.lastname as teacher_lastname,

                student.firstname as student_firstname,
                student.middlename as student_middlename,
                student.lastname as student_lastname,

                subject.name as subject_name,

                justification.contenu_just,

                justification.etat,

                justification.date_just,

                justification.id_justification,

                presence.id_presence


                FROM justification 
                INNER JOIN presence ON presence.id_presence  = justification.id_presence 
                INNER JOIN student ON student.id_student = presence.id_student
                INNER JOIN seance ON seance.id_seance = presence.id_seance
                INNER JOIN teacher ON seance.id_teacher  = teacher.id_teacher  
                INNER JOIN subject ON subject.id_module = seance.id_module 
                   `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}











exports.UpdateJustificationStatus = (req, res, next) => {

    const justification_id = req.params.id

    conn.query(`UPDATE justification SET etat = '${req.body.etat}' WHERE id_justification = ${justification_id}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "justification status updated",
        });
    })


}






exports.UpdatePresenceStatus = (req, res, next) => {

    const presence_id = req.params.id

    conn.query(`UPDATE presence SET presence = '${req.body.presence}' WHERE id_presence = ${presence_id}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "presence status updated",
        });
    })


}