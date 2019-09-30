const mongoose = require('mongoose');
 module.exports = {
     getConnection : function (){
      mongoose.connect('mongodb://localhost/defectdb')
      .then(()=>console.log('connected to mongoose db...'))
      .catch(err=>console.error('could not connected db...',err))
     } 
  }
 
