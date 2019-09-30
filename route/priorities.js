const express = require('express');
const router = express.Router();
const Proirity = require('../model/priority');

router.get('/', (req,res)=>{
    Proirity.find()
    .then(priorities=>res.json(priorities))
    .catch(err=>{
        res.status(404).json({success:false})
        console.log(err.message)
    })
})

router.post('/',(req,res)=>{
    const newPriority = new Proirity({
        name:req.body.name
    })
    newPriority.save()
    .then(()=>res.json(newPriority))
    .catch(err=>res.status(404).json({success:false}))
})

router.get('/:id',(req,res)=>{
    Proirity.findById(req.params.id)
    .then((priority)=>res.send(priority))
    .catch(err => res.status(404).json({success:false}))
 });

router.put('/:id',(req,res)=>{
    // Proirity.findByIdAndUpdate(req.params.id,req.body,{new:true})
    // .then((editPriority)=>res.status(200).send(editPriority))
    // .catch((err)=>res.status(500).send(err))
    
    Proirity.findById(req.params.id)
     .then((priorityObj)=>{
        priorityObj.name=req.body.name
        priorityObj.save()
        .then(()=>res.send(priorityObj))
        .catch(err=> res.status(500).json({success:false}))
     })
 })

router.delete('/:id',(req,res)=>{
    // Priority.findByIdAndRemove(req.params.id)
    // .then((priorityObj)=> res.status(200).send(priorityObj))
    // .catch(err=>res.status(500).send(err));
    
    Proirity.findById(req.params.id)
     .then((priorityObj)=>{
        priorityObj.remove()
        .then(()=>res.send(priorityObj))
        .catch(err=> res.status(500).json({success:false}))
     })
})

module.exports = router;