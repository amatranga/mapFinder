const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: () => {
    return this.hasMany('Auth');
  },
  statistics: () => {
    return this.hasOne('Statistic');
  }
});

module.exports = db.model('Profile', Profile);
