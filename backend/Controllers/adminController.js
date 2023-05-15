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





exports.getAllStudents = (req, res, next) => {
    conn.query("SELECT * FROM student INNER JOIN academic ON student.SectionYear = academic.id_academic", function(err, data, fields) {

        res.status(200).json({
            status: "success",
            data: data
        })
    })
}




exports.insertStudent = async(req, res, next) => {
    const object = req.body

    const username = req.body.username
    const password = req.body.password


    conn.query(`INSERT INTO compte(compte_type,username,password) VALUES ('Student','${username}','${password}')`, function(err, result) {
        if (err)
            throw err
        values.push(result.insertId)

    })

    delete object.username
    delete object.password

    const values = Object.values(object)


    setTimeout(() => {
        conn.query("INSERT INTO student(firstname,middlename,lastname,SectionYear,birthday,gender,status ,id_compte) VALUES ?", [
            [values]
        ], function(err, result) {
            if (err)
                throw err
            res.status(201).json({
                status: "success",
                message: "student inserted",
            })

        })
    }, 200)


}



exports.updateStudentStatus = async(req, res, next) => {
    const student_id = req.params.id

    await conn.query(`UPDATE student SET status = '${req.body.status}' WHERE id_student = ${student_id}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "student status updated",
        });
    })



}




exports.UpdateStudent = async(req, res, next) => {
    const student_id_2 = req.params.id

    await conn.query(`UPDATE student INNER JOIN compte ON student.id_compte = compte.id_compte 
     SET student.firstname = '${req.body.firstname}'  ,student.middlename = '${req.body.middlename}',
     student.lastname = '${req.body.lastname}',student.SectionYear='${req.body.SectionYear}',
     compte.username = '${req.body.username}',compte.password = '${req.body.password}',student.birthday= '${req.body.birthday}',
     student.gender='${req.body.gender}',student.status='${req.body.status}' WHERE id_student = ${student_id_2}`,

        function(err, result) {
            if (err) throw err;
            res.status(201).json({
                status: "success",
                message: "student updated",
            });


        })
}






exports.getStudentById = (req, res, next) => {
    const student_id_3 = req.params.id
    conn.query(`SELECT * FROM student 
        INNER JOIN academic ON student.SectionYear = academic.id_academic 
        INNER JOIN compte ON student.id_compte=compte.id_compte
        where id_student = ${student_id_3}`, function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}