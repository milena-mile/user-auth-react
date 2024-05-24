const requestAPI = async (url: string) => {
    const request = async () => {
        return fetch(url)
            .then(async (response) => {
                const res = await response.json();
                const result = res.code === 404 ? "not found" : res.data.results;
                const state = response.ok ? "success" : "failed";
                return {response: result, state: state};
            })
    }

    try {
        const data = await request();
        return data;

    } catch (error) {
        return {state: "failed"}
    }
}

export default requestAPI;