
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_table').del()
    .then(function () {
      // Inserts seed entries
    return Promise.all([
        knex('users_table').insert({id: 1, name: 'Mateus', password: '123'}),
        knex('users_table').insert({id: 2, name: 'Mike', password:'123'}),
        knex('users_table').insert({id: 3, name: 'Braga', password:'123'})
      ]);
    });
};
