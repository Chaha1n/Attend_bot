var twitter = require('./Twitter.js')();
var CronJob = require("cron").CronJob
const FollowTime = '0 0 * * * *'
const fs = require('fs');

//メンションされた時の処理
require("./Mention.js")(twitter);
//フォロワーリストを取得しFollowers.jsonに書き込み
const params = { screen_name: 'Attend_bot', count: 50 };
require('./GetList.js')(twitter,params);

//毎日毎時ちょうどに自動でフォローバック
new CronJob({
    cronTime:FollowTime,
    onTick: require('./followers.js').AutoFollow(twitter),
    start:true
})
//平日15～18:50まで10分おきに出席呼びかけ
require('./Force.js')(twitter);
