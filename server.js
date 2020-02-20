var twitter = require('./Twitter.js')();
const fs = require('fs');

//メンションされた時の処理
require("./Mention.js")(twitter);
//フォロワーリストを取得しFollowers.jsonに書き込み
const params = { screen_name: 'Attend_bot', count: 50 };
require('./GetList.js')(twitter, params);

//毎時ちょうどにフォロバ
var CronJob = require("cron").CronJob
const FollowTime = '0 0 * * * *'
new CronJob({
    cronTime: FollowTime,
    onTick: require('./followers.js')(twitter),
    start: true
});
//平日15～18:50まで10分おきに出席呼びかけ
const PostTime = '0 * * * * *';
new CronJob({
    cronTime: PostTime,
    onTick: require('./Call.js')(twitter),
    start: true
})