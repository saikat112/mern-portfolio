const { request, response } = require('express');

const router = require('express').Router();
const { Intro, About, Experience, Project, Contact } = require('../models/portfolioModel');
const { models } = require('mongoose');

// get all portfoliodtat
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
// update intro
router.post('/update-intro', async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro Updated Successfully"
        }

        );

    } catch (error) {
        res.status(500).send(error);
    }
});
// update About
router.post('/update-about', async (req, res) => {
    console.log("Update about endpoint hit", req.body);
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated Successfully"
        }

        );

    } catch (error) {
        res.status(500).send(error);
    }
});
router.post('/update-experience', async (req, res) => {
    console.log("Update experience endpoint hit", req.body);
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Updated Successfully"
        }

        );

    } catch (error) {
        res.status(500).send(error);
    }
});
// add experience
router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: " Experience added Successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post("/update-exprience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id }, req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Expirence update successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});
router.post("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully"
        });
    } catch (error) {
        res.status(500).send(error);

    }
});
module.exports = router;
