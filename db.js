// mongo client
// this allows us to connect to the db
const { MongoClient, MongoServerError } = require('mongodb');

let uri = 'mongodb+srv://dienttran7:9BBD99QLFYPfFcle@cluster0.2stpi1h.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri);

// checks and the pings a connection to the database
const checkConnection = async function() {
    try {
        await client.connect();

        await client.db("admin").command({ping: 1});
        console.log("Connected to DB!");
    } finally {
        await client.close();
    }
}

// checkConnection();

// creates a new movie list in the db
const writeList = async function(obj) {
    try {
        await client.connect();

        const myDB = await client.db("movieDB");
        const mycollection = myDB.collection("Movie Lists");

        const listInfo = {
            "id": obj.id,
            "name": obj.name,
            "description": obj.description,
            "iso_639_1": obj.iso_639_1,
            "public": obj.public,
            "movie_list": obj.movie_list
        }

        await mycollection.insertOne(listInfo).then((trueOrFalse) => {
            if(trueOrFalse.acknowledged == false) {
                console.log("Error, could not add to database");
            }
            else {
                console.log("Successfully added to the database!");
                return listInfo.id;
            }
        });
    } catch(error) {
        if (error instanceof MongoServerError) {
            console.log(`Error ${error}`);
        }
        throw error;
    } finally {
        await client.close();
    }
}

// writeList({
//     "id": 8006969,
//     "name": "movie_title_tester",
//     "description": "File",
//     "iso_639_1": "en",
//     "public": true,
//     "movie_list": []
// });

// reads a existing list from the db
const readList = async function(objID) {
    try {
        await client.connect();

        const myDB = await client.db("movieDB");
        const myCollection = myDB.collection("Movie Lists");

        const getID = {id : parseInt(objID)}

        var my_array = await myCollection.find(getID).toArray();
        if(my_array.length === 0)
            console.log("That ID does not exist!");
        else {
            my_array.forEach((doc) => console.log(doc));
            return my_array;
        }
    } catch(error) {
        if (error instanceof MongoServerError) {
            console.log(`Error ${error}`);
        }
        throw error;
    } finally {
        await client.close();
    }
}

// readList(8333000);

// finds a exisiting id and adds to it
const addToList = async function(objID, obj) {
    try {
        await client.connect();
        const myDB = await client.db("movieDB");
        const myCollection = myDB.collection("Movie Lists");

        const items = {
            "movie_title": obj.movie_title,
            "media_type": obj.media_type,
            "media_id": obj.media_id
        }

        const getID = {id : parseInt(objID)};
        const result = await myCollection.updateOne(getID, {$push: {movie_list: items
        }}).then((trueOrFalse) => {
            if(trueOrFalse.acknowledged == false)
                console.log("Error could not add to that list!")
            else
                console.log("Added that to the list!")
        });
    } catch(error) {
        if (error instanceof MongoServerError) {
            console.log(`Error ${error}`);
        }
        throw error;
    } finally {
        await client.close();
    }
}

// addToList(8006969, {
//     "movie_title": "Regular Show",
//     "media_type": "tv",
//     "media_id": 100
// })

// finds a existing list and deletes from it
const deleteFromList = async function (objID, obj) {
    try {

        await client.connect();
        const myDB = await client.db("movieDB");
        const myCollection = myDB.collection("Movie Lists");
        
        const items = {
            "media_id": obj.media_id
        }
        const getID = {id : parseInt(objID)};

        const filter = getID
        const update = {
            $pull: {
                movie_list: {
                    media_id: obj.media_id
                }
            }
        }

        const result = await myCollection.updateOne(filter, update);
        console.log(`Successfully deleted record`);

    } catch(error) {
        if (error instanceof MongoServerError) {
            console.log(`Error ${error}`);
        }
        throw error;
    } finally {
        await client.close();
    }
}

// deleteFromList(8006969, {
//     "media_id": "557"
// })

// exports functions to allow usage in movieserver.js
module.exports ={client, writeList, readList, addToList, deleteFromList};