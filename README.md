#FINAL PROJECT SETUP

#SETTING UP DE DB

- DB using PostgreSQL

- $psql -U vagrant -d template1
- $CREATE ROLE 'labber' WITH LOGIN password 'labber'
- $CREATE DATABASE finalproject OWNER labber;