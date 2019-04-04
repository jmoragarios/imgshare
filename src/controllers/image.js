const path = require('path');
const { randomString } = require('../helpers/libs');
const fs = require('fs-extra');

const ctrl = {};

ctrl.index = (req, res) => {

};

ctrl.create = async (req, res) => {
    const imgUrl = randomString();
    const imageTemPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

    if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif'){
        await fs.rename(imageTemPath, targetPath);
    }

    res.send('works!');
};

ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.remove = (req, res) => {

};

module.exports = ctrl;