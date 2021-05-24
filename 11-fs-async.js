

const { exception } = require('console');
const {readFile,writeFile} = require('fs');

// This code is reading the reading the file for ./content/first.txt 
console.log('start');
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err);
        return
    }
    // results of file are stored on first const for later user
    const first = result

    //reading the second file
    readFile('./content/second.txt','utf8',(err,result) =>{

        //exception errror will be printented on log 
        if(err){
            console.log(err);
            return
        }
        //saved results
        const second = result;

        // for the results of reading first and second files text are to be printed on new file

        //new file is result-async.txt the file will have results of 1 and 2
        writeFile('/content/result-async.txt',
       `Here is the result :${first}, ${second}`
        ,(err,result) =>{
            
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('done with this task');
        })

    })

})

console.log('sarting next task');

