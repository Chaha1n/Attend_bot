var twitter = require('./Twitter.js')();
const fs = require('fs');

//メンションされた時の処理
require("./Mention.js")(twitter);
//フォロワーリストを取得しFollowers.jsonに書き込み
const params = { screen_name: 'Attend_bot', count: 50 };
require('./GetList.js')(twitter,params);

//毎日毎時ちょうどに自動でフォローバック
require('./followers.js')(twitter);
//平日15～18:50まで10分おきに出席呼びかけ
require('./Force.js')(twitter);
