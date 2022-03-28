import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../assets/mockedData/data"
import PropTypes from "prop-types"
import axios from "axios"

/**
 * It fetches data either from the mockedData or the API and returns it.
 * @modify .env - Set MOCKED_DATA to true || false
 * @param requestTarget - The name of the type of data you want to request from the API.
 * @param userId - The user ID of the user you want to get data for.
 * @returns The data for the user.
 */
async function getData(requestTarget, userId) {
    const mockedEnv = process.env.MOCKED_DATA
    const mockedData = {
        USER_MAIN_DATA: USER_MAIN_DATA,
        USER_ACTIVITY: USER_ACTIVITY,
        USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE: USER_PERFORMANCE
    }
    const apiURL = process.env.API_URL
    const apiTarget = process.env.API_TARGET
        .requestTarget
        .replace(/\$userId\$/g, userId)
    let usersData, data


    if (mockedEnv) {
        usersData = await new Promise(resolve => resolve(mockedData.requestTarget))
        data = await usersData.filter(user => user.id === userId)
    } else {
        try {
            usersData = await axios({
                method: 'get',
                baseURL: apiURL,
                url: apiTarget,
                responseType: "stream"
            })
            data = await usersData.filter(user => user.id === userId)
        } catch (error) {
            console.log('Error fetching data:', error)
        }
    }

    return data
}

export default getData;


getData.prototype = {
    requestTarget: PropTypes.oneOf(['USER_MAIN_DATA', 'USER_ACTIVITY', 'USER_AVERAGE_SESSIONS', 'USER_PERFORMANCE']).isRequired,
    userId: PropTypes.number.isRequired,
}