# iMagine ECommerce Website

# An e-commerce website that sells iPhones that is built using MERN stack

## Run Locally

### 1. Clone repo

### 2. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - Edit .env file in root folder to your localhost id
  - Set "MONGODB_URL=mongodb://localhost:27017"

### 3. Setup MongoDB Database

- Local MongoDB
  - Create a database called "test" locally
  - Create 3 collections - orders, products, users
  - Click on "Collection" --> "Import data"
  - Use "Import data" option to import data from the csv files in the "MongoDB" folder into these collections respectively

### 4. Run Backend

```
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

