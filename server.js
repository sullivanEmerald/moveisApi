const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')

app.use(cors())
const movies = {
    merlin : {
        'wizard' : 'Gasious',
        'king' : 'Uther Pentagron',
        'emrys' : 'Melin',
        'warrior' : 'Arthur',
        'city' : 'carmelot'
    },

    legend : {
        'wizard' : 'zedicus zul zorander',
        'king' : 'lord Ralh',
        'emrys' : 'kalhan',
        'warrior' : 'richard cypher',
        'city' : 'd haran'
    },

    city : {
        'wizard' : 'zedicus zul zorander',
        'king' : 'lord Ralh',
        'emrys' : 'kalhan',
        'warrior' : 'richard cypher',
        'city' : 'd haran'
    },


}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:movieTitle', (req, res) => {
     let movieTitle = req.params.movieTitle.toLowerCase()
    if(movies[movieTitle]){
        res.json(movies[movieTitle])
    }else{
        res.send('Does not exist')
    }
})

app.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
})