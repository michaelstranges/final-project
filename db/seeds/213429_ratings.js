
exports.seed = function(knex, Promise) {
  return knex('ratings').del()
    .then(function () {
      return Promise.all([
        knex('ratings').insert({id:1, rating: 4, user_id: 1}),
        knex('ratings').insert({id:2, rating: 2, user_id: 2}),
        knex('ratings').insert({id:3, rating: 7, user_id: 3})
      ]);
    });
};
