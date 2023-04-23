const conn = require('../Services/db')


exports.getAllTeachers = (req, res, next) => {



    conn.query("SELECT * FROM compte where compte_type = Teacher", function(err, data, fields) {
        res.status(200).json({
            status: "success",
            data: data
        })
    })


}










exports.insertTeacher = async(req, res, next) => {
    const values = Object.values(req.body)

    await conn.query("INSERT INTO compte(compte_type,username,password,lastname,firstname,middlename,birthday,adresse,email,gender) VALUES ?", [
        [values]
    ], function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "teacher inserted",
        });


    })
}













exports.UpdateTeacher = async(req, res, next) => {
    const taskid = req.params.id

    await conn.query(`UPDATE tasks SET title = '${req.body.title}' ,heading = '${req.body.heading}',content = '${req.body.content}',tagColor = '${req.body.tagColor}',created_at = '${req.body.created_at}',category = '${req.body.category}' WHERE id = ${taskid}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "task updated",
        });


    })
}













exports.updateTeacherStatus = async(req, res, next) => {
    let taskid = req.params.id

    await conn.query(`UPDATE tasks SET category = ${req.body.category} WHERE id = ${taskid}`, function(err, result) {
        if (err) throw err;
        res.status(201).json({
            status: "success",
            message: "task category updated",
        });
    })



}