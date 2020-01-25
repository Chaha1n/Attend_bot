var twitter = require('twitter');
const fs = require('fs');
var twitter = new twitter({
    consumer_key: "kfiLkug9OvQIYdzv5FtS0Fgtq",
    consumer_secret: "3yr8ebzg0XzeNrykTy2Mgfb3sqtwER1abGmPTu1vYMnU317YR6",
    access_token_key: "1218145243440140288-UrQlS3DPQfOJyXmaiR2PyMo2MhQy2C",
    access_token_secret: "HbbeyXdrDzK8DSw9Hza2JAoul7SZ0WiTF4CcZzDB7mLJa"
});
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
twitter.get('followers/list', params,
    function (error, followers, responce) {
        if (error) {
            console.log(error);
        }
        else {
            fs.writeFileSync("followers.json", JSON.stringify(followers) + "\n", "utf-8");
            console.log(responce);
        }
    }
);

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
