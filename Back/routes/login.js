const jwtAuth = require('jwt-simple-auth');
var path = require('path');
var session = require('express-session');

// To set an access token expiration to only 10 seconds and a refresh token expiration to 60
jwtAuth.init({
    accessTokenExpirationInSeconds: 10,
    refreshTokenExpirationInSeconds: 60
});

/* response token
{
    "userID": 34,
    "admin": true,
    "iss": "urn:auth",
    "jti": "2fd6th6tqfz101",
    "exp": 1466614755,
    "iat": 1466614754
}
*/

const payload = {
    userID: 34,
    admin: true
};
jwtAuth.createToken(payload, 'access')
    .then((token) => {
        // token is now ready for use.
    });

jwtAuth.verifyToken(token, 'access')
    .then((response) => {
        // if valid, the response is decoded JWT payload, see verify token response below.
    });

jwtAuth.refreshToken(token)
    .then((newToken) => {
        // if original token was valid then a newToken is returned.
    });

let hash = jwtAuth.getTokenHash(token);

// You can use the supplied keygen.sh script to create certificates for use with jwt-auth.
// ./keygen.sh



// config ---------------------------------------

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware

app.use(express.urlencoded({ extended: false }))
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));