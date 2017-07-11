var fs = require('fs');
var filesArray = ["1.txt", "2.txt", "3.txt", "4.txt", "5.txt"];
var fileCount = 0;

var readFile = function (fileName) {
	fs.readFile("./files_to_be_read/" + fileName, function (err, data) {
		if (err) {
			throw err;
		} else { 
			fileCount++;
			printPattern(data);
			if (fileCount <= filesArray.length-1) {
				readFile(filesArray[fileCount]);
			}
		}	
	});	
}

var printFilesFunction = function (filesArray) {
	readFile(filesArray[0]);
}

var printPattern = function (data) {
	console.log(data.toString());
	console.log(data.toString());
	console.log("=======================");
}

console.log("=======================");
printFilesFunction(filesArray);