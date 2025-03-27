# Create Your Petition
### Imagine having to wake up at 4 or 5 AM in the dead of winter just to prepare for class. Technically, since the sun hasn’t even risen yet, can we really call 4 AM "morning"? The frigid cold, combined with the mental fog of early hours, is an unfair battle both for students and faculty alike. No one should have to endure sub-zero temperatures just to attend an 8 AM lecture. Morning brain freeze inevitably leads to null pointer exceptions in our heads! For these reasons, we humbly request the administration to consider shifting CPTS 489 to a more humane afternoon time slot.
## Instructions for Set-up and Running this Web Application
Pre-Requisites (Windows)
1. Install NodeJS via Terminal
    1. Install FNM Node Package Manager with `winget install Schniz.fnm`.
    2. Install Node with `fnm install 22`.
2. Install SQLite
    1. Download precompiled binaries (here)[https://www.sqlite.org/download.html].
    2. Extract the downloaded files to their own folder.
    3. Add the folder to your PATH environment variables.
        1. Windows Search -> "Environment Variables"
        2. Click "Environment Variables" at the bottom-right.
        3. Under "User variables for \[user\]", double-click "Path".
        4. Click "New" and type out `C:\sqlite` or replace `\sqlite` with whatever you named the folder where you extracted the files.
        5. Click "Ok" and exit.

Pre-Requisites (Linux)
1. Install Node with `sudo apt install nodejs npm`.
    - Before ever installing anything on Linux, run `sudo apt update`, followed by `sudo apt upgrade`.
2. Install SQLite with `sudo apt install sqlite3`.

Pre-Requisites (MacOS)
1. Install NodeJS
    1. Install Homebrew with `/bin/bash -C "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
    2. Install Node with `brew install node`.
2. Install SQLite with `brew install sqlite3`

Set-up and Execution (Windows Users)
1. Open a Terminal Application
    1. In Windows Search, search for either Command Prompt, Powershell, or Git Bash.
    2. Be sure to select the option to "Run as Administrator".
2. Clone the Application
    1. Change your working directory into whichever folder you prefer.
        - I recommend a folder dedicated to projects stored in your user directory, but it doesn't really matter.
    2. Type and enter `git clone [HTTPS-URL]`.
        - Replace `[HTTPS-URL]` with the link generated on the repository page under `<> Code` -> `HTTPS`.
    3. Alternatively, you can simply download the zip folder found on the repository page under `<> Code`.
        - This approach just means you cannot contribute, which is fine if you're just testing the application out.
2. Execute the Batch Script
    1. I've added a batch script `start.bat` at the root of the project directory `\petition`.
    2. The application can be launched by entering `start.bat` in your terminal.
        - Dependencies for NodeJS and ExpressJS should be installed automatically by executing this script, but in the event the script doesn't work, see the alternate instructions section below.

Set-up and Execution (Linux/MacOS Users)
1. From Terminal, Clone the Application
    1. Change your working directory into whichever folder you prefer.
        - I recommend a folder dedicated to projects stored in your user directory, but it doesn't really matter.
    2. For MacOS users, type and enter `git clone [HTTPS-URL]`.
        - Replace `[HTTPS-URL]` with the link generated on the repository page under `<> Code` -> `HTTPS`.
    3. For Linux users, you'll need to set up an SSH key to clone this repository, but that is an incredibly lengthy process just to test out this application a couple times, so just go to step 4.
    4. Alternatively, both Linux and MacOS users can just download the zip folder found on the repository page under `<> Code`, just make sure to move it into your preferred location in your file system.
        - You can move folders via terminal commands with `mv <folder-name> /home/user/folder`.
        - I created a cheat sheet for Unix terminal commands, I uploaded it to its own repository on my Github that can be referenced by anyone at any time.
2. Execute the Shell Script
    1. I've added a shell script `start.sh` at the root of the project directory `/petition`.
    2. The application can be launched by entering `./start.sh` in your terminal.
        - Dependencies for NodeJS and ExpressJS should be installed automatically by executing this script, but in the event the script doesn't work, see the alternate instructions section below.
## Alternate Instructions for Set-up and Running (if the execution scripts fail)
- It is essential to complete the pre-requisite sections if you have not already done so.

Windows Users
1. Clone the Application
    - See main Set-up and Execution section.
2. Install Dependencies via Terminal
    1. With the `\app` folder as your working directory of the project `\petition`, run the following commands:
        - `npm install`
        - `npm install -D nodemon`
3. Execute the Application with Nodemon
    1. Execute `npx nodemon ./bin/www`.
        - Note: This command will not work unless `\app` is your working directory (`cd app` from `\petition`).
        
Linux/MacOS Users
1. Clone the Application
    - See main Set-up and Execution section.
2. Install Dependencies
    - Same process as Windows but remember to use `/` instead `\` when navigating directories from the terminal.
3. Execute the Application with Nodemon
    - Same process as Windows.