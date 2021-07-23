const series = require("../models/series.json")

const home = (request, response) => {
    response.status(200).send("Seja bem vinda ao {Reprogrma}Flix")
}
 
const getAll = (request, response) => {
    response.status(200).send(series);
};

const getById = (request, reponse) => {
    const requestedId = request.params.id;
    const filteredId = series.find(serie => serie.id == requestedId);
    reponse.status(200).send(filteredId);
}

const getByTitle = (request,res) => {
    const requestedTitle = request.query.title.toLowerCase()

    const filteredTitle = serie.find(series => series.title.toLowerCase().includes(requestedTitle))

    if(requestedTitle == "" || filteredTitle == undefined){
        res.status(404).send({
            "message": "Por favor, insira um título válido."
        })
    }else{
        res.status(200).send(filteredTitle)
    }
}

const getByGenre = (req, res) => {
    const requestedGenre = req.query.genre;
    let serieList = [];

    series.forEach(serie => {
        let genreList = serie.genre.split(",")

        for (genre of genreList) {
            if (genre.includes(requestedGenre) && serie.genre.includes(genre)) {
            
                serieList.push(serie)
            }
        }
        response.status(200).send(serieList)
    })}

module.exports = {home, getAll, getByGenre, getById, getByTitle }