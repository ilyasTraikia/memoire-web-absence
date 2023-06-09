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






exports.insertAnnonce = async(req, res, next) => {
    const values = Object.values(req.body)
    const compte_id = req.params.id

    conn.query(`INSERT INTO annonce(id_teacher,id_groupe,contenu_annonce)
     VALUES (
        (select id_teacher from teacher WHERE id_compte = ${compte_id}),
        ${req.body.id_groupe},
        "${req.body.contenu_annonce}"
        )`, function(err, result) {
        if (err)
            throw err
        res.status(201).json({
            status: "success",
            message: "annonce inserted",
        })


    })

}




exports.getAllAnnoncesByTeacher = (req, res, next) => {
    const compte_id_2 = req.params.id
    conn.query(`
    SELECT * FROM annonce
    INNER JOIN teacher ON annonce.id_teacher = teacher.id_teacher 
    WHERE annonce.id_teacher =
     (select teacher.id_teacher from teacher
     WHERE teacher.id_compte = ${compte_id_2}
     )   
                  `, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}


exports.getAllAnnoncesByTGroupe = (req, res, next) => {
    const id_student = req.params.id
    conn.query(`
    SELECT annonce.contenu_annonce,
    teacher.firstname,
    teacher.middlename,
    teacher.lastname
    FROM annonce
    INNER JOIN teacher ON annonce.id_teacher = teacher.id_teacher 
    WHERE annonce.id_groupe = (select id_groupe from student where id_student = ${id_student})
    

                  `, function(err, data, fields) {
        res.status(200).json(data)
    })
}