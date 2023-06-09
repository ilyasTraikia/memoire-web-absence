const conn = require('../Services/db')
const jwt = require('jsonwebtoken');





exports.getAllTeachers = (req, res, next) => {
    conn.query("SELECT * FROM teacher", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}





exports.getTeacherById = (req, res, next) => {
    const teacherId = req.params.id
    conn.query(`SELECT * FROM teacher INNER JOIN compte ON teacher.id_compte=compte.id_compte where id_teacher = ${teacherId}`, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}



exports.getTeacherPById = (req, res, next) => {
    const teacherPId = req.params.id
    conn.query(`SELECT * FROM teacher INNER JOIN compte ON teacher.id_compte=compte.id_compte where compte.id_compte = ${teacherPId}`, function(err, data, fields) {

        res.status(200).json({
            status: "success",
            data: data
        })
    })
}









exports.insertTeacher = async(req, res, next) => {
    const object = req.body

    const username = req.body.username
    const password = req.body.password

    conn.query(`INSERT INTO compte(compte_type,username,password) VALUES ('Teacher','${username}','${password}')`, function(err, result) {
        if (err)
            throw err

        values.push(result.insertId)

    })

    delete object.username
    delete object.password

    const values = Object.values(object)

    setTimeout(() => {
        conn.query("INSERT INTO teacher(firstname,middlename,lastname,email,birthday,gender,status,id_compte) VALUES ?", [
            [values]
        ], function(err, result) {
            if (err) throw err;
            res.status(201).json({
                status: "success",
                message: "teacher inserted",
            })
        })
    }, 200)

}








exports.UpdateTeacher = async(req, res, next) => {
    const teachid_2 = req.params.id



    await conn.query(`UPDATE teacher INNER JOIN compte ON teacher.id_compte = compte.id_compte 
    SET teacher.firstname = '${req.body.firstname}' ,teacher.middlename = '${req.body.middlename}',
    teacher.lastname = '${req.body.lastname}', teacher.email = '${req.body.email}',compte.username = '${req.body.username}',
    compte.password = '${req.body.password}',teacher.birthday= '${req.body.birthday}',teacher.gender='${req.body.gender}'
    ,teacher.status='${req.body.status}' WHERE id_teacher = ${teachid_2}`,

        function(err, result) {
            if (err) throw err;
            res.status(201).json({
                status: "success",
                message: "teacher updated",
            });


        })
}








exports.updateTeacherStatus = async(req, res, next) => {
    const teachid_3 = req.params.id

    await conn.query(`UPDATE teacher SET status = '${req.body.status}' WHERE id_teacher = ${teachid_3}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "teacher status updated",
        });
    })



}











exports.getChefDepByPId = (req, res, next) => {
    const chefdepId = req.params.id
    conn.query(`SELECT * FROM chefdepartement INNER JOIN compte ON chefdepartement.id_compte=compte.id_compte where compte.id_compte = ${chefdepId}`, function(err, data, fields) {

        res.status(200).json({
            status: "success",
            data: data
        })
    })
}








exports.UpdateChefDep = async(req, res, next) => {
    const chefdep2_id = req.params.id



    await conn.query(`UPDATE chefdepartement INNER JOIN compte ON chefdepartement.id_compte = compte.id_compte 
    SET chefdepartement.firstname_chefdep = '${req.body.firstname}' ,chefdepartement.middlename_chefdep = '${req.body.middlename}',
    chefdepartement.lastname_chefdep = '${req.body.lastname}', chefdepartement.	email_chefdep = '${req.body.email}',compte.username = '${req.body.username}',
    compte.password = '${req.body.password}',chefdepartement.date_naiss_chefdep= '${req.body.birthday}',chefdepartement.gender_chefdep='${req.body.gender}'
     WHERE 	id_chefDepartement  = ${chefdep2_id}`,

        function(err, result) {
            if (err) throw err;
            res.status(201).json({
                status: "success",
                message: "chefdepartement updated",
            });


        })
}









exports.getAdminByPId = (req, res, next) => {
    const adminId = req.params.id
    conn.query(`SELECT * FROM admin INNER JOIN compte ON admin.id_compte=compte.id_compte where compte.id_compte = ${adminId}`, function(err, data, fields) {

        res.status(200).json({
            status: "success",
            data: data
        })
    })
}






exports.UpdateAdminDep = async(req, res, next) => {
    const admin2_id = req.params.id



    await conn.query(`UPDATE admin INNER JOIN compte ON admin.id_compte = compte.id_compte 
    SET admin.firstname_admin = '${req.body.firstname}' ,admin.middlename_admin = '${req.body.middlename}',
    admin.lastname_admin = '${req.body.lastname}', admin.email_admin = '${req.body.email}',compte.username = '${req.body.username}',
    compte.password = '${req.body.password}',admin.birthday_admin= '${req.body.birthday}',admin.gender='${req.body.gender}'
     WHERE 	id_admin  = ${admin2_id}`,

        function(err, result) {
            if (err) throw err;
            res.status(201).json({
                status: "success",
                message: "admin updated",
            });


        })
}






exports.getStudentAbsenceById = (req, res, next) => {
    const student_id_3 = req.params.id
    conn.query(`SELECT
               presence.id_presence,
               presence.presence,
               seance.day,
               seance.start_time,
               seance.end_time,
               teacher.firstname,
               teacher.middlename,
               teacher.lastname,
               subject.name,
               salle.type_salle,
               justification.etat
         
         FROM presence 
        INNER JOIN seance ON presence.id_seance = seance.id_seance 
        INNER JOIN salle ON salle.id_salle= seance.id_salle
        INNER JOIN teacher ON seance.id_teacher  = teacher.id_teacher  
        INNER JOIN subject ON subject.id_module = seance.id_module 
        LEFT JOIN justification ON justification.id_presence = presence.id_presence

        WHERE presence.id_student = ${student_id_3} AND presence.presence = 'absent' `, function(err, data, fields) {

        res.status(200).json(
            data
        )
    })
}
















exports.login = async(req, res, next) => {

    const username = req.body.username
    const password = req.body.password
        // const compteType = req.body.compteType

    conn.query(`SELECT * FROM compte where username = '${username}' and password = '${password}'`, function(err, data, fields) {
        if (err) throw err;

        if (data.length != 0) {
            const accestoken = jwt.sign({ userId: data[0].id_compte }, process.env.ACCESS_TOKEN_SECRET)
            res.status(200).json({
                status: "suecess",
                data: data,
                token: accestoken
            })
        } else {

            res.status(401).json({
                status: "cant find user",
                data: data
            })
        }
    })



}





exports.loginAndroid = async(req, res, next) => {

    const username = req.body.username
    const password = req.body.password
        // const compteType = req.body.compteType

    conn.query(`SELECT * FROM compte   INNER JOIN student ON compte.id_compte = student.id_compte
    where username = '${username}' and password = '${password}' 
    `, function(err, data, fields) {
        if (err) throw err;

        if (data.length != 0) {

            res.status(200).json({
                id_student: data[0].id_student,
                username: data[0].username,
                password: data[0].password,
                firstname: data[0].firstname,
                middlename: data[0].middlename,
                lastname: data[0].lastname,
                birthday: data[0].birthday,
                gender: data[0].gender,
                status: data[0].status,
                id_groupe: data[0].id_groupe

            })
        } else {

            res.status(401).json({
                status: "cant find user",
                data: data
            })
        }
    })



}









exports.insertPresenceAndroid = async(req, res, next) => {
    const values = Object.values(req.body)

    conn.query("INSERT INTO presence(id_seance,id_student,presence,retard) VALUES ?", [
        [values]
    ], function(err, result) {
        if (err)
            throw err
        res.status(201).json({
            status: "success",
            message: "presence inserted",
        })


    })

}








exports.insertJustificationAndroid = async(req, res, next) => {
    const values = Object.values(req.body)

    conn.query("INSERT INTO justification(contenu_just,id_presence) VALUES ?", [
        [values]
    ], function(err, result) {
        if (err)
            throw err
        res.status(201).json({
            status: "success",
            message: "justification inserted",
        })


    })

}