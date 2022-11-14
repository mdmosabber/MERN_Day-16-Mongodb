
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("school").collection("students");

  if(!err){
    console.log('Database connect Successfully');
    findOneFunc(collection);
  }

});


function findOneFunc(collection){

 let search = { email: 'mosabber@gmail.com' };
//  let search = {  };
//  let search = { _id: ObjectId('636eca5302b44714c1868938')};

    collection.findOne(search,(err, result)=>{
        
       if(!err){
        console.log(result);
       }   
       else{
        console.log('Can not find');
       }    
        
    })
}