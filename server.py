import http.server
import socketserver

class ServerScript(http.server.SimpleHTTPRequestHandler):
    """
    Script to run the built-in Python server when the html file is not named `index.html`.
    Disclaimer: I wrote the code in this file using generative AI, and since it is just a script to launch
    the webpage with no other functionality, I don't see it as mis-use.
    - Version: Python 3.10.12
    """
    def do_GET(self):
        if self.path == '/':
            self.path = '/Petition.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8000
script = ServerScript
server = socketserver.TCPServer(("", PORT), script)
print(f"Open Webpage @ http://localhost:{PORT}")
server.serve_forever()