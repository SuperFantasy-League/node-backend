import asyncHandler from 'express-async-handler';

const getPlayers = asyncHandler(async(req, res) => {
    const {page} = req.query;
   
    let response;
    let responseData = {}

    try {
        response = await fetch(
            `${process.env.SPORTY_MONK_BASE_URL}players?page=${page}&per_page=10&include=statistics&include=position`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${process.env.SPORTY_MONK_API_TOKEN}`
                },
            }
        )

        response = await response.json();

        responseData = {
            status: "success",
            response
        }
    } catch (err) {
    //   console.log('Team fetch error ', err);  

      responseData = {
            status: "failed",
            response: err
        }
    }
    
    if(responseData.status === "failed") {

        res.status(400).json({
            status: 400,
            message: 'Request failed.',
            data: responseData
        });

    }

    res.status(200).json({
        status: 200,
        message: 'Request successful.',
        data: responseData
    });
})

const getPlayerById = asyncHandler(async(req, res) => {
    const {id} = req.params;
   
    let response;
    let responseData = {}

    try {
        response = await fetch(
            `${process.env.SPORTY_MONK_BASE_URL}players/${id}?&include=statistics`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${process.env.SPORTY_MONK_API_TOKEN}`
                },
            }
        )

        response = await response.json();

        responseData = {
            status: "success",
            response
        }
    } catch (err) {
    //   console.log('Team fetch error ', err);  

      responseData = {
            status: "failed",
            response: err
        }
    }
    
    if(responseData.status === "failed") {

        res.status(400).json({
            status: 400,
            message: 'Request failed.',
            data: responseData
        });

    }

    res.status(200).json({
        status: 200,
        message: 'Request successful.',
        data: responseData
    });
})

const searchForPlayer = asyncHandler(async(req, res) => {
    const {search} = req.query;
   
    let response;
    let responseData = {}

    try {
        response = await fetch(
            `${process.env.SPORTY_MONK_BASE_URL}players/search/${search}?include=statistics&include=position`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${process.env.SPORTY_MONK_API_TOKEN}`
                },
            }
        )

        response = await response.json();

        responseData = {
            status: "success",
            response
        }
    } catch (err) {
    //   console.log('Team fetch error ', err);  

      responseData = {
            status: "failed",
            response: err
        }
    }
    
    if(responseData.status === "failed") {

        res.status(400).json({
            status: 400,
            message: 'Request failed.',
            data: responseData
        });

    }

    res.status(200).json({
        status: 200,
        message: 'Request successful.',
        data: responseData
    });
})

export {
    getPlayers,
    getPlayerById,
    searchForPlayer
}