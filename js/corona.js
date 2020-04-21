class corona {

    async get(url) {
        const response = await fetch(url)
        const resData = await response.json();
        return resData
    }

}