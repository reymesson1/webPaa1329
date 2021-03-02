var CronJob = require('cron').CronJob;
var fs = require('fs');
var child_process = require('child_process');

const testFolder = 'C:\\linphone';

let extension = "";

var job = new CronJob('*/29 * * * * *', function() {

  console.log('Running 29 second');
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        if(file.substr( 0,4 ) == "2021" ){

            let logFile = file.substr(20,file.length);
            // console.log(logFile.substr(0,4));
            extension = logFile.substr(0,4);
            console.log(extension);
            if(extension=="5001"){

              var stream = fs.createWriteStream("c:/my_file.bat");
              stream.once('open', function(fd) {
                stream.write("@echo off \n");
                stream.write('runas /noprofile /user:REYMESSON.LOCAL\\administrator "%windir%\\system32\\WindowsPowerShell\\v1.0\\powershell.exe -command import-module ActiveDirectory; Unlock-ADAccount -Identity rmesson"  \n');

                stream.write("pause   \n");
                stream.end();
              });

              
            }else if(extension=="5002"){

              var stream = fs.createWriteStream("c:/my_file.bat");
              stream.once('open', function(fd) {
                stream.write("@echo off \n");
                stream.write('runas /noprofile /user:REYMESSON.LOCAL\\administrator "%windir%\\system32\\WindowsPowerShell\\v1.0\\powershell.exe -command import-module ActiveDirectory; Unlock-ADAccount -Identity jberroa"  \n');

                stream.write("pause   \n");
                stream.end();
              });

            }else if(extension=="5003"){

              var stream = fs.createWriteStream("c:/my_file.bat");
              stream.once('open', function(fd) {
                stream.write("@echo off \n");
                stream.write('runas /noprofile /user:REYMESSON.LOCAL\\administrator "%windir%\\system32\\WindowsPowerShell\\v1.0\\powershell.exe -command import-module ActiveDirectory; Unlock-ADAccount -Identity wpolanco"  \n');

                stream.write("pause   \n");
                stream.end();
              });

            
            }else if(extension=="5004"){

              var stream = fs.createWriteStream("c:/my_file.bat");
              stream.once('open', function(fd) {
                stream.write("@echo off \n");
                stream.write('runas /noprofile /user:REYMESSON.LOCAL\\administrator "%windir%\\system32\\WindowsPowerShell\\v1.0\\powershell.exe -command import-module ActiveDirectory; Unlock-ADAccount -Identity jperez"  \n');

                stream.write("pause   \n");
                stream.end();
              });


            }
            // console.log( file.substr(25,33) file.length);
            // fs.rename('C:\\linphone\\'+file, 'C:\\linphone\\archive\\'+file, (err) => {
            //     if (err) throw err;
            //     console.log('source.txt was copied to destination.txt');
            // });
            //write generate file to unlock windows account

        }
    })

});    

});
job.start();

var job2 = new CronJob('*/59 * * * * *', function() {

  // var spawn = require('child_process').spawn,
  // ls    = spawn('cmd.exe', ['/c', 'my_file.bat']);
  
  // ls.stdout.on('data', function (data) {
  // console.log('stdout: ' + data);
  // });
  
  // ls.stderr.on('data', function (data) {
  // console.log('stderr: ' + data);
  // });
  
  // ls.on('exit', function (code) {
  // console.log('child process exited with code ' + code);
  // });
  

    console.log('Running 59 second');
    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
          if(file.substr( 0,4 ) == "2021" ){

            fs.rename('C:\\linphone\\'+file, 'C:\\linphone\\archive\\'+file, (err) => {
                if (err) throw err;
                console.log('File was copied to archive');
            });

          }
        })
    });

  
});
job2.start();
