const services = require('./services');
const Project = require('./domain/project');
const Folder = require('./domain/folder');

exports.createProject = async function(req, res) {
    const account = await services.getAccount(req.body.accountId);
    const project = new Project(req.body.projectName, account.id);
    await services.isProjectExisted(project);
    await services.storageFolderInFileSystem(folder);
    const folder = new Folder({ path: project.rootPath, idProject: (await services.getProject({ name: project.name })).id });
    services.storageFolderInFileSystem(folder);
    services.storageFolderInDb(folder);
    services.storageProjectIndb(project);
}

exports.getProject = async function(req, res) {
    const project = await services.getProject({ id: req.body.projectId });
    const listFolder = await services.getAllFolder({ path: project.rootPath });
    for (var folder in listFolder) {
        folder.type = 'folder';
    }
    const listFile = await services.getAllFile({ path: project.rootPath });
    for (var file in listFile) {
        file.type = 'file';
    }
    return res.json({ project: project.name, listFolder, listFile });
}

exports.getProject = async function(req, res) {

}