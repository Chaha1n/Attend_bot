module.exports = function (twitter, message) {
    twitter.post('statuses/update', {
        status: message + "です。出席しましょう。"
    }, (err, tweet, response) => {
        if (err) {
            return console.log(err);
        }
    })
}