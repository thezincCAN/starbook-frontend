const { Router } = require('express');
const Story = require('../models/Story');

module.exports = Router()
.get('/:id', async (req, res) => {
    const star = await Story.getStoryById(req.params.id);
    res.json(star);
});
