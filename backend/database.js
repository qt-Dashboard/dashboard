const mongoose = require('mongoose');

const {MONGODB_HOST, MONGODB_CLUSTER, MONGODB_DATABASE} = process.env

const MONGODB_URI = `mongodb+srv://${MONGODB_HOST}${MONGODB_CLUSTER}/${MONGODB_DATABASE}`;

mongoose.set('strictQuery', false);

mongoose
.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(db => console.log(`Database is connected`))
.catch(err => console.log(err));