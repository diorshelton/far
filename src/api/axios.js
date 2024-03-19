import axios from "axios";

export default axios.create({
	baseURL: "https://api.le-systeme-solaire.net/rest/bodies/",
});

export const instatnce = axios.create({});
