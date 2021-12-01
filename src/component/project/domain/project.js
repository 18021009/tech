const path = require('path');
const fileSystemStorageRootDir = "D:\\techProject\\fileStorage";

class Project {
    constructor({ id, name, idUser }) {
        this.id = id;
        this.name = name;
        this.idUser = idUser;
    }

    get rootFolderId() {
        return;
    }
}

module.exports = Project;