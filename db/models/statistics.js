const db = require('../');

const Statistic = db.Model.extend({
  tableName: 'statistics',
  profile: () => {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Statistic', Statistic);
