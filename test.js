const dirTree = require("directory-tree");
const fs = require('fs');
const path = require('path');
// const tree = dirTree("D:\\techProject\\fileStorage\\myapp\\src");
// console.log(JSON.stringify(tree))

// const tree = dirTree("D:\\techProject\\fileStorage", { extensions: /\node_modules$/ }, (item, PATH, stats) => {
//     console.log(item);
// });

// const tree = dirTree("D:\\techProject\\fileStorage\\myapp", { extensions: /\node_modules$/ });
// console.log(tree.children[3]);

var result = {
    path: 'D:\\techProject\\fileStorage\\myapp',
    name: 'myapp',
    children: []
};


fs.readdir("D:\\techProject\\fileStorage\\myapp", { withFileTypes: true },
    (err, files) => {
        console.log("\nCurrent directory files:");
        if (err)
            console.log(err);
        else {
            files.forEach(file => {
                if (file.name != 'node_modules') {
                    if (file.isDirectory) {
                        var temp = dirTree(path.join(result.path, file.name));
                        result.children.push(temp);
                    } else {
                        result.children.push(file);
                    }
                }
            });
            console.log(JSON.stringify(result));
        }
    });