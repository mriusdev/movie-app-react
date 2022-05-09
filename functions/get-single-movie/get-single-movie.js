const axios = require('axios')
const handler = async (event) => {
  const { id } = event.queryStringParameters

  const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
  try {
    const { data } = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (error) {
    const { statusCode, statusText, headers, data } = error.response
    return {
      statusCode: 404,
      body: JSON.stringify({statusCode, statusText, headers, data})
    }
  }
}

module.exports = { handler }
