const ContentRoute = require('express').Router()
const {createQrController,getQrController}= require('./contentController');
const multer = require('../middleware/multer')
ContentRoute.route('').post(createQrController,multer.single('file'))
ContentRoute.route('/affiche').get(getQrController,multer.single('file'))
module.exports=ContentRoute