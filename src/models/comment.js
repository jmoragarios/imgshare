const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;
const path = require('path');

const CommentSchema = new Schema ({
    image_id: { type: ObjectId },
    email: { type: String },
    name: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timeStamp: { type: Date, default: Date.now }
});

CommentSchema.virtual('image')
    .set( (image) => {
        this._image = image;
    })
    .get( () => {
        return this._image;
    })

module.exports = mongoose.model('Commet', CommentSchema);