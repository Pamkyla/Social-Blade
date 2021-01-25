export default class StatsService {

    _baseUrl = 'http://localhost:4000/getData?streamerNickname=';

    getData = async (nickname) => {
        const response = await fetch(`${this._baseUrl}${nickname}`);

        if (!response.ok) {
            throw new Error(`Houston, we have a problem ${nickname}`);
        }

        return await response.json();
    }

    getUser = async (nickname) => {
        const response = await this.getData(nickname);
        return response;
    }

}