const { request, response } = require('express');

const router = require('express').Router();
const { Intro, About, Experience, Project, Contact } = require('../models/portfolioModel');
const { models } = require('mongoose');

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const about = await About.find();
        const experiences = await Experience.find();
        const projects = await Project.find();
        const contact = await Contact.find();
        res.status(200).send({
            intro: intros[0],
            about: about[0],
            projects: projects,
            contact: contact[0],
            experience: experiences,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
module.exports = router;
