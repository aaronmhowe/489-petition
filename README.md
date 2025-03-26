# Create Your Petition
### Imagine having to wake up at 4 or 5 AM in the dead of winter just to prepare for class. Technically, since the sun hasn’t even risen yet, can we really call 4 AM "morning"? The frigid cold, combined with the mental fog of early hours, is an unfair battle both for students and faculty alike. No one should have to endure sub-zero temperatures just to attend an 8 AM lecture. Morning brain freeze inevitably leads to null pointer exceptions in our heads! For these reasons, we humbly request the administration to consider shifting CPTS 489 to a more humane afternoon time slot.
## Instructions for Set-up and Running this Web Application
### How I am running this application is constantly changing as I make progress, but at the time of this commit, it is as follows:
1. Install Python 3
    - You can download and install Python 3 from this [link](https://www.python.org/downloads/source/).
    - Windows Installation Guide:
        1. Open the downloaded installer and run it.
        2. Tick both the "Admin Privileges" and "Add Python to PATH" checkboxes.
        3. Click "Install Now" to run the Express Installation.
        4. Python should now be installed. You can verify its installation by opening your command prompt (Search 'cmd' in Windows Search), then typing and entering the command `python --version`.
    - In the event that the "Add Python to PATH" checkbox is not included in the installer, do the following:
        1. In Windows Search, search for "Environment Variables" and open it.
        2. On the window that opens, click "Environment Variables" on the bottom-right.
        3. Under "System Variables", scroll the list until you find the "Path" variable.
        4. Select the Path variable and click "Edit".
        5. In the window that opens, click "New", and in the subsequent window, add `C:\Program Files\Python+version\` and replace `+version` with the version you downloaded, this may look like `Python311` if you're using Python 3.11.
        6. Ensure the installation with `python --version` or `python3 --version` entered into your command prompt.
    - Unix/Linux Installation Guide:
        1. In your terminal, enter the following:
            - `sudo apt update && upgrade`
            - `sudo apt install python3`
        2. Verify installation by entering `python --version` or `python3 --version`
2. Run a Python's Built-in Local Web Server
    1. Python provides built-in web server hosting, typically started by entering in your terminal `python -m http.server`, but, by default the script will search for `index.html`, and since we are using a custom name for our HTML file, what results is the bare-bones web-page that shows the project directory listing.
    2. I've added a script to the root of the project: `server.py`. We will run this script instead of `python -m http.server`.
    3. In your terminal, enter the command `python server.py` and follow the localhost URL `http://localhost:8000` as it appears.