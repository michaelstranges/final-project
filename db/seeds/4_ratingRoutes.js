
exports.seed = function(knex, Promise) {
return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({id: 1, rating: 4, route_id: 1, user_id: 1}),
        knex('ratings').insert({id: 2, rating: 7, route_id: 2, user_id: 2}),
        knex('ratings').insert({id: 3, rating: 12, route_id: 3, user_id: 3})
      ])
    })
}
