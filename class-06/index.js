const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
   const collection = client.db('school').collection('students');

   if(!err){
    console.log('Database Connect Success');
    dataFindByProjection(collection);
   }
   
});



function dataFindByProjection(collection){

    const item = {name: 'Md. Mosabber'};
    const ItemProjection = {projection:{email: 1}};

    collection.find(item,ItemProjection).limit(1).toArray((err, result)=> {
        if(!err){
            console.log(result);
        }
    })


}

