# WEB103 Project 3 - Virtual Community Space

Submitted by: Samir Hassan

About this web app: Virtual Community Space is a web app built to showcase events happening across different locations. Using React, the app connects to a PostgreSQL database hosted on Railway, making it easy to fetch and display event details in real time. Users can explore various event locations, check out what’s happening at each spot, and enjoy unique pages dedicated to every location.

Time spent: 3 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [X] **The web app uses React to display data from the API**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [X] **NOTE: Your GIF or a screenshot added to this README must include a view of your Railway database that shows the contents of the table used by your app**
- [X] **The web app displays the title of the app**
- [X] **A visual interface allows the user to select a Location they would like to view**
- [X] **Clicking on a Location shows a list of all items from the Events table that corresponds to that Location**
- [X] **Each Location detail page should have its own unique URL**

The following **optional** features are implemented:

- [ ] An additional page shows all possible `Events` that the user can sort and filter by `Location`
- [ ] `Events` display a countdown showing the time remaining before that event and appears with different formatting when the event has passed

## How to run
1. Open two tabs on your terminal
2. Both tabs should have you starting at the root of this project repository 
3. Run "cd client" on one terminal tab and "cd server" on the other terminal tab
4. Run "npm install" to make sure you have all the necessary dependencies/packages
5. Now that you have the client and server directories open on different tabs, run "npm install" within each tab to make sure you have all the necessary dependencies for the client and the server
6. Run "npm start" on the server-side and this will get our server started on a port!
7. Run "npm run build" and then "npm run dev" on the client-side and this will get our client started on a port
8. This project has been configured such that the client is already requesting for data from to the port the server started on
9. Click on the link present in your client terminal to open your front-end
10. Enjoy your app!

## Video Walkthrough

Here's a walkthrough of implemented required features:

https://imgur.com/a/oaCbDjZ

GIF created with Kap

## Notes

- For the Events page, I couldn't find a way to properly layout all the Events in a grid. The CSS was very difficult for this one.
- I initially started this project by simply making an events and locations table and then adding my own eneity attributes and data to the tables. I later realized that the frontend expected data from these tables BUT also expected it in a certain quantity/quality. Next time, I'll analyze the frontend more and create data and have entity attributes that best fit the frontend. Since the frontend code was given to us, this is the best way to approach it and minimize the work I do later.

## License

Copyright 2024 Samir Hassan

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.