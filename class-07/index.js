const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("school").collection("students");
  if(!err){
    console.log('Database Connect Success');
    dataFindByQuery(collection);
   }
});


function dataFindByQuery(collection){

    const query = { email: 'mosabber@gmail.com' };

    collection.find(query).toArray((err, result)=>{
        if(!err){
            console.log(result);
        }
    });
}