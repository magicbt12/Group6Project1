var apiKey = "08f00304851866898e77f5deff0d7eba";
var history = localStorage.getItem("searchHistory") ? JSON.parse(localStorage.getItem("searchHistory")) : [];
var apiUrl = "https://api.themoviedb.org/3";
var apiSearch = apiUrl + "/search/movie";
var testQuery = "";
var buttonEl = document.getElementById("button-enter");


function getTitle() { 
    var inputBoxEl = document.getElementById("input-box").value;
    testQuery = inputBoxEl;
    console.log(testQuery)
    fetch(apiSearch + "?api_key=" + apiKey + "&query=" + testQuery)
