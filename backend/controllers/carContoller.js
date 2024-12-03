const Car = require ('../models/car');

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) { 
        res.status(400).json({ error: error.message });
    }
};
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id).populate('postedBy', 'name','email');
        res.json(car);
    } catch (error) {
        res.status(4045).json({ error: "car not found"});
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        res.json({ message: "Car deleted successfully" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createCar = async (req, res) => {
    try {
    const car = await Car.create({ ...req.body, postedBy:
    req.user.userId });
    res.status(201).json(car);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
    };