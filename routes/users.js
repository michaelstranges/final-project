/*jshint esversion:6 */

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  function getUsers() {
    return knex
      .select('*').from('users_table')
      .then(function (response) {
        console.log(response);
        const users = []; // was polls
        for (let i = 0; i < response.length; i++) {
            let info = {
              name: response[i].name,
              password: response[i].password,
            };
            users.push(info);
        }
        return users;
      });
  }

  function getRoutes() {
    return knex
      .select('*').from('routes')
      .then(function (response) {
        console.log(response);
        const users = []; // was polls
        for (let i = 0; i < response.length; i++) {
            let info = {
              name: response[i].name,
              password: response[i].password,
            };
            users.push(info);
        }
        return users;
      });
  }

  router.get("/", (req,res) => {
      getUsers()
        .then((result) => {
          res.json(result);
        })
        .catch(function(err){
          res.send(err);
        });
  });

  return router;
};


