import * as child from 'child_process'

export function runPython(path: string, file : string){
    var _file : string[] = file.split(".");

    var command = path + ' ' + file;

    if(_file[_file.length - 1] === "py"){
        var foo: child.ChildProcess = child.exec(command, function(err, stdout, stderr){
            console.log(stdout) 
        })
    }
    else{
        throw new Error("Not Python File")
    }
}