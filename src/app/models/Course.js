import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String},
    description: {type: String},
    thumbnail: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const courseModel = mongoose.model('Course', Course);
export default courseModel
