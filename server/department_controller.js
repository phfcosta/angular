var express = require('express');
var router = express.Router();
var Department= require('./departments');
var Product = require('./product');
const { response } = require('express');

router.post('/', function(req,res){
    console.log(req.body);
    let d = new Department({name: req.body.name});
    d.save((err,dep) => {
        if (err)
            res.status(500).send(err);
        else 
            res.status(201).send(dep);
    });
});

router.get('/', function(req,res){
    console.log(req.body);
    Department.find().exec((err,deps) => {
        if (err)
            res.status(500).send(err);
        else 
            res.status(201).send(deps);

    });
});

router.delete('/:id',async function(req, res) {
    try{
        let id = req.params.id;
        let prods = await Product.find({departments: id}).exec();

        if(prods.length > 0){
            res.status(500).send({
                msg: 'Couldnot remove this department. You may have to fix its dependence before'
            });
        }   
        else {
            await Department.deleteOne({_id: id});
            res.status(204).send({});
        }
    }
    catch(err) {
        res.status(500).send({msg: "Internal error.", error: err});
    }
    
});

router.patch('/:id',function(req, res){
    Department.findById(req.params.id, (err, dep) => {
        if (err)
            res.status(500).send(err);
        else if (!dep)
            response.status(404).send({});
        else{
            dep.name = req.body.name;
            dep.save()
                .then((d) => res.status(200).send(d))
                .catch((e) => res.status(500).send(e));
        }   

    })
});

module.exports = router;
