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
//フォロワーリストの取得
const params = { screen_name: 'Attend_bot', count: 50 };
console.log('@' + params.screen_name);
require('./Before.js')(twitter,params);

//自動でフォローバック
require('./followers.js').AutoFollow(twitter);