const Pizza = require('../models/pizza.model');


exports.pizza_details = function (req, res) {
    Pizza.findById(req.params.id, function (err, pizza) {
        if (err) return err;
        res.send(pizza);
    })
};

exports.pizza_create = function (req, res) {
    let pizza = new Pizza(
        {
            name: req.body.name,
            price: req.body.price
        }
    );
    pizza.save(function (err) {
        if (err) {
            return err;
        }
        res.send('Pizza Created successfully')
    })
};

exports.pizza_update = function (req, res) {
    Pizza.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, pizza) {
        if (err) return err;
        res.send('Pizza updated.');
    });
};

exports.pizza_delete = function (req, res) {
    Pizza.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Deleted successfully!');
    })
};
