function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri !== "/")
    if (uri.endsWith("/")) {
      request.uri = uri.slice(0, -1) + ".html";
    } else if (!uri.includes(".")) {
      request.uri += ".html";
    }

  return request;
}
