# enghacks2018
GrubIt - Made by: Arjun Mittal, Jane Illarionova, Josie Eshkenazi - Winner of the best food industry hack at EngHacks 2018

![alt text](/images/main.png)

### Inspiration
One of the most challenging things about going out with friends is actually choosing where to go; be it because of a lack of knowledge of what's available, the abundance of options, or just the matter of being equivocal, agreeing on where to go is a problem that could be made easier through tech.

### What it does
GrubIt presents the dining options in the area to each member of the group in a webapp, one at a time, allowing them to consider it, and easily swipe yes or no on whether they want to eat there or not. The first option that all friends agree on is the one you go with, and the details of the location are sent to everyone's personal devices via StdLib's SMS API. The places to choose from can be manually entered by a member of the "grub group", and additional suggestions are made by a machine learning algorithm, choosing venues based on natural language processing of Yelp reviews, and evaluating the choices against it's knowledge of the users' preferences.

### How we built it
Used Google APIs to retrieve information on nearby dining locations (maps api, reviews api), managed as json objects and passed to the user interface, where the images and names are displayed. Node.js is used to receive and display the data to the user. Yelp API used to retrieve descriptive restaurant reviews, used to train the Machine Learning model. Model built in NLTK used to preprocess the text, build, train, and evaluate the model. Model performs a classification task determining option_fit_for_user, or option_not_fit_for_user. LocalStorage database is used to track how many positive swipes a venue has gotten. StdLib SMS MessageBird is used to send a text to all members of the group once a consensus is reached.
