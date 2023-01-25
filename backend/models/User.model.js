const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: 'user',
        require: true,
    },
    img: {
        type: String,
    },
    uniqueString: {
        type: String,
        default: '',
        require: true,
    },
}, {
    timestamps: true,
},
);

userSchema.pre('save', async function() {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10)
    }
});

module.exports = mongoose.model('User', userSchema);