const {execSync} = require('child_process');
try{
    const result = execSync('du -sh "/c/Users/Tanya/Desktop/Course/FileExplorerProject"').toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}