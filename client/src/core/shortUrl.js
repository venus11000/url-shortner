const apiEndpoint = "http://localhost:5000/";           //process.env.REACT_APP_API_ENDPOINT;   //  Ideally we need to get this from .env

export const getShortUrls = () => {
    return fetch(apiEndpoint + "shorturl/get")
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const createShortUrl = (data) => {
    return fetch(apiEndpoint + "shorturl/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .catch(error => error);
}

export const clickShortUrls = (shortUrl) => {
    return fetch(apiEndpoint + "shorturl/clickUrl/" + shortUrl)
        .then(response => response.json())
        .catch(error => console.log(error));
}