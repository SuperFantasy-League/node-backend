import mongoose from "mongoose";

const playerSchema = mongoose.Schema({

    createdAt: {
        type: String,
        required: false,
        default: new Date()
    },

    name:{
        type: String,
        required: false
    },

    jerseyNumber:{
        type: Number,
        required: false,
        default: 0
    },

    position: {
        type: String,
        required: false,
        default: ""
    },

    clubName: {
        type: String,
        required: false,
        default: ""
    },

    playerId:{ // equivalent to id
        type: Number,
        required: false,
        default: 0
    },

    sportId:{
        type: Number,
        required: false,
        default: 0
    },

    countryId:{
        type: Number,
        required: false,
        default: 0
    },

    nationalId:{
        type: Number,
        required: false,
        default: 0
    },

    cityId:{
        type: Number,
        required: false,
        default: 0
    },

    image:{
        type: String,
        required: false,
        default: ""
    },

    point:{
        type: Number,
        required: false,
        default: 0
    },

    teamId:{
        type: Number,
        required: false,
        default: 0
    }

})


const userSchema = mongoose.Schema({

    createdAt: {
        type: String,
        required: true,
        default: new Date()
    },

    address: {
        type: String,
        required: true,
    },

    rosterName:{
        type: String,
        required: true
    },

    roster: [playerSchema]

})

const User = mongoose.model("User", userSchema);

export default User;