import axios from 'axios';

const KEY = 'AIzaSyBLE_75Nk8yldH9Gca7ohp7c1SczuOgv1Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
            part: 'snippet',
            type: 'video',
            maxResults:5,
            key: `${KEY}`

    }
});

