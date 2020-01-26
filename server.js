var twitter = require('./Twitter.js')();
const fs = require('fs');

//メンションされた時の処理
twitter.stream('statuses/filter', { track: "@Attend_bot" }, function (stream) {
    stream.on('data', function (data) {
        var tweet = data.text;
        console.log(tweet);
        console.log(data.id_str);
        //ツイートをする
        twitter.post('statuses/update', {
            status: "Hey @" + data.user.screen_name + ", Thank you for your mention.",
            in_reply_to_status_id: data.id_str
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
//自動でフォローを返す
const params = { screen_name: 'Attend_bot', count: 50 };
console.log('@' + params.screen_name);
require('./Before.js')(twitter,params);

var followers = JSON.parse(fs.readFileSync("followers.json", "utf-8"));
console.log(followers["users"][0]["screen_name"]);
for (var i = 0; i < Object.keys(followers["users"]).length; i++) {
    var target = followers["users"][i].screen_name;
    twitter.post('friendships/create', { screen_name: target },
        (error, friendship, responce) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log(friendship);
                console.log(responce);
            }
        }
    );
}
