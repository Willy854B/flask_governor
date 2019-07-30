# Running For New York Office 
## Overview
This website is the second of three projects I'm building as a portfolio to present to prospective employers. In this project, a range of new technologies were used to create a website that showcases how all the knowledge I have gained from the second module is put together to render a more complex product.
## UX
### What is this app for?
This is a presentation app. It provides users the ability to manipulate vast amounts of data to get a graphic result. In our case, the user can easily visualize how increasing school donations will improve different factors that affect a significant number of public schools in the US.
### What does it do?
This app will allow users to change the outcome of the information they want to get by eather dragging a bar to select a specific area on a line chart, clicking inside a graphic area of a pie/bar chart, or selecting one of the choices displayed on a select menu. After that, this app will render different kind of charts that illustrates the user how each state in the US is funded and the needs it fulfils. 
### How does it work
This app uses a combination of technologies to manipulate the data available in a database, which has been previously collected from another website through a process called "Scraping", and then stored. When the user opens a specific webpage to see the data, this app waits until the data is available to load. Once it is loaded, the data is bound to the elements that help to transform the data to a visual output. These results can also transition based upon triggered events made by the user such as clicking or dragging on certain areas of the page. 
### Basic website image layout
See the project mock-ups [on Google Presentation]
(https://docs.google.com/presentation/d/1qwFfOYenlIbz5l5o46_jjPqpe4alNqUWWDT1CnoIls0/edit#slide=id.p)
## Features
### Existing Features
- **Jumbotron**

	A lightweight, flexible component for showcasing important content. I used it to display the main slogan to promote this campaign.
- **Mobile responsive design**

	This website was built to automatically adjust and adapt to any device the user is operating. It has the ability to optimize the screen size, whether it is a desktop, a laptop, a tablet, or a mobile phone.
- **Forms**

	Intuitive form design was used to create a contact form for data collection. Form validation is one of the features present in this form.

### Features Left to Implement
- **User Based Features**

	- Registration

	- Login

	- Logout

- **Database**

	Although I used a database to store the information required for the charts to render, I used an array in the form of an object as a way to hold the data entered by the user. Using a database for this task is what is normally used for a contact form to function effectively. 

## Tech Used
### Some of the tech used includes:
- **HTML**

	I used **Hypertext Markup Language** to structure and format the content of each page for this particular website.

- **CSS**

	I used **Cascading Style Sheets** to separate formatting and layout from content, and to give the website its unique look.

- **[D3.js](https://d3js.org)**

	This library was used to render our charts. It creates svg based charts, which are passed into html div blocks.

- **[Dc.js](https://dc-js.github.io/dc.js/)**

	Used to make interactive dashboards in javascript. For this project, it was used as a wrapper for D3.js, which allows us to only have to add the basic chart parameters to our code to run it.

- **[Crossfilter.js](https://square.github.io/crossfilter/)**

	This is a JavaScript plugin used to slice and dice JavaScript arrays. This allows Dc.js to manipulate the datasets that the graphs use, so they can refresh with new filtered data.

- **[Queue.js](https://www.geeksforgeeks.org/queue-data-structure/)**

	It is used as an asynchronous helper library for data ingestion involving multiple api's. For this project, it only passes the combined data for processing when the data is available.

- **Dc.css**

	Contains the styling directives for our dc charts.

- **Keen.js**
	
	Used as a dashboard template library.

- **[Bootstrap](https://getbootstrap.com/)** 

   	I used **Bootstrap** to give this project a simple, responsive layout where mobile first approach is implemented throughout the site.

- **[Mongo DB](https://www.mongodb.com)**

	NoSQL Database used to store, convert, and present our data in JSON format.

- **Flask](https://palletsprojects.com/p/flask/)**

	This is a Python based micro-framework used to serve our data from the server to our web based interface.
	
## Testing
The following tests have been executed to make sure this project functions as expected:

1. Different browsers such as Opera, internet explorer, Firefox, and Google were used to render this site on the computer. I modified the screen display to different sizes making sure that page layout, specially the menu bar, adapts to any device the user may be operating. 

2. Links were tested by clicking on each one of them, and making sure each button is coded properly and takes us to the right place.

3. To test the code locally on my computer, I made sure ```mongod``` was running. This allowed me to get the data back from the database.

4. By using the Chrome debugger, I was able to find and fix some JavaScript errors. I also turned "caching" off in chrome developer tools to avoid seeing out of date cached versions of the dashboard during development.

5. To debug through Python code, I run the debugger in Pycharm.

6. Contact form was tested as follows:

	- I supplied information that doesn't match the expected format or pattern that should be entered, which showed some error messages when I pressed the submit button. That confirms that the code is working properly.

	- I supplied information that matches the expected format or pattern that should be entered, and no error messages were shown when I pressed the submit button. This proves the code is validating the forms as it should.

	- Using Chrome's inspect tool, I traversed the DOM to obtain information about the array/object I created to hold the data entered in the forms. The browsers inspect tool allowed me to use the ```console.log()``` function to output the content that is being held in the array/object and see if the data was available. 

7. To test the final product, I logged in to Heroku, selected ```flask-governor-app```, and clicked on "Open app". This allowed me to see if all aspects of this project were working as planned.

## Contributing
### Getting the code up and running
clone this repository into the editor you normally use by typing ```git clone https://github.com/Willy854B/flask_governor```command in your terminal. To cut ties with this Github repository, type ```git remote rm origin``` in the terminal.

To run the code locally on your computer, you need to:

1. Download the opendata_projects_clean.csv file, run mongod in your Terminal/Command Prompt, and open another Terminal/Command Prompt window. 

2. Copy the csv file to the same location as the directory opened in the second terminal window and enter the following command: ```mongoimport -d donorsUSA -c projects --type csv --fileopendata_projects_clean.csv --headerline```.

3. In the governor_ny.py, set up the local database connection and collection call, so replace the database connection code with:
```
MONGODB_HOST='localhost'
MONGODB_PORT=27017
DBS_NAME='donorsUSA'
COLLECTION_NAME='projects'
```
And replace the variables in the collection call code with:
```
with MongoClient(MONGODB_HOST,MONGODB_PORT) as conn:
# Define which collection we wish to access
collection = conn[DBS_NAME][COLLECTION_NAME]
```

4. With Mongod running in command prompt, type type **localhost:500** into your browser URL window so that **def home()** gets called and the code executes and displays our newly created website.


To run this application externally on the internet, you need to:

1. Install the Heroku Toolbelt by signing up at **[https://signup.heroku.com/](https://signup.heroku.com/)**, and follow the instructions they provide.

2. Once Heroku is installed and you are logged in, create a new Heroku app by running the ```heroku create``` command in the command line.

3. Install **gunicorn** to run the HTTP server. In our case, we are using **Ubuntu** server. You can use ```pip install gunicorn```, but make sure that the virtualenv for this project is activated.

4. Add all the **dependencies** to the **requirements.txt** file by opening the terminal in Pycharm, activating virtualenv, and running the following command: ```pip freeze --local > requirements.txt```.

5. Create a **Procfile** under the governor_ny project folder and add ```web: gunicorn governor_ny:app```. If you are using Windows, you'll need to create a second Procfile called **Procfile.windows** and in there, write the following: ```web: python governor_ny.py```.

6. Run MongoDB and then in the terminal run: ```heroku local```. For Windows users run: ```heroku local -f Procfile.windows```. Create another file under the governor_ny project folder called **runtime.txt** and add ```python-2.7.11```.

7. Open the browser and head over to **127.0.0.1:5000** or **localhost:5000**. In the terminal, use ```git init``` and then ```git remote add heroku<git-url-for-your-app>```. Finally, add, commit, and push all the code.

8. Tell Heroku to start a dyno/worker by using this command: ```heroku ps:scale web=1```.

9. Install **mLab** in Heroku. This will provision a server for us to host our MongoDB on. Once installed, click on the **mLab MongoDB** link and create a new user to the DB by clicking the **Add new database user** button. Copy the command that they give you for your DB without the % symbol and paste it into your terminal or command prompt. Remember to change the **<dbuser>** and the **<dbpassword>** for the new ones.

10. Create a new collection by clicking on the Collections tab and then on the Add new collection button. Give the collection a name and import the cvs file that contains the data. In the terminal, change to the directory the file is in and run the following command: ```mongoimport -h <hostname> -d <dbname> -c <collectionname> -u <dbuser> -p <dbpassword> --file opendata_projects_clean.csv --type csv --headerline```.

11. In the governor_ny.py file, replace MONGODB_HOST, MONGODB_PORT, and DBS_NAME with:
```
MONGO_URI=os.getenv('MONGODB_URI','mongodb://localhost:27017')
DBS_NAME=os.getenv('MONGO_DB_NAME','donorsUSA')
```

Add import os to the top of the file and in the settings tab of the Heroku app click the Reveal Config Vars button. Here you can paste MONGODB_URI in as the key and the MongDB_URI you copied from mLab as its associated value, then click the add button. Then paste MONGO_DB_NAME in as a key and your database name, then click the Add button. 

12. Update the connection variable in donor_projects function, lower the limit of results to 200000, and run the following commands in the terminal:
```
git add governor_ny.py
git commit -m "Connect to MongoDB"
git push heroku master
```
Now just run the heroku open command and the website will open in the browser.

## Credits
### Content
- All the information in this website was created by me. Its fictitious content is intended to be the second part of a series of three projects.

### Media
- Photos were found using images tab in [Google Search](https://developers.google.com/search/).
- Social media link images were found and embedded into this project from [Fontaweson](https://fontawesome.com/?from=io).

### Acknowledgements
- In general, this portfolio site was created by me using the information I've learned from the **Fullstack Web Developer Program** offered by ** [Code Institute](https://codeinstitute.net)**.   