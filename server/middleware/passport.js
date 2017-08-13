const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const models = require('../../db/models');

passport.serializeUser((profile, done) => {
  done(null, profile.id);
});

passport.deserializeUser((id, done) => {
  return models.Profile.where({ id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      done(null, profile.serialize());
    })
    .error(err => {
      done(err, null);l
    })
    .catch(() => {
      done(null, null, { message: 'No user found'});
    });
});

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACKURL,
  profileFields: ['id', 'emails', 'name']
},
  (token, refreshToken, profile, done) => getOrCreateOAuthProfile('facebook', profile, done))
);

passport.use('google', new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACKURL
},
  (token, refreshToken, profile, done) => getOrCreateOAuthProfile('google', profile, done))
);

const getOrCreateOAuthProfile = (type, oauthProfile, done) => {
  return models.Auths.where({ type, oauth_id: oauthProfile.id }).fetch({
    withRelated: ['profile']
  })
    .then(oauthAccount => {
      if (oauthAccount) {
        throw oauthAccount;
      }
      if (!oauthProfile.emails || !oauthProfile.emails.length) {
        //Facebook users can register a phone number, which Passport does not expect
        throw null;
      }
      return models.Profiles.where({ email: oauthProfile.emails[0].value }).fetch();
    })
    .then(profile => {
      let profileInfo = {
        first: oauthProfile.name.givenName,
        last: oauthProfile.name.familyName,
        display: oauthProfile.displayName || `${oauthProfile.name.givenName} ${oauthProfile.name.familyName}`,
        email: oauthProfile.emails[0].value
      };

      if (profile) {
        return profile.save(profileInfo, { method: 'update' });
      }
      return models.Profiles.forge(profileInfo).save();
    })
    .tap(profile => {
      return models.Auths.forge({
        type,
        profile_id: profile.get('id'),
        oauth_id: oauthProfile.id
      }).save();
    })
    .error(err => {
      done(err, null);
    })
    .catch(oauthAccount => {
      if (!oauthAccount) {
        throw oauthAccount;
      }
      return oauthAccount.related('profile');
    })
    .then(profile => {
      if (profile) {
        done(null, profile.serialize());
      }
    })
    .catch(() => {
      done(null, null, {'message': 'Signing up requires an email address, \
      please be sure there is an email address associated with your Facebook account \
      and grant access when you register.' });
    });
};

module.exports = passport;
