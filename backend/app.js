
const express = require("express");
const pelis = {
    "items": [
      {
        "id": "tt0111161",
        "rank": "1",
        "title": "The Shawshank Redemption",
        "fullTitle": "The Shawshank Redemption (1994)",
        "year": "1994",
        "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
        "imDbRating": "9.2",
        "imDbRatingCount": "2560089"
      },
      {
        "id": "tt0068646",
        "rank": "2",
        "title": "The Godfather",
        "fullTitle": "The Godfather (1972)",
        "year": "1972",
        "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Francis Ford Coppola (dir.), Marlon Brando, Al Pacino",
        "imDbRating": "9.2",
        "imDbRatingCount": "1762284"
      },
      {
        "id": "tt0468569",
        "rank": "3",
        "title": "The Dark Knight",
        "fullTitle": "The Dark Knight (2008)",
        "year": "2008",
        "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Christopher Nolan (dir.), Christian Bale, Heath Ledger",
        "imDbRating": "9.0",
        "imDbRatingCount": "2520202"
      },
      {
        "id": "tt0071562",
        "rank": "4",
        "title": "The Godfather: Part II",
        "fullTitle": "The Godfather: Part II (1974)",
        "year": "1974",
        "image": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
        "crew": "Francis Ford Coppola (dir.), Al Pacino, Robert De Niro",
        "imDbRating": "9.0",
        "imDbRatingCount": "1220309"
      },
      {
        "id": "tt0050083",
        "rank": "5",
        "title": "12 Angry Men",
        "fullTitle": "12 Angry Men (1957)",
        "year": "1957",
        "image": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Sidney Lumet (dir.), Henry Fonda, Lee J. Cobb",
        "imDbRating": "9.0",
        "imDbRatingCount": "756340"
      },
      {
        "id": "tt0108052",
        "rank": "6",
        "title": "Schindler's List",
        "fullTitle": "Schindler's List (1993)",
        "year": "1993",
        "image": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Steven Spielberg (dir.), Liam Neeson, Ralph Fiennes",
        "imDbRating": "8.9",
        "imDbRatingCount": "1305458"
      },
      {
        "id": "tt0167260",
        "rank": "7",
        "title": "The Lord of the Rings: The Return of the King",
        "fullTitle": "The Lord of the Rings: The Return of the King (2003)",
        "year": "2003",
        "image": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
        "crew": "Peter Jackson (dir.), Elijah Wood, Viggo Mortensen",
        "imDbRating": "8.9",
        "imDbRatingCount": "1762921"
      }
    ],
    "errorMessage": ""
  }
const server = express();

server.use(express.json());

server.listen(8000, () => console.log("Server arriba en " + "http://localhost:8000/"));

let cors = require('cors');
const axios = require('axios').default;

server.use(cors());

const _URL = "https://imdb-api.com/es/API/";
const _KEY = "//NOPE";



//* La ruta home nos otorgará 250 top movies

server.get('/', function (req, res) {
    console.log(`Status ok en / `)

    axios.get(_URL + "Top250Movies" + _KEY)
        .then((resp) => {
            console.log('Consulta API ok')
            res.json(resp.data)
        }
        ).catch((e)=>{
            console.log(`Error ${e.message}`)
          res.status(404).send(e);
        })     
})

//* La ruta search nos permitirá hacer una búsqueda especifica
server.get('/search', function(req, res){
    //localhost:8000/search?title=Marvel     
    let expression=req.query.title;
    console.log(`Status ok en /search `)
    async function getTitle(){
        try{
            const response= await axios.get(_URL+"Search"+_KEY+expression)
            res.json(response.data)
        }
        catch(e){
            console.log(`API= Error ${e.message}`)
            res.status(404).send(e)
        }
    }
    getTitle();
})

server.get('/hardcode250', function(req,res){
    console.log('harcoding')
    res.send(pelis)
})