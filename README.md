# Create Your Petition
### Imagine having to wake up at 4 or 5 AM in the dead of winter just to prepare for class. Technically, since the sun hasn’t even risen yet, can we really call 4 AM "morning"? The frigid cold, combined with the mental fog of early hours, is an unfair battle both for students and faculty alike. No one should have to endure sub-zero temperatures just to attend an 8 AM lecture. Morning brain freeze inevitably leads to null pointer exceptions in our heads! For these reasons, we humbly request the administration to consider shifting CPTS 489 to a more humane afternoon time slot.
## Instructions for Set-up and Running this Web Application
1. Open Command Prompt as Administrator (if running on Windows)
    1. In your Windows Search, type "cmd" and run Windows Command Prompt as Administrator.
2. Change into the Correct Working Directory
    1. I want to set up a script that voids this step, but for time's sake, in your terminal, assuming you're at the root `/petition`, you'll need to type and enter `cd app` for this application to run properly.
3. Make Sure NodeJS, ExpressJS Are Installed
    1. In your system terminal, run the command `npm install`.
    2. Then again, in your system terminal, run the command `npm install express`.
    3. And finally, run the command `npm install -g nodemon`.
        - If you're using a Linux-like OS, instead run the command `sudo npm install -g nodemon`.
4. Make Sure Dependencies Are Up to Date
    1. In your system terminal, run the command `npm update`
5. Finally, Run the Server and Follow the Address URL
    1. In your system terminal, working directory in `/petition/app`, run the command `npx nodemon ./bin/www`.
    2. If you're using VSCode, a pop-up notification should appear in the bottom-right of the editor, you can click "Open in Browser" to be redirected to the webpage. Otherwise, the URL will be printed to the terminal window, should look something like `http://localhost:3000`(Port number may be different), and you can copy-paste this into your browser's address bar.
