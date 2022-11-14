
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("school").collection("students");

    if(!err){
        console.log('Database Connect Success');
        dataDelete(collection);
    }

});


function dataDelete(collection){

    let deleteData = { _id: ObjectId('636eb5f3d28585a512495ec3')};

    collection.deleteOne(deleteData, (err)=>{
        if(!err){
            console.log("Data Delete Successfully");
        }else{
            console.log('Data not delete');
        }
    })
}