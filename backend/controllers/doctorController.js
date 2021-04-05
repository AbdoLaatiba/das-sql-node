const mongoose = require('mongoose');
const {User} = require('../models/user');
const {Slot} = require('../models/user');
const {Schedule} = require('../models/user');


exports.createSchedule = async function(req, res){
    const id = req.params.id;
    const user = await User.findOne({_id: id});

    const schedule = new Schedule({
        date: req.body.date,
    });
    req.body.time.forEach(element => {
        const slot = Slot({
            time: element,
        })
        schedule.slots.push(slot);
    });


    user.doctor.schedule.push(schedule);

    user.save((err, data)=>{
        if (err) {
            res.status(400).json(err);
        }
        res.status(200).json(data);
    })
}