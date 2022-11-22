var apiKey = "08f00304851866898e77f5deff0d7eba";
var apiUrl = "https://api.themoviedb.org/3"
var apiSearch = apiUrl + "/search/movie"
var testQuery = "Bourne";

fetch(apiSearch + "?api_key=" + apiKey + "&query=" + testQuery)