'use strict';

function searchHandles() {
    /*console.log(fetch ("https://api.github.com/users/jaredlusher/repos"))*/
    fetch ("https://api.github.com/users/"+document.getElementById("selection").value+"/repos")
        .then(response => response.json())
        //console.log(response => response.json());
        .then(responseJson => displayResults(responseJson))
        /*.catch(error => console.log(error));*/
}

function displayResults(responseJson) {
    let i = 0
    console.log(responseJson);
    /*Object.entries(responseJson)*/
    console.log()
    for (i=0; i < responseJson.length; i++)
        $("#results").append("<span>Repo Name: "+responseJson[i].name+"</span><span>&nbsp&nbsp&nbsp&nbsp&nbsp<a href='https://github.com/"+document.getElementById("selection").value+"'/"+responseJson[i].full_name+">Link to repo</a></span><br>");
        /*$("#results").append("<span>"+responseJson[i].)*/
}

function watchForm() {
    $("form").submit(event => {
        event.preventDefault();
        searchHandles();
    })
}

$(function() {
    watchForm();
})