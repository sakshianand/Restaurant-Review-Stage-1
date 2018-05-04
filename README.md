# Restaurant Review Stage 1

- Responsive web app which can be viewed on different devices of variable screen sizes
- Web App meets the accessability standards so that it is convinient to use by variety of users(Keyboard Users or users who use screen readers)
- Web App also has a Service Worker to begin the process of creating seamless offline-first experience for the users.(The webdata is cached so that it can be viewed even if user is not connected to the internet)


## How to Run the Project (Method 1)
- Clone the repository
- Run `npm install`
- Open command prompt and run `gulp`
- The website will automatically get opened at `http://localhost:3000/`

## How to Run the Project(Method 2)
- Clone the repository
- Install Python if you currently dont have it on your system from here [website](https://www.python.org/)
- Run `python -V` to check the current version of Python
- If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 3000 
  For Python 3.x, you can use python3 -m http.server 3000
- Run `http://localhost:3000/` to launch the website.

** Note : We can change the port by changing port in dbhelper.js(line 11) **

## Technologies Used 
- HTML5
- CSS3
- Web Accessability tools like usage of ARIA,TabIndex etc
- JavaScript
- Service Worker
