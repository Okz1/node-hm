import { Router } from 'express';
import { GroupService } from '../../services/group-service';

export const groupRouter: Router = Router();
const groupService: GroupService = new GroupService();

groupRouter.get('/all', async (req, res) => {
    try {
        const groups  =  await groupService.getAllGroup();
        res.status(200).send(groups);
    } catch (e) {
        res.status(500).send(e);
    }
});

groupRouter.get('/:id', async (req, res) => {
    const groupID = req.params.id;

    try {
        const groups  =  await groupService.getGroupById(groupID);
        res.status(200).send(groups);
    } catch (e) {
        res.status(500).send(e);
    }
});

groupRouter.post('/', async (req, res) => {
    try {
        await groupService.createGroup(req.body);
        res.status(201).send(req.body);
    } catch (e) {
        res.status(500).send(e);
    }
});

groupRouter.put('/:id', async (req, res) => {
    const groupID = req.params.id;

    try {
        await groupService.updateGroup(groupID, req.body);
        res.status(201).send(req.body);
    } catch (e) {
        res.status(500).send(e);
    }
});

groupRouter.delete('/:id', async (req, res) => {
    const groupID = req.params.id;

    try {
        await groupService.deleteGroup(groupID);
        res.status(201).send('Group was deleted');
    } catch (e) {
        res.status(500).send(e);
    }
});
