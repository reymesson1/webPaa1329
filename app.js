var CronJob = require('cron').CronJob;
var fs = require('fs');

const testFolder = 'C:\\linphone';


var job = new CronJob('*/59 * * * * *', function() {
	// fs.rename('C:\\linphone\\*.mkv', 'C:\\linphone\\archive\\1.mkv', (err) => {
	// 	if (err) throw err;
	// 	console.log('source.txt was copied to destination.txt');
	// });
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
job.start();