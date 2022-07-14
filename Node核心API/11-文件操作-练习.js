let fs = require("fs");
let path = require("path");

class CreateProject{
    constructor(rootPath, projectName) {
        this.rootPath = rootPath;
        this.projectName = projectName;
        this.subFiles = ["images","css","js","index.html"];
    }
    initProject(){
        // 1.创建站点文件夹
        let projectPath = path.join(this.rootPath, this.projectName);
        fs.mkdirSync(projectPath);
        // 2.创建子文件和子目录
        this.subFiles.forEach(fileName=>{
            if(path.extname(fileName)===""){
                let dirPath = path.join(projectPath,fileName);
                fs.mkdirSync(dirPath);
            }else{
                let filePath = path.join(projectPath,fileName);
                fs.writeFileSync(filePath,"");
            }
        })
    }
}

let cp = new CreateProject(__dirname,"taobao");
cp.initProject();
