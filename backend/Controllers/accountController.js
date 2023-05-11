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
    conn.query(`SELECT * FROM teacher INNER JOIN compte ON teacher.id_compte=compte.id_compte where id = ${teacherId}`, function(err, data, fields) {
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
    ,teacher.status='${req.body.status}' WHERE id = ${teachid_2}`,

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

    await conn.query(`UPDATE teacher SET status = '${req.body.status}' WHERE id = ${teachid_3}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "teacher status updated",
        });
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