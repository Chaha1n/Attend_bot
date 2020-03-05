module.exports = function () {
    var twitter = require('twitter');
    var fs = require('fs');
    var twitter = new twitter({
        consumer_key: process.env['CONSUMER_KEY'],
        consumer_secret: process.env['CONSUMER_SECRET_KEY'],
        access_token_key: process.env['ACCESS_TOKEN_KEY'],
        access_token_secret: process.env['ACCESS_TOKEN_SECRET']
    });
    return twitter;
}
