const Idea = require('../model/idea')

const idea_index = (req, res) => {
    Idea.find().sort({ createdAt: -1 })
        .then((ideas) => {
            res.render('index', { title: 'All ideas', ideas })
        })
        .catch((err) => console.log(err))
}

const idea_details = (req, res) => {
    const id = req.params.id;

    Idea.findById(id)
        .then(result => {
            res.render('details', { idea: result, title: 'idea details' })
        })
        .catch((err) => console.log(err))
        
}

const idea_create_get = (req, res) => {
    res.render('create', { title: 'create a new idea' })
}

const idea_create_post = (req, res) => {
    const idea = new Idea(req.body)

    idea.save()
        .then((result) => {
            res.redirect('/ideas')
        })
        .catch((err) => { console.log(err) })
}

const idea_delete = (req, res) => {
    const id = req.params.id

    Idea.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/ideas' })
        })
        .catch((err) => console.log(err))
}

module.exports = {
    idea_index,
    idea_details,
    idea_create_get,
    idea_create_post,
    idea_delete
}