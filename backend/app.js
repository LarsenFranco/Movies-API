
const express = require("express");

const server = express();

server.use(express.json());

server.listen(8000, () => console.log("Server arriba en " + "http://localhost:8000/"));

let cors = require('cors');
const axios = require('axios').default;
//const {_KEY} = require("../Api_key")
const _KEY =  "04c35731a5ee918f014970082a0088b1"

server.use(cors());




const popularMovie = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${_KEY}&page=` //!indicamos nº de pag
const searchMovie = `"https://api.themoviedb.org/3/search/movie?&api_key=${_KEY}&query=";` //! pasamos por query la busqueda
const imgPath = "https://image.tmdb.org/t/p/w1280"; //! añadimos poster_path al final 







server.get('/', function (req, res) {
    
  console.log(`Status ok en / `)
    axios.get(popularMovie+"2")
        .then((resp) => {
            console.log('Consulta API ok')
            res.json(resp.data)
        }
        ).catch((e)=>{
            console.log(`Error ${e.message}`)
          res.status(404).send(e);
        })     
})



















// //* La ruta search nos permitirá hacer una búsqueda especifica
// server.get('/search', function(req, res){
//     //localhost:8000/search?title=Marvel     
//     let expression=req.query.title;
//     console.log(`Status ok en /search `)
//     async function getTitle(){
//         try{
//             const response= await axios.get(_URL+"Search"+_KEY+expression)
//             res.json(response.data)
//         }
//         catch(e){
//             console.log(`API= Error ${e.message}`)
//             res.status(404).send(e)
//         }
//     }
//     getTitle();
// })


server.get('/hardcode250', function(req,res){
  console.log('harcoding')
  res.send(pelis)
})
