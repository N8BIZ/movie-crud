const knex = require('./knex') ///the connection!!!

module.exports = {
  getAll(){
    return knex('movie');
  },
  getOne(id){
    return knex('movie').where('id', id).first()
  },
  create(movies){
    return knex('movie').insert(movies, '*');
  },
  update(id, movies){
    return knex('movie').where('id', id).update(movies, '*');
  },
  delete(id){
    return knex('movie').where('id', id).del();
  }
}
