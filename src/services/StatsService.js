export default class StatsService {

    _baseUrl = 'http://localhost:4000/getData?streamerNickname=';

    getData = async (nickname) => {
        const response = await fetch(`${this._baseUrl}${nickname}`);

        if (!response.ok) {
            throw new Error(`Houston, we have a problem with ${nickname}`);
        }

        return await response.json();
    }

    getUser = async (nickname) => {
        const response = await this.getData(nickname);
        console.log(response);
        return response;
    }

    getClicks = async (url) => {
        const response = await fetch(`http://localhost:4000/bitlyUrl?bitlyUrl=${url}`);
        console.log(response);
        return await response.json();
    };
}