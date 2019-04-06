const mongoose = require('mongoose');
const { Shema } = mongoose;
const ObjectId = Shema.ObjectId;
const path = requiere('path');

const CommentShema = new Shemma ({
    image_id: { type: ObjectId },
    email: { type: String },
    name: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timeStamp: { type: Date, default: Date.now }
});

CommentShema.virtual('image')
    .set( (image) => {
        this._image = image;
    })
    .get( () => {
        return this._image;
    })

module.exports = mongoose.model('Commet', CommentShema);