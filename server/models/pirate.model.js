const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [true, "Pirate name is required"],
        minlength: [5, "The pirate name can not be shorter than 5 characters"],
        maxLengnth: [30, "The pirate name can not be longer than 30 characters"]

    },
    imageUrl: {
        type: String,
        required: [true, "The image URL is required"],

    },
    treasure: {
        type: Number,
    },
    catchPhrase: {
        type: String,
        required: [true, "Catch Phrase is required"],
        minLength: [5, "The catch phrase must be longer than 4 characters"]
    },
    pegLeg: {
        type: Boolean,
        default: false,
    },
    eyePatch: {
        type: Boolean,
        default: false,
    },
    hookHand: {
        type: Boolean,
        validate: {
            validator: function (value) {
                
                return !value; 
            },
            message: 'No playing hooky in my crew!!!', 
        },
    },
    position: {
        type: String,
        enum: ['Sailer', 'Captain', 'Firstmate'],
        default: 'Sailer',
    },

}, {
    timestamps: true
})


const Pirate = mongoose.model('Pirate', PirateSchema);

module.exports = Pirate;