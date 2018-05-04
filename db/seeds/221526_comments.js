
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('comments').insert({comment: 'Wow, is it working??', user_id: 1}),
        knex('comments').insert({comment: 'wow, I dont think so', user_id: 2}),
        knex('comments').insert({comment: 'yeah... sooooooooooo', user_id: 3})
      ]);
    });
};
