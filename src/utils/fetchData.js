const fetchData = (endpoint, callback) => {
    fetch(`http://localhost:3333/api/${endpoint}`)
        .then(res => res.json())
        .then(res => callback(res))
}

export default fetchData