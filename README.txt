This is a very barebones skeleton template for Sudo webhooks.

BASIC USAGE INSTRUCTIONS
1. Edit the URLs defined in line 11 and 44 of routes/index.js to your desired webhook(s).
2. Add the default endpoints (see below) to their respective places in Sudo settings. RR Chat webhook does currently work for Tot!chat.
3. Open your terminal in the root folder and execute 'npm i' or 'npm install' to download the packages from the package.json
4. Start the webserver via 'npm run start', which will open it on port 3000.

DEFAULT ENDPOINTS
http://localhost:3000/log (Sudo logs)
http://localhost:3000/chat (RR chat, Tot!chat, future Sudo chats)
(Of course, adjust these to the proper URLs if using other hosting options. Localhost is not accessible outside of the machine it's hosted on. Localhost will work fine if you are running the server on the same machine however)

CUSTOMISING THIS TEMPLATE
All the code you need is defined in the routes/index.js file.
Lines 8 and 41 contain the actual message sent. You can adjust these as you see fit using the parameters defined in lines 6 and 39 respectively.

The query parameters defined in lines 6 and 39 are up to date as of Sept 8 2022. Consult with mod documentation if these need to be updated. In case it does, you can remove or add it in the aforementioned line(s).