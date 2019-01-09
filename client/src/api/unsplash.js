import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: 'Client-ID 80a67f042833d692f6e228b455c4a5a3c51e09ee553b746e70abd158c6d59b74'
      }
});