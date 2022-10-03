const content = require('./modelcontent');

const createQR =(data)=>{
   return content.create(data)
}
const getQR =()=>{
   return content.find({})
}






module.exports={createQR,getQR}