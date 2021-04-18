const fs = require('fs');

const directory = process.argv[2] === undefined ? './': process.argv[2];

fs.readdir(directory, (err, content) => {

    if(err){

        console.log("Err: Directory not found");

    }else{

        content.forEach(element => {
            checkIfDirectory(element);
        });

    }

});

function checkIfDirectory(element){
    fs.stat(`${directory}/${element}`, (err, stats)=>{

        if(err){

        }else{
            if(stats.isDirectory()){
                console.log(`${element}/`);
            }else{
                if(element !== 'app.js'){
                    console.log(`file: ${element}`);
                }
            }
        }
    
    })
}