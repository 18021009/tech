const controller = require('./controller');
const validates = require('./validates');

module.exports = (app) => {
    const router = express.Router();
    router.post('/', validates.postValidate, controller.createProject);
    router.get('/:id', controller.getProject);
    router.put('/:id', validates.putValidate, controller.updateProject);
    router.delete('/:id', controller.deleteProject);
    app.use('/project', router);
}