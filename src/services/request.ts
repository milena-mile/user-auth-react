const requestAPI = async (url: string) => {
    const request = async () => {
        return fetch(url)
            .then(async (response) => {
                const res = await response.json();
                const state = response.ok ? "success" : "failed";
                return {response: res.data.results, state: state};
            })
    }

    try {
        const data = await request();
        return data;

    } catch (error) {
        console.log(error);
        return {state: "failed"}
    }
}

export default requestAPI;