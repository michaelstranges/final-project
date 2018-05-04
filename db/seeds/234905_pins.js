
exports.seed = function(knex, Promise) {
  return knex('pins').del()
    .then(function () {
      return Promise.all([
        knex('pins').insert({description: 'PIN ONE go!', user_id: 1}),
        knex('pins').insert({description: 'second PIN ', user_id: 3}),
        knex('pins').insert({description: '3td pin went', user_id: 2}),
        knex('pins').insert({description: '4th pin went', user_id: 3})
      ]);
    });
};
