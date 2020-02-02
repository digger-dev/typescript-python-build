import * as child from 'child_process'

export var lastOutPut : string;
export var isComplete : boolean = false;

export function getOutPut() : string{
    if(isComplete == true){
        isComplete = false;
        return lastOutPut;
    }
    return "Not Complete";
}

export function runPython(path: string, file : string){
    isComplete = false;
    var _file : string[] = file.split(".");

    var command = path + ' ' + file;
    if(_file[_file.length - 1] === "py"){
        var foo: child.ChildProcess = child.exec(command, function(err, stdout, stderr){
            if(err){
                throw new Error("Error" + stdout);
            }
            
            lastOutPut = stdout;
            isComplete = true;
        })
    }
    else{
        throw new Error("Not Python File")
    }
}