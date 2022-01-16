#!/usr/bin/env node

let fs = require("fs");
let path = require("path");
const { exit } = require("process");

let input = process.argv.slice(2);
// console.log(input);


let n,b,s;
for(let i=0; i<input.length; i++)
{
    if(input[i] == '-b')
    {
        b = 1;
    }
    
    if(input[i] == '-n')
    {
        n = 1;
    }
    
    if(input[i] == '-s')
    {
        s = 1;
    }
    
    if(n == 1 && b == 1)
    {
        console.log("n and b both can't be present");
        exit();
    }
}


for(let i=0; i<input.length; i++)
{   
    

    let doesExist = fs.existsSync(input[i]);
    if(doesExist)
    {
        if(n == 1 && s == 1)
        {
            wcatHelpersn(input[i]);
        }
        else if(b == 1 && s == 1)
        {
            wcatHelpersb(input[i]);
        }
        else if(n == 1)
        {
            wcatHelpern(input[i]);
        }
        else if(s == 1)
        {
            wcatHelpers(input[i]);
        }
        else if(b == 1)
        {
            wcatHelperb(input[i]);
        }
        else
        {
            wcatHelper(input[i]);
        }

    }
    else if(input[i] != '-s' && input[i] != '-b' && input[i] != '-n'){
        console.log("File does not exist");
        exit();
    }
}



function wcatHelper(fileName)
{
    let content = fs.readFileSync(fileName, 'utf8');
    console.log(content);
}

function wcatHelpern(fileName)
{
    let content = fs.readFileSync(fileName, 'utf8');

    let x = content.split("\n");

    let ct=1;
    for(let i=0; i<x.length; i++)
    {
        console.log(ct, " ",x[i]);
        ct++;
    }
}


function wcatHelperb(fileName)
{
    let content = fs.readFileSync(fileName, 'utf8');

    let x = content.split("\n");
    let ct=1;
    for(let i=0; i<x.length; i++)
    {
        if(x[i] != "\n" && x[i] != "\r")
        {
            console.log(ct, " ", x[i]);
            ct++;
        }
        else{
            console.log(x[i]);
        }
    }
}


function wcatHelpers(fileName)
{
    let content = fs.readFileSync(fileName, 'utf8');

    let x = content.split("\r\n");

    let ct=0;
    for(let i=0; i<x.length; i++)
    {
        if(x[i] != "")
        {
            if(ct>0)
            {
                console.log("");
                ct=0;
            }
            console.log(x[i]);
        }
        else{
            ct++;
        }
    }
}




function wcatHelpersb(fileName)
{

    let content = fs.readFileSync(fileName, 'utf8');

    let x = content.split("\r\n");

    let newArr = [];
    let ct=0;
    for(let i=0; i<x.length; i++)
    {
        if(x[i] != "")
        {
            if(ct>0)
            {
                newArr.push("");
                ct=0;
            }
            newArr.push(x[i]);
        }
        else{
            ct++;
        }
    }

    ct=1;
    for(let i=0; i<newArr.length; i++)
    {
        if(newArr[i] != "\n" && newArr[i] != "\r" && newArr[i] != "")
        {
            console.log(ct, " ", newArr[i]);
            ct++;
        }
        else{
            console.log(newArr[i]);
        }
    }
}


function wcatHelpersn(fileName)
{
    let content = fs.readFileSync(fileName, 'utf8');

    let x = content.split("\r\n");

    let newArr = [];
    let ct=0;
    for(let i=0; i<x.length; i++)
    {
        if(x[i] != "")
        {
            if(ct>0)
            {
                newArr.push("");
                ct=0;
            }
            newArr.push(x[i]);
        }
        else{
            ct++;
        }
    }

    ct=1;
    for(let i=0; i<newArr.length; i++)
    {
        console.log(ct, " ", newArr[i]);
        ct++;
    }
}