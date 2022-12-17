const fetchData = (endpoint, callback) => {
    fetch(`https://637d241516c1b892ebc87a2f.mockapi.io/${endpoint}`)
        .then(res => res.json())
        .then(res => callback(res))
}

export default fetchData