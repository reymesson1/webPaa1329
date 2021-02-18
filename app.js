var AWS = require('aws-sdk');
var CronJob = require('cron').CronJob;
var fs = require('fs');

var accessKeyId =  process.env.AWS_ACCESS_KEY || "AKIAVEA54VIIDJHJSINO";
var secretAccessKey = process.env.AWS_SECRET_KEY || "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";

AWS.config.update({
	accessKeyId: accessKeyId,
	secretAccessKey: secretAccessKey
});

var s3 = new AWS.S3();


const testFolder = 'C:\\linphone';




var job = new CronJob('*/30 * * * * *', function() {

	fs.readdir(testFolder, (err, files) => {
		files.forEach(file => {
			if(file.substr( 0,4 ) == "2021" ){

				console.log(file);

				// fs.rename('C:\\linphone\\'+file, 'C:\\linphone\\archive\\'+file, (err) => {
				// 	if (err) throw err;
				// 	console.log('source.txt was copied to destination.txt');
				// });

				var params = {
					Bucket: 'linphone',
					Key: file,
					Body: "Hello"
				};
		
				s3.putObject(params, function (perr, pres) {
					if (perr) {
						console.log("Error uploading data: ", perr);
					} else {
						console.log("Successfully uploaded data to myBucket/myKey");
					}
				});


			}
		});
	  });
	  fs
	//   console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
job.start();

var job2 = new CronJob('*/59 * * * * *', function() {

	fs.readdir(testFolder, (err, files) => {
		files.forEach(file => {
			if(file.substr( 0,4 ) == "2021" ){

				console.log(file);

				fs.rename('C:\\linphone\\'+file, 'C:\\linphone\\archive\\'+file, (err) => {
					if (err) throw err;
					console.log('source.txt was copied to destination.txt');
				});


			}
		});
	  });
	  fs
	//   console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
job2.start();