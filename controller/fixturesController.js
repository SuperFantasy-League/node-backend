import asyncHandler from 'express-async-handler';

const getLeagueFixtures = asyncHandler(async(req, res) => {
   
    let response;
    let responseData = {};

    try {
        response = await fetch(
            `${process.env.API_FOOTBALL_BASE_URL}fixtures?league=39&season=${process.env.SEASON_YEAR}`,
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
      console.log('Fixtures fetch error ', err);  

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

const getTeamFixtures = asyncHandler(async(req, res) => {
    const {id} = req.params;
   
    let response;
    let responseData = {};

    try {
        response = await fetch(
            `${process.env.API_FOOTBALL_BASE_URL}fixtures?season=${process.env.SEASON_YEAR}&team=${id}`,
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
      console.log('Fixtures fetch error ', err);  

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

export{
    getLeagueFixtures,
    getTeamFixtures
}