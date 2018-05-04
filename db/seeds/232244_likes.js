
exports.seed = function(knex, Promise) {
  return knex('likes').del()
    .then(function () {
      return Promise.all([
        knex('likes').insert({user_id: 1}),
        knex('likes').insert({user_id: 1}),
        knex('likes').insert({user_id: 2}),
        knex('likes').insert({user_id: 3}),
        knex('likes').insert({user_id: 1}),
        knex('likes').insert({user_id: 1})
      ]);
    });
};
