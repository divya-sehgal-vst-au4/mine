//1st Exercise -
var express = require('express');
var app = express();
const fetch = require("node-fetch");


let id = [2, 6, 9]
app.get('/films', async (req, res) => {
    let residents;
    let titles = [];
    await Promise.all(
        id.map(async  element =>{
        let planet = await fetch(`https://swapi.co/api/planets/${element}`)
        planet = await planet.json();
         residents = await Promise.all(planet.residents.map(async (api) => {
                 let  resident = await fetch(api)
                 resident = await resident.json()
                  await Promise.all(resident.films.map( async film =>{
                            let res = await fetch(film)
                            films = await res.json() 
                            titles.push(films.title)
                        })
                  )
        }))
    })

    )
    console.log( titles);
    res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS"); 
        res.send(JSON.stringify(titles));


    

})


app.listen(3000)