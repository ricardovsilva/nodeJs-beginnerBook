function route(handle, pathname, response, request) {
	console.log("Nearly to route a requisition for " + pathname);
	
	if(typeof handle[pathname] == 'function') {
		handle[pathname](response, request);
	} else {
		console.log("No manager was found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;