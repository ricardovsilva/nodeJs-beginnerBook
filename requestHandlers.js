var exec = require("child_process").exec;

function start(response) {
	console.log("'Start' requisition manager was invoked.");
	
	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8 />' +
		'</head>' +
		'<body>' +
		'<form action="/upload" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="submit" value="Send text" />' +
		'</form>' +
		'</body>' +
		'</html>';
		
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write(body);
		response.end();
}

function upload(response) {
	console.log("'Upload' requisition manager was invoked.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;