import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    id: String,
    points: Number,
    title: String,
    text: String,
    type: {
        type: String,
        enum: ['multiple_choice', 'true_false', 'fill_in_blanks']
    },
    choices: [String],
    correctAnswer: String,
    blanks: [String]
});
const quizSchema = new mongoose.Schema({
    quizType: {
        type: String,
        enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
        default: 'Graded Quiz'
    },
    title: String,
    course: String,
    published: {
        type: Boolean,
        default: false,
    },
    points: {
        type: Number,
        default: 0
    },
    assignmentGroup: {
        type: String,
        enum: ['Quizzes', 'Exams', 'Assignments', 'Project'],
        default: 'Quizzes'
    },
    shuffleAnswers: {
        type: Boolean,
        default: true
    },
    timeLimit: {
        type: Number,
        default: 20
    },
    multipleAttempts: {
        type: Boolean,
        default: false
    },
    showCorrectAnswers: {
        type: Boolean,
        default: false
    },
    accessCode: {
        type: String,
        default: ''
    },
    oneQuestionAtATime: {
        type: Boolean,
        default: true
    },
    webcamRequired: {
        type: Boolean,
        default: false
    },
    lockQuestionsAfterAnswering: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    },
    availableDate: {
        type: Date
    },
    untilDate: {
        type: Date
    },
    questions: [questionSchema]},

    { collection: "quizzes" });
export default quizSchema;