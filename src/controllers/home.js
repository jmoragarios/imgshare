const ctrl = {}
const { Image } = require('../models');
const sideBar = require('../helpers/sidebar');

ctrl.index = async (req, res) => {
    const images = await Image.find().sort({ timesStamp: -1 });
    let viewModel = { images:[] };
    viewModel.images = images;
    viewModel = await sideBar(viewModel);
    
    res.render('index', viewModel);
}

module.exports = ctrl;