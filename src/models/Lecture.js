const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
    course: { type: String, required: true },
    lectures: { type: Array, required: true, default: [] },
    // title: { type: String, required: true },
    // duration: { type: String, required: true },
    // video: { type: String, required: true },
    // course: { type: String, required: true },
    // description: { type: String, required: true },
    // locked: { type: Boolean, required: true, default: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Lecture", LectureSchema);