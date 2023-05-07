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
    conn.query("SELECT * FROM student INNER JOIN academic ON student.SectionYearId = academic.id", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })
}




exports.insertStudent = async(req, res, next) => {
    const values = Object.values(req.body)
 

    conn.query("INSERT INTO compte(compte_type) VALUES ('Student')", function(err, result) {
        if (err)
            throw err
        values.push(result.insertId)
       
    })


    setTimeout(() => {
    conn.query("INSERT INTO student(firstname,middlename,lastname,SectionYearId,username,password,birthday,gender,status ,id_compte) VALUES ?", [
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

    await conn.query(`UPDATE student SET status = '${req.body.status}' WHERE id = ${student_id}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "student status updated",
        });
    })



}