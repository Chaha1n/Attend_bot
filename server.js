var twitter = require('twitter');
const fs = require('fs');
var twitter = new twitter(
    JSON.parse(fs.readFileSync("Token.json", "utf-8"))
);
//メンションされた時の処理
twitter.stream('statuses/filter', { track: "@Attend_bot" }, function (stream) {
    stream.on('data', function (data) {
        var tweet = data.text;
        console.log(tweet);
        console.log(data.id_str);
        //ツイートをする
        twitter.post('statuses/update', {
            status: "Hey @" + data.user.screen_name + ", Thank you for your mention.",
            in_reply_to_status_id:data.id_str
        }, (err, tweet, response) => {
            if (err) {
                return console.log(err)
            }
            else {
                return console.log(tweet)
            }
        })
    })
})