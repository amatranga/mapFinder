const db = require('../');

const Auth = db.Model.extend({
  tableName: 'auths',
  profiles: () => {
    return this.belongsTo('Profile')
  }
});

module.exports = db.model('Auth', Auth);
