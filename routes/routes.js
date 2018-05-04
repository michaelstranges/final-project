/*jshint esversion:6*/
// "use strict";

const express = require('express')
const router = express.Router()


module.exports = (knex) => {

   getRoutes = () => {
    return knex
      .select('*').from('routes')
      .then(function (response) {
        console.log(response)
        const users = [] // was polls
        for (let i = 0; i < response.length; i++) {
            let info = {
              id: response[i].id,
              name: response[i].name,
              walk_time: response[i].walk_time,
              name: response[i].name,
              user_id: response[i].user_id
            }
            users.push(info)
        }
        return users
      })
  }

   postRoute = (data) =>{
    console.log('WTFFFF ', data)
    return knex('routes')
    .insert({
      name: data.name,
      walk_time: data.walk_time,
      user_id: data.user_id,
      description: data.description
    })
  }

  router.get("/", (req,res) => {
      getRoutes()
        .then((result) => {
          // console.log(result)
          res.render('index', {result: result} )
        })
        .catch(function(err){
          res.send(err)
        });
  });

  router.post('/new' , (req,res) =>{
    // console.log(req.body)
    postRoute(req.body)
      .then((result) => {
        res.redirect('/routes')
      })
      .catch((err) =>{
        res.send(err)
      })
  })

  return router
}


