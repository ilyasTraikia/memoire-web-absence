const conn = require('../Services/db')





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
    conn.query(`SELECT * FROM teacher where id = ${teacherId}`, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}





exports.insertTeacher = async(req, res, next) => {
    const values = Object.values(req.body)

    conn.query("INSERT INTO compte(compte_type) VALUES ('Teacher')", function(err, result) {
        if (err)
            throw err

        values.push(result.insertId)
    })


    setTimeout(() => {
        conn.query("INSERT INTO teacher(firstname,middlename,lastname,email,username,password,birthday,gender,status,id_compte) VALUES ?", [
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

    await conn.query(`UPDATE teacher SET firstname = '${req.body.firstname}' 
    ,middlename = '${req.body.middlename}',lastname = '${req.body.lastname}',
    email = '${req.body.email}',username = '${req.body.username}',
    password = '${req.body.password}',birthday= '${req.body.birthday}',gender='${req.body.gender}'
    ,status='${req.body.status}' WHERE id = ${teachid_2}`,

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
    const compteType = req.body.compteType

    if (compteType == 'Teacher') {
        conn.query(`SELECT * FROM teacher where username = '${username}' and password = '${password}'`, function(err, data, fields) {
            if (err) throw err;
            res.status(200).json({
                status: "success",
                data: data
            })
        })
    }


    if (compteType == 'Admin') {
        conn.query(`SELECT * FROM admin where username = ${username} and password = ${password}`, function(err, data, fields) {
            if (err) throw err;
            res.status(200).json({
                status: "success",
                data: data
            })
        })
    }

    if (compteType == 'Student') {
        conn.query(`SELECT * FROM student where username = ${username} and password = ${password}`, function(err, data, fields) {
            if (err) throw err;
            res.status(200).json({
                status: "success",
                data: data
            })
        })
    }


}