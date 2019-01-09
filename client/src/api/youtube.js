import axios from "axios";
const KEY = "AIzaSyAb9sRqRDfFKnd9dAdbDR1UX1YaDwGkJak";
const CLIENT_ID = "807627375566-8chtqmptr93m9i10en3osorigqr044du.apps.googleusercontent.com";
const CLIENT_SECRET = "dXimQci2fQ3JHWaiFZ-Iw1C6";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        // id: "videolisting-228108"
    },
    headers: {
        'Authorization': "Bearer " + KEY,
        "Access-Control-Allow-Origin": "*"
        //CLIENT_ID + " " + CLIENT_SECRET
    }
});
