const {createQR,getQR}= require('./contentservice');
const {StatusCodes}= require('http-status-codes')


const createQrController=async(req,res)=>{
    // req.body.filename
    await createQR(req.body)
    res.status(StatusCodes.CREATED).send({msg:'created'})

}

const getQrController=async(req,res)=>{
    
    res.send(await getQR())
}




module.exports={createQrController,getQrController}