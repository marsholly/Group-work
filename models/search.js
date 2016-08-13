const db = require('../config/db.js');
const squel = require('squel').useFlavour('mysql');
const uuid = require('uuid');

db.query(`CREATE TABLE IF NOT EXISTS searches (
    id VARCHAR(50),
    text VARCHAR(100)
  )`, err => {
    if(err) {
      console.log('Error creating table:', err);
    }
  });

// Get All
exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('searches').toString();

    db.query(sql, (err, searches) => {
      if(err) {
        reject(err);
      } else {
        resolve(searches);
      }
    });
  });
};

// Get One
exports.getOne = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.select()
                   .from('searches')
                   .where('id = ?', id)
                   .toString();

    db.query(sql, (err, searches) => {
      let search = searches[0];

      if(err) {
        reject(err);
      } else if(!search) {
        reject({error: 'Search not found.'})
      } else {
        resolve(search);
      }
    });
  });
};

// Create
exports.create = function(newSearch) {
  return new Promise((resolve, reject) => {

    let sql = squel.insert()
                   .into('searches')
                   .setFields(newSearch)
                   .set('id', uuid())
                   .toString();
    db.query(sql, err => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Delete
exports.delete = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.delete()
                   .from('searches')
                   .where('id = ?', id)
                   .toString();

    db.query(sql, (err, result) => {
      if(result.affectedRows === 0) {
        reject({error: 'Search not found.'})
      } else if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// Update
exports.update = function(id, updateObject) {
  return new Promise((resolve, reject) => {
    delete updateObject.id;

    let sql = squel.update()
                   .table('searches')
                   .setFields(updateObject)
                   .where('id = ?', id)
                   .toString();

    db.query(sql, (err, returnObject) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
