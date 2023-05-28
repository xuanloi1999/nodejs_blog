import mongoose from 'mongoose';

function connect() {
    mongoose
        .connect('mongodb://127.0.0.1:27017/f8_education_dev')
        .then(() => console.log('Connected!'))
        .catch(() => console.log('fail'));
}

const db = { connect };
export default db;
