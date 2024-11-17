import asyncHandler from 'express-async-handler';
import User from "../models/UserModel.js";

const registerUser = asyncHandler(async(req, res) => {

    const {address, rosterName} = req.body;

    const foundUser = await User.findOne({address});

    if(foundUser) {
        return(
            res.status(400).json({
                status: 400,
                message: 'User already exist.',
                data: {}
            })
        )
    }

    const user = await User.create({
        address,
        rosterName: rosterName,
        roster: []
    })

    await user.save();

    res.status(201).json({
        status: 201,
        message: 'User registered.',
        data: user
    })
})

const addToRoster = asyncHandler(async(req, res) => {

    const {
        address,
        player
    } = req.body

    const user = await User.findOne({address})

    if(!user || user === null) {
        return(
            res.status(400).json({
                status: 400,
                message: 'User does not exist.',
                data: {}
            })
        )
    }

    if(user.roster && user.roster.length > 15) {
        return(
            res.status(400).json({
                status: 400,
                message: 'Your roster is full.',
                data: {}
            })
        )
    }

    user.roster.push(player)

    const response = await user.save()

    res.status(200).json({
        status: 200,
        message: 'Player added to roster.',
        data: response
    })
})

const removeFromRoster = asyncHandler(async(req, res) => {

    const {
        address,
        playerId
    } = req.body

    const user = await User.findOne({address})

    if(!user || user === null) {
        return(
            res.status(400).json({
                status: 400,
                message: 'User does not exist.',
                data: {}
            })
        )
    }
    
    user.roster = user.roster.filter((cur) => cur.playerId !== playerId)

    const response = await user.save()

    res.status(200).json({
        status: 200,
        message: 'Player removed from roster.',
        data: response
    })
})

const getUserRoster = asyncHandler(async(req, res) => {

    const {address} = req.body

    const user = await User.findOne({address})

    if(!user || user === null) {
        return(
            res.status(400).json({
                status: 400,
                message: 'User does not exist.',
                data: {}
            })
        )
    }

    res.status(200).json({
        status: 200,
        message: 'Request successful.',
        data: {name: user.rosterName, roster: user.roster}
    })
})

export {
    registerUser,
    addToRoster,
    removeFromRoster,
    getUserRoster
}