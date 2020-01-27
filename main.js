var twitter = require('./Twitter.js')();
var Cronjob = require("cron").CronJob
const FollowTime = '0 0 * * *'
const fs = require('fs');

//メンションされた時の処理
require("./Mention.js")(twitter);
//フォロワーリストを取得しFollowers.jsonに書き込み
const params = { screen_name: 'Attend_bot', count: 50 };
require('./GetList.js')(twitter,params);

//毎日毎時ちょうどに自動でフォローバック
new Cronjob({
    cronTime:FollowTime,
    onTick: require('./followers.js').AutoFollow(twitter),
    start:true
})
