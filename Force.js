module.exports = function (twitter) {
    var date = new Date();
    var CronJob = require('cron').CronJob;
    const PostTime = '0 /10  6-9 * 1-5';

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getUTCHours() + 9;
    var minute = date.getUTCMinutes();

    new CronJob({
        cronTime: PostTime,
        onTick: function () {
            twitter.post('statuses/update', {
                status: month+"月 "+day+"日 "+hour+"時"+minute+"分です。出席しませんか？"
            }, (err, tweet, response) => {
                if (err) {
                    return console.log(err);
                }
            })
        },
        start:true
    })
}