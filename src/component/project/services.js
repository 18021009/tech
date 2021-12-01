// const fs = require('fs');
// const Project = require('./domain/project');
// const models = require('./../../models');
// const child_process = require('child_process');

// const rootDir = "D:\\techProject\\fileStorage";
// var createReactjsCommand = "npx create-react-app "

// async function storageInDb(project) {
//     await models.projects.create({
//         Name: project.name,
//         RootPath: project.rootPath,
//         AccountID: project.accountID,
//         ProjectType: project.projectType,
//     });
// }

// function storageInFileSystem(project) {
//     if (project.projectType == 'reactjs') {
//         child_process.exec(createReactjsCommand + project.name, { cwd: project.rootPath }, function(err) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('success');
//             }
//         });
//     }
// }

// function createReactProject(project) {

// }

// // const dir = path.join(__dirname, '../../../fileStorage');

// // fs.mkdir(path.join(dir, '2'), (err) => {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log("create project success");
// //     }
// // });

// // console.log(createRootPath({ accountId: 3 }));

// exports.storageInFileSystem = function({ projectName, accountId }) {
//     var rootPath = createRootPath({ accountId });
//     fs.mkdir(path.join(rootPath, projectName), (error) => {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('create project success');
//         }
//     });
// }

// // function createReactProject() {

// // }

// // storageInFileSystem({ projectName: "techProject1.0", rootPath: createRootPath({ accountId: 2 }) });

// // var projectName = "techproject";

// // child_process.exec(createReactjsCommand + projectName, { cwd: rootDir }, function(err) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log('success');
// //     }
// // });

// function buildProject() {
//     child_process.exec(buildProject)
// }



const models = require('./../../models');
const Account = require('./domain/account');

exports.getAccount = async function(id) {
    const account = await models.accounts.findOne({
        raw: true,
        where: {
            id,
        }
    });
    return new Account(account.name, account.id);
}