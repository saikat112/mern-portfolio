const mongoose = require("mongoose");
const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        require: true
    },
    fastName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    caption: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
});
const aboutSchma = new mongoose.Schema({
    lottieURl: {
        type: String,
        require: true
    },
    descriptionOne: {
        type: String,
        require: true
    },
    descriptionTwo: {
        type: String,
        require: true
    },
    skills: {
        type: Array,
        require: true

    }
});
const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    period: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true

    }
});
const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    },
    technologys: {
        type: Array,
        require: true
    }

});
const contactSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});
module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("about", aboutSchma),
    Experience: mongoose.model("experience", experienceSchema),
    Project: mongoose.model("projects", projectsSchema),
    Contact: mongoose.model("contact", contactSchema),
};
