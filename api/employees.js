const express = require('express')

const router = express.Router();
const Employee = require('../models/employee');
const  bodyParser = require("body-parser");
const jsonParser = bodyParser.json()
const urlencoded = bodyParser.urlencoded({
    extended:false
});

router.use(function(req,res,next){
    console.log('Time :' ,Date.now());
    next();
})

router.use(function(req,res,next){
    console.log('eieiei');
    next();
})

router.get('/employeeAll',async (req,res) => {
    try{
        const employees = await Employee.find({});
        res.json(employees);
    }
    catch (error){
        res.status(500).json(error);
    }
});
router.post('/create',[jsonParser], async (req, res) => {
	// create employee
    // const json = JSON.stringify(req.body)
    // const obj =  JSON.parse(json)
    console.log("jsonParser");
    try{
        // const employees = await Employee.create(
        //     {
        //         name : obj.name, 
        //         salary :  obj.salary, 
        //         department_id:obj.department_id , 
        //         address : obj.address
        //     });
        // const employees = await Employee.create(req);
        const employees = new Employee(req.body);
        await employees.save();
        res.json(employees);
    }
    catch (error){
        res.status(500).json(error);
    }
});
router.post('/create',[urlencoded], async (req, res) => {
	// create employee
    // const json = JSON.stringify(req.body)
    // const obj =  JSON.parse(json)
    console.log("urlencoded");
    try{
        // const employees = await Employee.create(
        //     {
        //         name : obj.name, 
        //         salary :  obj.salary, 
        //         department_id:obj.department_id , 
        //         address : obj.address
        //     });
        // const employees = await Employee.create(req);
        const employees = new Employee(req.body);
        await employees.save();
        res.json(employees);
    }
    catch (error){
        res.status(500).json(error);
    }
});

router.put('/update/:id',jsonParser, async (req, res) => {
	// update employee
    console.log(req.body)

    try{
        // const json = JSON.stringify(req.body)
        // const obj =  JSON.parse(json)
        // const id = req.params.id;
        // console.log(id);
        // const filter = { _id: id };
        // const update =  {
        //             name : obj.name, 
        //             salary :  obj.salary, 
        //             department_id:obj.department_id , 
        //             address : obj.address
        //         };
        const employees = await Employee.findOneAndUpdate(req.params.id, req.body);
        // const employees = await Employee.find({_id : id});
        res.json(employees);
    }
    catch (error){
        res.status(500).json(error);
    }
});
router.delete('/delete/:id', async (req, res) => {
	// delete employee
    const id = req.params.id;
    try{
        const employees = await Employee.findByIdAndRemove({_id:id});
        // const employees = await Employee.find({_id : id});
        // const employees = new Employee(req.body)
   
        res.json(employees);
    }
    catch (error){
        res.status(500).json(error);
    }
});




module.exports = router;