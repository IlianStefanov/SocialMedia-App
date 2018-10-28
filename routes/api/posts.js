const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Model
const Post = require("../../models/Post");

// Validation posts
const validatePostsInput = require("../../validation/post");

// @route           GET api/posts/test
// @description     Tests post route
// @access          Public
router.get("/test", (req, res) => res.json({ msg: "Posts Wroks" }));

// @route           POST api/posts/
// @description     Create post
// @access          Private
router.post('/', passport.authenticate("jwt", { session: false }), (req, res) => {

       const { errors, isValid } = validatePostsInput(req.body);

        if(!isValid) {
            return res.status(400).json(errors);
        }

        const newPost = new Post({
            text: req.body.text,
            name: req.body.name,
            avatar: req.body.avatar,
            user: req.user.id 
        });

        newPost.save().then(post => res.json(post));

    });  


module.exports = router;
