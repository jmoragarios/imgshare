const mongoose = require('mongoose');
const { Shema } = mongoose;
const path = requiere('path');

const ImageShema = new Shema({
    title: { type: String },
    description : { type: String },
    fileName: { type: String },
    views: { type: Number, default : 0 },
    likes: { type: Number, default : 0 },
    timeStamp: { type: Date, default: Date.now }
});

ImageShema.virtual('uniqueId')
    .get( () =>{
        return this.fileName.replace(path.extname(this.fileName));
    });

module.exports = mongoose.model('Image', ImageShema);