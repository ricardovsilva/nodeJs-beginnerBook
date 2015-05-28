var http = require("http");
var url = require("url");

function start(route, handle) {
	function onRequest(request, response) {
		var postData = "";
		
		var pathname = url.parse(request.url).pathname;
		console.log("Requisition received for " + pathname + ".");
		
		request.setEncoding("utf8");
		
		request.on("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Receiving part of data from POST '" + postDataChunk + "'.");
		});
		
		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server started");
}

exports.start = start;