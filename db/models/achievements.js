const db = require('../');

const Achievement = db.Model.extend({
  tableName: 'achievements',
  user: () => {
    return this.belongsTo('Profile', 'user_id');
  }
});

module.exports = db.model('Achievement', Achievement);
