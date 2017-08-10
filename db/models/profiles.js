const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  auths: () => {
    return this.hasMany('Auth');
  },
  achievements: () => {
    return this.hasMany('user_id');
  },
  settings: () => {
    return this.hasMany('user_id');
  },
  statistics: () => {
    return this.hasMany('user_id');
  }
});

module.exports = db.model('Profile', Profile);
