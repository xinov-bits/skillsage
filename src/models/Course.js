const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },

    desc: { type: String, required: true },

    dimg: { type: String, required: true },
    img1: { type: String, required: true },

    category: { type: String, required: true },
    subCategory: { type: String, required: false },

    duration: { type: String, required: true },

    price: { type: Number, required: true },

    sku: { type: Number, required: true, unique: true },

}, { timestamps: true });


mongoose.models = {}
export default mongoose.model("Course", CourseSchema);
// export default mongoose.models.Course || mongoose.model("Course", CourseSchema);