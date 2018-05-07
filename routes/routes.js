/*jshint esversion:6*/
// "use strict";

const express = require('express')
const router = express.Router()


module.exports = (knex) => {

getComments = (id) =>{
  return new Promise(function (resolve, reject){
    knex
      .select('comment')
      .from('comments')
      .where('route_id', id)
        
      return resolve();
  })
}
  getRoutes = () => { //with ratings
    return knex
      .select('*').from('routes')
      .then((response) => {
        const users = [] 
        for (let i = 0; i < response.length; i++) {
         let comments = []
          getComments(response[i].id)
            .then((result)=>{
              comments.push(result)
            })
         console.log("comming from getRoutes ", comments)
            let info = {
              id: response[i].id,
              name: response[i].name,
              walk_time: response[i].walk_time,
              name: response[i].name,
              user_id: response[i].user_id,
              description: response[i].description,
            }
            users.push(info)
        }
        
        return users
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  getRoute = (id) => {
      return knex('routes')
      .from('routes')
      .where('id','=', id)
      .then(function (response) {
        return response;
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
    }).then((response)=>{
      console.log("coming from postRoute-then", response)
    }).catch((err)=>{
      console.log("coming from postRoute ", err)
    })
  }

  deleteRoute = (id) =>{
    return knex
    .select()
    .from('routes')
    .where('id', '=', id)
    .delete()
  }
  updateRoute = (id, data) =>{
    console.log("id ", id)
    console.log("data  ", data)

    return knex('routes')
      .where('id', id)
            .update({
              id: id,
              name: data.name,
              walk_time: data.walk_time,
              name: data.name,
              user_id: data.user_id,
              description: data.description
            })
  }


  router.get("/api/all", (req, res)=>{ //API - json
    getRoutes()
    .then((result) => {
          res.json(result)
        })
        .catch(function(err){
          res.send(err)
        })
  })
  router.post('/api/all/new' , (req,res) =>{
    postRoute(req.body)
      .then((result) => {
        res.json(result)
      })
      .catch((err) =>{
        res.send(err)
      })
  })

  router.delete("/api/:id/delete", (req,res)=>{
    deleteRoute(req.params.id)
    .then((result) =>{
      console.log(result)
      res.json(result)
      
    })
  })

  router.get("/api/:id", (req,res) => {
      console.log(req.params.id)
      getRoute(req.params.id)
        .then((result) => {
          // console.log(result)
          res.json('result')
        })
        .catch(function(err){
          res.send(err)
        });
  });

  router.put("/api/:id/edit", (req, res)=>{
    updateRoute(req.params.id, req.body)
    .then((result)=>{
      res.send(200).json(result)
    })
  })

  router.get("/", (req,res) => { //root route
      getRoutes()
        .then((result) => {
          res.render('index', {result: result} )
        })
        .catch(function(err){
          res.send(err)
        })
  })

  router.get("/:id", (req,res) => {
      console.log(req.params.id)
      getRoute(req.params.id)

        .then((result) => {
          // console.log(result)
          res.render('showRoute', {result: result})
          console.log(result)
        })
        .catch(function(err){
          res.send(err)
        });
  });

  router.delete("/:id/delete", (req,res)=>{
    deleteRoute(req.params.id)
    .then((result) =>{
      console.log(result)
      res.redirect('/routes')
      
    })
  })

  router.put("/:id/edit", (req, res)=>{
    updateRoute(req.params.id, req.body)
    .then((result)=>{
      res.redirect("/")
    })
  })

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


