import { Account, Client, ID } from 'react-native-appwrite';


export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.twhite.aora',
  projectId: '66204b91c98af083ef26',
  databaseId: '66204e483657316c95a1',
  userCollectionId: '66204e8fdadd1d7a48a2',
  videoCollectionId: '66204efb999626630d65',
  storageId: '66205162edc1a100b845'
}

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
  ;

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
}

