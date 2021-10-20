
const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb://localhost:27017/TabHotel',
        user : 'bhyazaiez1@gmail.com',
        pass : 'azertypoiu456'
        
    }
}


exports.get = function get(env){
    return config[env] || config.default
}