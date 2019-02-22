const express = require('express');
const router = express.Router();
const pizza_controller = require('../controllers/pizza.controller');

router.get('/:id', pizza_controller.pizza_details);
router.post('/create', pizza_controller.pizza_create);
router.put('/:id/update', pizza_controller.pizza_update);
router.delete('/:id/delete', pizza_controller.pizza_delete);

module.exports = router;