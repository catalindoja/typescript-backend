import express from 'express';
import * as toolServices from '../services/toolServices';
import toNewToolEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(toolServices.getToolsWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
    const tool = toolServices.findById(Number(req.params.id));

    if (tool) {
        res.send(tool);
    } else {
        res.status(404).send('Tool not found');
    }

    /* alternative way, but take care with req & res types and error handling
    return (tool != null)
        ? res.send(tool)
        : res.status(404).send('Tool not found');
    */
});

router.post('/', (req, res) => {
    try {
        const newToolEntry = toNewToolEntry(req.body);

        const addedToolEntry = toolServices.addTool(newToolEntry);

        res.json(addedToolEntry);
    } catch (e: any) {
        res.status(400).send(e.message);
    }
});


export default router;