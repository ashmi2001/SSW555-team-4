# SSW555 Agile Sprinters (Team 4)
## Project Introduction
Our objectives with this project are to create a mobile app with an easy-to-use interface, specifically targeted towards elderly consumers who would not have much experience with technology. The app would allow users to talk with our AI chat bot. Our emphasis for these conversations would be tracking how the user is feeling. 

The chat bot would ask certain questions throughout the day to gather input from the user as to how they are feeling and health related questions such as nutrition and exercise related questions. Based on this feedback the chat bot would be able to provide potential solutions, support, suggestions, motivation, and recognition to the user for their efforts. Through the feedback we get from the user, we would securely store the data and display the data in an easy to view format to track how the user has been feeling over time. This data could also be helpful to healthcare professionals working with the user.

In addition, another large factor of our application is gamification strategies to keep the user engaged and using the app. As one concern with this app would be creating something that elderly and tech adverse users would be interested and excited about using, coming back to, and providing honest information.

## Installation

To clone this repository, run the following command in your terminal. It is recommended to navigate to the directory you would like to clone the repository to before entering the command to prevent the repository from being copied to the wrong directory:

```bash
git init
git clone https://github.com/ishangarg/SSW555-team-4
```

Once the repository is downloaded, a new directory called SSW555-team-4 should appear in the directory you just created/entered. This is the directory containing the repository code. Enter into the downloaded directory:

```bash
cd SSW555-team-4
```
## Frontend Installation

Now that the repository is downloaded, enter into the frontend directory:

```bash
cd frontend
```

Our frontend service has been built using the React Native, Expo, and Typescript libraries. As a result, we must download these libraries to run the frontend. Run the following command to download the necessary libraries: 

```bash
npm i
```
This will download the necessary libraries used by the React Native Expo App.

To run the frontend, run the following command and follow the command line prompts to set up an iOS or Android simulator (if a simulator is not download you may need to install it on your machine):
```bash
npx expo start
```

## Backend Installation

The backend server is located in /server and is served by Python and MongoDB. Please install MongoDB on your machine.

After MongoDB is installed,

```bash
cd server
```

Running on virtual environment is strongly recommended.

```bash
pip install -r requirements.txt
```

This will install all the necessary libraries.

```bash
python app.py
```

This will start the development server.

## Backend Testing

```bash
python test.py
```
