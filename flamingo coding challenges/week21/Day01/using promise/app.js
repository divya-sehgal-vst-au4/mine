//1st Exercise -
var express = require('express');
var app = express();
const fetch = require("node-fetch");



app.get('/films',async (req,response)=>{
    
let id  = [2,6,9]
let planet = Promise.all(
    id.map(elememt =>{       
        return fetch(`https://swapi.co/api/planets/${elememt}`).then(res => res.json())
         
    })
)

let peoples;
let filmsData;
let filmTitle =[]; 
 planet.then( res => {
            res.map(data =>{
                peoples=  Promise.all(data.residents.map( data => {
                               return fetch(data).then(res => res.json())
                    }))
                peoples.then(data => {
                        data.map(res => {
                         filmsData = Promise.all(
                                res.films.map( film =>{
                                        return fetch(film).then(res =>res.json())
                                })
                            )

                           filmsData.then(res =>{
                               res.map(abc =>filmTitle.push(abc.title))
                               console.log(filmTitle)
                               if(filmTitle.length == 14){
                                response.setHeader("Access-Control-Allow-Origin", "*");
                                response.setHeader("Access-Control-Allow-Credentials", "true");
                                response.setHeader("Access-Control-Max-Age", "1800");
	                           	response.setHeader("Access-Control-Allow-Headers", "content-type");
	                          	response.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
		                    
                                response.send(JSON.stringify(filmTitle))
                               }
                               
                           })     

                        })

                })        

            })
            
    })



})



app.listen(3000)