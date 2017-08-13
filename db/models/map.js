const db = require('../');

const Map = db.Model.extend({
  tableName: 'maps',
  user: () => {
    return this.belongsTo('Profile', 'user_id');
  }
});

module.exports = db.model('Map', Map);
