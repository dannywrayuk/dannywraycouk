function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith("/") && uri.length > 1) {
    request.uri = request.uri.split(0, -2) + ".html";
  } else if (!uri.includes(".")) {
    request.uri += ".html";
  }

  return request;
}
