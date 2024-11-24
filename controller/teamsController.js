import asyncHandler from 'express-async-handler';

const getTeams = asyncHandler(async(req, res) => {
   
    let response1, response2;
    let responseData = {};

    try {
        response1 = await fetch(
            `${process.env.API_FOOTBALL_BASE_URL_V1}teams/league/2`,
            {
                method: "GET",
                headers: {
                    'x-rapidapi-key': `${process.env.API_FOOTBALL_API_KEY}`,
                    'x-rapidapi-host': `${process.env.API_HOST}`
                },
            }
        )

        response2 = await fetch(
            `${process.env.API_FOOTBALL_BASE_URL_V1}teams/league/3`,
            {
                method: "GET",
                headers: {
                    'x-rapidapi-key': `${process.env.API_FOOTBALL_API_KEY}`,
                    'x-rapidapi-host': `${process.env.API_HOST}`
                },
            }
        )

        response1 = await response1.json();
        response2 =await response2.json();

        responseData = {
            status: "success",
            response: [...response1.api.teams, ...response2.api.teams]
        }
    } catch (err) {
      console.log('Team fetch error ', err);  

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

const getTeam = asyncHandler(async(req, res) => {
    const {id} = req.params;
   
    let response;
    let responseData = {}

    try {
        response = await fetch(
            `${process.env.API_FOOTBALL_BASE_URL}players?team=${id}&season=${process.env.SEASON_YEAR}`,
            {
                method: "GET",
                headers: {
                    'x-rapidapi-key': `${process.env.API_FOOTBALL_API_KEY}`,
                    'x-rapidapi-host': `${process.env.API_HOST}`
                },
            }
        )

        response = await response.json();

        responseData = {
            status: "success",
            response: response.response
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
    getTeams,
    getTeam
}