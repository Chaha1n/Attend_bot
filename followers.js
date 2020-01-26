var twitter = require('./Twitter.js')();
var fs = require('fs');

module.exports.AutoFollow = function (twitter) {
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
}
