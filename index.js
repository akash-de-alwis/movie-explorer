function search() {
    let inputTag = document.getElementById("input");
    let movieName = inputTag.value;

    console.log(movieName);

    let htmlRequest = new XMLHttpRequest();

    let url = "https://www.omdbapi.com/?apikey=f61442c3&t=" + movieName;

    htmlRequest.open("GET", url);

    htmlRequest.send();

    htmlRequest.responseType = "json";

    htmlRequest.onload = () => {
        let response = htmlRequest.response;
        console.log(response);

        let imgTag = document.getElementById("poster");
        imgTag.src = response.Poster;

        let plotTag = document.getElementById("plot");
        plotTag.innerHTML = response.Plot;

        let langTag = document.getElementById("lang");
        langTag.innerHTML = response.Language;

        let genreTag = document.getElementById("genre");
        genreTag.innerHTML = response.Genre;

        let boxOfficeTag = document.getElementById("boxOffice");
        boxOfficeTag.innerHTML = response.BoxOffice;

        let releasedTag = document.getElementById("released");
        releasedTag.innerHTML = response.Released;

        let yearTag = document.getElementById("year");
        yearTag.innerHTML = response.Year;

        let actorsTag = document.getElementById("actors");
        actorsTag.innerHTML = response.Actors;

        let ratingTag = document.getElementById("imdbRating");
        ratingTag.innerHTML = response.imdbRating + "/10";
    };
}