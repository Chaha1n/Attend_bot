module.exports = function (twitter) {
    var date = new Date();
    var CronJob = require('cron').CronJob;
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getUTCHours() + 9;
    var minute = date.getUTCMinutes();

    twitter.post('statuses/update', {
        status: month + "月" + day + "日、ただいまの時刻は" + hour + "時" + minute + "分です。 コンピュータ部のみなさん、出席してみませんか？"
    }, (err, tweet, response) => {
        if (err) {
            return console.log(err);
        }
    })
}