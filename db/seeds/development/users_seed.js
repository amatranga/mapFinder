const models = require('../../models');

exports.seed = (knex, Promise) => {
  return models.Profile.where({ email: 'admin@domain.com' }).fetch()
  .then((profile) => {
    if (profile) {
      throw profile;
    }
    return models.Profile.forge({
      first: 'System',
      last: 'Admin',
      display: 'SuperUser',
      email: 'admin@domain.com',
      country: 'USA'
    }).save();
  })
  .error(err => {
    console.error('ERROR: failed to create profile');
    throw err;
  })
  .then((profile) => {
    return models.Auth.forge({
      type: 'google',
      oauth_id: '000001',
      profile_id: profile.get('id')
    }).save();
  })
  .error(err => {
    console.error('ERROR: failed to create auth');
  })
  .catch(() => {
    console.log('WARNING: default user alreay exists');
  });
};
