 # Create a MongoDB Atlas Account
 ## Go to MongoDB Atlas and sign up for a free account.
## Create a New Cluster
- Click "Build a Cluster" and select the free tier.
- Choose your cloud provider and region, then click "Create Cluster."
## Configure Database Access
- Go to the "Database Access" tab.
- Click "Add New Database User."
- Create a username and password, then click "Add User."
## Whitelist Your IP Address
- Go to the "Network Access" tab.
- Click "Add IP Address."
- Add the current IP address or allow access from anywhere (0.0.0.0/0).
## Get the Connection String
- Go to the "Clusters" tab.
- Click "Connect" for the cluster.
- Choose "Connect Your Application."
- Copy the connection string.
# Update Your Application's Configuration
- Open config.js in the project.
- Replace mongoURI with the connection string from MongoDB Atlas, replacing <username> and <password> with the MongoDB Atlas credentials.

