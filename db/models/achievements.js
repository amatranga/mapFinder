const db = require('../');

const Achievement = db.Model.extend({
  tableName: 'achievements',
  recipient: () => {
    return this.belongsTo('Profile', 'recipient_id');
  }
});

module.exports = db.model('Achievement', Achievement);
