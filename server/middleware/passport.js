const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
    .error(error => {
      done(error, null);
    })
    .catch(() => {
      done(null, null, { message: 'No user found' });
    });
});

passport.use('google', new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACKURL
},
  (accessToken, refreshToken, profile, done) => getOrCreateOAuthProfile('google', profile, done))
);

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACKURL,
  profileFields: ['id', 'emails', 'name']
},
  (accessToken, refreshToken, profile, done) => getOrCreateOAuthProfile('facebook', profile, done))
);

const getOrCreateOAuthProfile = (type, oauthProfile, done) => {
  return models.Auth.where({ type, oauth_id: oauthProfile.id }).fetch({
    withRelated: ['profile']
  })
    .then(oauthAccount => {
      if (oauthAccount) {
        throw oauthAccount;
      }
      if (!oauthProfile.emails || !oauthProfile.emails.length) {
        // FB users can register with a phone number, which is not exposed by Passport
        throw null;
      }
      return models.Profile.where({ email: oauthProfile.emails[0].value }).fetch();
    })
    .then(profile => {
      let profileInfo = {
        first: oauthProfile.name.givenName,
        last: oauthProfile.name.familyName,
        display: oauthProfile.displayName || `${oauthProfile.name.givenName} ${oauthProfile.name.familyName}`,
        email: oauthProfile.emails[0].value
      };
      if (profile) {
        //update profile with info from oauth
        return profile.save(profileInfo, { method: 'update' });
      }
      // otherwise create new profile
      return models.Profile.forge(profileInfo).save();
    })
    .tap(profile => {
      return models.Auth.forge({
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
      done(null, null, {
        'message': 'Signing up requires an email address, \
          please be sure there is an email address associated with your Facebook account \
          and grant access when you register.' });
    });
};

module.exports = passport;
