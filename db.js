const mongoose =require('mongoose')
const mongoUri='mongodb://27017/iNotebookmongodb+srv://sidchawla2015:Sid123456@cluster0.2hcl3yq.mongodb.net/iNotebook?retryWrites=true&w=majority'



const connectToMongo=()=>{
    mongoose.connect(mongoUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
}

module.exports=connectToMongo;