const path = require('path');
const { randomString } = require('../helpers/libs');
const fs = require('fs-extra');
const md5 = require('md5');
const { Image, Comment } = require('../models');
const ctrl = {};

ctrl.index = async (req, res) => {
    const image = await Image.findOne({
        fileName: {
            $regex: req.params.image_id
        }
    });
    res.status(200);
    res.render('image', { image });
};

ctrl.create = (req, res) => {
    const saveImage = async () => {
        const imgUrl = randomString();
        const images = await Image.find({
            fileName: imgUrl
        });
        if (images.length > 0) {
            saveImage();
        } else {
            const imageTemPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                await fs.rename(imageTemPath, targetPath);
                const newImg = new Image({
                    title: req.body.title,
                    fileName: imgUrl + ext,
                    description: req.body.description
                });
                const imgSaved = await newImg.save();
                res.redirect('/images/'+imgUrl);
            } else {
                await fs.unlink(imageTemPath);
                res.status(500).json({error: 'Only Images are allowed'});
            }
        }
    };
    saveImage();
};

ctrl.like = (req, res) => {

};

ctrl.comment = async (req, res) => {
    const image = await Image.findOne({fileName: {$regex: req.params.image_id}});
    if(image){
        const newComment = new Comment(req.body);
        newComment.gravatar = md5(newComment.email);
        newComment.image_id = image._id;
        await newComment.save();
        res.redirect('/images/'+ image.uniqueId)
    }else {
        res.send('u r fucked!')
    }

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;