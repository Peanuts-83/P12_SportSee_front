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
 * @modify .env - Set MOCKED_DATA to 'true' || 'false' in order to use mockedData or Axios requests
 * @param {string} requestTarget - The name of the type of data you want to request from the API.
 * @param {number} userId - The user ID of the user you want to get data for.
 * @access localStorage - Fetched data are stored in localStorage to provide better access for next time
 * @returns The data for the user.
 */
async function getData(requestTarget, userId) {
    const mockedEnv = process.env.REACT_APP_MOCKED_DATA
    const mockedData = {
        USER_MAIN_DATA: USER_MAIN_DATA,
        USER_ACTIVITY: USER_ACTIVITY,
        USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE: USER_PERFORMANCE
    }
    const apiURL = process.env[`REACT_APP_API_URL`]
    const apiTarget = process.env[`REACT_APP_${requestTarget}`].replace(/userId/, userId)
    let usersData, data

    try {
        if (localStorage.getItem(`sportSee-${userId}-${requestTarget}`)) {
            console.log('Data is taken from your localStorage.')
            data = JSON.parse(localStorage.getItem(`sportSee-${userId}-${requestTarget}`))
        } else {
            console.log(`Data is taken from ${mockedEnv === "true" ? "MOCKED_DATA" : "BackEnd database with Axios"}.`)
            if (mockedEnv === 'true') {
                console.log('MOCKED DATA true');
                usersData = await new Promise((resolve) => resolve(mockedData[requestTarget]))
                data = { data: await usersData.filter(user => user.id ? user.id === userId : user.userId === userId)[0] }
                localStorage.setItem(`sportSee-${userId}-${requestTarget}`, JSON.stringify(data))
            } else {
                try {
                    usersData = await axios({
                        method: 'get',
                        baseURL: apiURL,
                        url: apiTarget,
                        responseType: "stream"
                    })
                    data = await usersData.data
                    localStorage.setItem(`sportSee-${userId}-${requestTarget}`, JSON.stringify(data))
                } catch (error) {
                    console.log('Erreur axios:', error)
                }
            }
        }
        return data
    } catch (error) {
        console.log('Erreur de récupération des données utilisateur:', error)
        alert('Une erreur est survenue: Utilisateur non reconnu.')
    }

}

export default getData;


getData.proptype = {
    requestTarget: PropTypes.oneOf(['USER_MAIN_DATA', 'USER_ACTIVITY', 'USER_AVERAGE_SESSIONS', 'USER_PERFORMANCE']).isRequired,
    userId: PropTypes.number.isRequired,
}