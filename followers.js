module.exports =
    function (twitter) {
        var fs = require('fs');
        var CronJob = require("cron").CronJob
        const FollowTime = '0 0 * * * *'
        new CronJob({
            cronTime: FollowTime,
            onTick: function (twitter) {
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
                            }
                        }
                    );
                }
            },
            start: true
        })
    }
