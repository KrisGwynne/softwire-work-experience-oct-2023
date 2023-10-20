# Softwire Work Experience - Oct 2023

## Contents
<!-- TOC -->
* [Week Schedule](#week-schedule)
* [Useful Links](#useful-links)
  * [Project Resources](#project-resources)
  * [Useful HTML/CSS/JavaScript Guides](#useful-htmlcssjavascript-guides)
* [Technical Overview](#technical-overview)
  * [Frontend](#frontend)
  * [Backend](#backend)
* [Running Locally](#running-locally)
  * [Frontend](#frontend-1)
  * [Backend](#backend-1)
* [How to Contribute Code](#how-to-contribute-code)
  * [Initial Repository Setup](#initial-repository-setup)
  * [Working on a Feature](#working-on-a-feature)
  * [Requesting a Review](#requesting-a-review)
<!-- TOC -->

## Week Schedule

| Day/Time  | Activity                                                                       |
|-----------|--------------------------------------------------------------------------------|
| Monday    |                                                                                |
| 10:00     | Arrival/tour                                                                   |
| 10:30     | Introductions and Setup                                                        |
| 11:30     | Feature specification and Trello Setup                                         |
| 12:00     | Presentation: Git and Github                                                   |
| 12:30     | Lunch break                                                                    |
| 13:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Tuesday   |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Presentation: HTML/CSS/JS                                                      |
| 11:00     | Code Development                                                               |
| 12:30     | Lunch and Learn: Design at Softwire                                            |
| 13:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Wednesday |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Presentation: HTTP Requests and Backend Development                            |
| 11:00     | Code Development                                                               |
| 12:00     | Guest presentation: BBC Sport: How to Build a Huge Website (Cameron McCormack) |
| 12:30     | Lunch break                                                                    |
| 13:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Thursday  |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Presentation: DevOps: How is our Tetris site hosted?                           |
| 11:30     | Code Development                                                               |
| 12:30     | Lunch break                                                                    |
| 14:00     | Guest presentation: Recruitment (Frances Portaluri)                            |
| 14:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Friday    |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Code Development                                                               |
| 12:30     | Lunch break                                                                    |
| 13:30     | Presentation Prep                                                              |
| 14:30     | Presentation                                                                   |
| 15:00     | Retro                                                                          |
| 16:00     | End of Day                                                                     |

## Useful Links

### Project Resources

| What                 | Why                                                          | Where                                                                                                                  |
|----------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Trello Board         | To keep track of tasks and their statuses                    | [here](https://trello.com/invite/b/jWpaIr3m/ATTI64824ad2e7e415076b98b3ae1923983d775BDC6A/work-experience-october-2023) |
| GitHub repo          | Central location for all of our code                         | [here](https://github.com/KrisGwynne/softwire-work-experience-oct-2023)                                                |
| Live site (frontend) | Where our current `main` branch code is running the frontend | https://softwire-work-experience-oct-2023.vercel.app/                                                                  |
| Live site (backend)  | Where our current `main` branch code is running the backend  | https://softwire-work-experience-oct-2023-backend.vercel.app/                                                          |

### Useful HTML/CSS/JavaScript Guides

| What                                                                 | Where                                                                                                 |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| HTML Basics                                                          | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)       |
| CSS Basics                                                           | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)        |
| CSS Flexbox Guide                                                    | [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)                                       |
| JavaScript Basics                                                    | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) |
| HTTP Request Methods (we'll probably only need GET and POST)         | [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)                                     |
| HTTP Response Codes (we'll probably only need 200, 400, 404 and 500) | [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)                                      |


## Technical Overview

The codebase has two components: frontend and backend. The `main` branch of the repository is set to run on Vercel 
(a cloud platform). I've set this all up for you so you don't need to worry about how this hosting works, but I'll 
be giving a quick overview on Wednesday to make it feel less "magic".

### Frontend

The frontend codebase contains all of the code to control what you see on the screen when you use the website. It is 
written in HTML/CSS/JavaScript.
- HTML provides the basic structure of each page
- CSS is used to control the formatting and layout of the HTML content
- JavaScript is used to control the behaviour of different elements on the page

When running (either on Vercel or locally), the files in the frontend directory are available at `<siteurl>/<filename>`. 
The `index.html` home page is also available at `<siteurl>` and all HTML files can be accessed without the `.html` 
extension (i.e. `https://softwire-work-experience-oct-2023.vercel.app/game.html` and `https://softwire-work-experience-oct-2023.vercel.app/game` will both route to the same page).

Lots of websites use frameworks or libraries rather than "Vanilla JavaScript" to put together the site (you may have 
heard of React, Angular, Vue.js or many more, for example). These provide useful in-build functionality that makes it
easier to build complex applications. In this project, we will not be using any specific library/framework in the 
frontend so that we can focus on writing code that we control rather than integrating with a specific "black box" that 
does things for us.

Larger projects also often use TypeScript (for both frontend and backend) rather than JavaScript. TypeScript is a language that builds on top of JavaScript to add some new features. For simplicity, we will be using JavaScript for this project in both the front-end and back-end code.

### Backend

The backend codebase is a web application written using Node.js/Express. This serves two main purposes:
- Redirects users to the correct frontend page when they go to its URL.
- Implements "endpoints" - code that the website running in the browser can call to get, modify or delete information stored in the backend. These will generally be accessed using the url `<siteurl>/api/<endpoint_name>`

The first of these points, redirecting to the correct page, is already set up to work in the backend - so you don't need to worry about this! I'll be explaing how it works (for interest only) on Wednesday morning.

Depending on the features that we want to add to our Tetris game, we will have to add some endpoints to the backend codebase. We can discuss these once we've decided what we want our game to do!


## Running Locally

To test your changes whilst you are developing, you will need to be able to run the website locally. This means that the
backend code is running on your own computer and you can access it in a browser without having to
deploy the app publicly over the internet.

To run and access the website locally, you can do the following, for each of the frontend and backend:

### Frontend
- Navigate to the frontend with the command `cd frontend`
  - If you are navigating from the backend then use `cd ../frontend` instead
- Make sure that all of the dependencies are installed
  - Dependencies are external pieces of software that our code relies on
  - These are defined in a `package.json`, and can be installed with the command `npm install`
- Run the app locally
  - This command has already been set up for you (in `package.json`)
  - You can run the app with `npm run dev`
- Visit the website
  - After you have run `npm run dev` you should see `"light-server is listening at http://0.0.0.0:8080"`
  - `0.0.0.0` is the address of your own computer. It is equivalent to writing: `localhost`
  - Now, for example, if you visit `http://localhost:8080/pages/index` you will see the version of the index page that would be generated by your version of the code

### Backend
- Navigate to the frontend with the command `cd backend`
  - If you are navigating from the backend then use `cd ../backend` instead
- Make sure that all of the dependencies are installed
  - Dependencies are external pieces of software that our code relies on
  - These are defined in a `package.json`, and can be installed with the command `npm install`
- Run the app locally
  - This command has already been set up for you (in `package.json`)
  - You can run the app with `npm run dev`
- Visit the website
  - After you have run `npm run dev` you should see `"Server is listening on port 3000"`
  - As above, our backend endpoints will be available at, for example, `http://localhost:3000/api/example`

## How to Contribute Code

This section will all be covered by a presentation on the first day, so don't worry about this until we've spoken about Git/GitHub! It should be a useful reminder in future though!

Git can be a bit confusing if you're using it for the first time. If you're unsure about any step, feel free to grab me and we can go over it.

### Initial Repository Setup

- Clone the repo:
    - This creates a local copy of the code that you can make changes to on your computer. You can do this with the following command line command:
    - `git clone https://github.com/KrisGwynne/softwire-work-experience-oct-2023.git`

### Working on a Feature

Try not to make changes on the `main` branch, this branch should always only contain code that has been reviewed. Development work should be done on a feature branch. However, don't worry if you accidentally work on `main`! Just let me know and I'll help you move it over to a feature branch.

- Make sure you are on the `main` branch and that it is up to date:
    - `git checkout main`
    - `git pull`
- Create a branch for your feature:
    - `git checkout -b [your-own-feature-branch-name]`
- Make some code changes
- Add your changes:
    - (if you want to check what changes you have): `git status`
    - `git add [yourFiles.example]`
    - `git commit -m "sensible message here, e.g. add a line piece to the library"`
    - You can (and probably should) do this process multiple times on your branch as you gradually add code to acheive the feature
- Push the changes to GitHub:
    - If it's the first time you have pushed this branch:
        - `git push --set-upstream origin [your-own-feature-branch-name]`
    - If you have pushed this branch before:
        - `git push`

### Requesting a Review

Once you are happy with your code, you can open GitHub in a browser and do the following:
- Navigate to the page for the repository [here](https://github.com/KrisGwynne/softwire-work-experience-oct-2023)
- Select "Pull requests" in the bar at the top
- Click the "New pull request" button
- Set the branches as follows:
    - base: `main` (this should be the default)
    - compare: `your-own-feature-branch-name`
- Click "Create pull request"
- Add a sensible title and description of your changes, then click "Create pull request"
- I will then review your changes and either make some comments or approve it:
    - If I make comments, you can make the changes on your branch locally and `git push` to update the code in GitHub
    - If I approve it, we can merge it into `main`. Wahey!
