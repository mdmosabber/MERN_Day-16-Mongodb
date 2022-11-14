
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mongodb_first_practice:T9fLsdAzzCNjZFA1@cluster0.uvebecl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {

  const collection = client.db("school").collection("students");

  if(!err){
    console.log('Database Connect Success');
    insertData(collection);
  } 

});


function insertData(collection){

    let myData = [
        {name: 'Md. Mosabber', email: 'mosabber@gmail.com',phone: '01723267508'},
        {name: 'Md. Abir', email: 'abir@gmail.com',phone: '01723267509'},
        {name: 'Md. Rahim', email: 'rahim@gmail.com',phone: '01723267510'}
    ];

    collection.insertMany(myData, err => {
        if(!err){
            console.log('Data Save Successfully');
        }else{
            console.log('Data not save');
        }
    })
}