const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('Update a single task')
}

const deleteTask = (req, res) => {
    res.send('delete a single task')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}