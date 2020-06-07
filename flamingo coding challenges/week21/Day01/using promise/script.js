
$.get( "http://localhost:3000/films", function( res ) {
   let data =  JSON.parse(res)
   //console.log("data",data)
   data.forEach(film=>{
     //  console.log(film)
       $( "#films" ).append( `<li>${film}</li>`)
      
      })
})