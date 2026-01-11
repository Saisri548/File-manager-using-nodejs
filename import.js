const path=require("path")
const fs=require("fs/promises")
const readline=require("readline/promises")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
async function createfile(filename,content){
if (!path.extname(filename)) filename += ".txt"
const filepath = path.join(__dirname, filename)

try{
    await fs.writeFile(filepath,content)
    console.log("File has written successfully")
}
catch(err){
    console.log("Error Creating in the file")
}

}
async function readFile(filename){

    if(!path.extname(filename)) filename+=".txt"
    try{
        const filepath=path.join(__dirname,filename)
        const data=await fs.readFile(filepath,"utf-8")
        console.log("The data is ",data)
    }
    catch(err){
        console.log("Error in creating the file")
    }

}
async function appendFile(filename,data3){
    if(!path.extname(filename)) filename+=".txt"
     const data=data3
     const filepath=path.join(__dirname,filename)
    try{
       await fs.appendFile(filepath,data3)
       console.log("File has appended sucessfully")
    }
    catch(err){
        console.log("Error in file writing")

    }
}
async function delete_file(filename){
   if (!path.extname(filename)) filename += ".txt"
const filepath = path.join(__dirname, filename)

    try{
        await fs.unlink(filepath)
        console.log("File deleted successfully")
    }
    catch(err){
        console.log("Error in file deletinf")
    }
}
async function rename(old_name,new_name){
   if (!path.extname(old_name)) old_name += ".txt"
    if (!path.extname(new_name)) new_name += ".txt"

    const oldPath = path.join(__dirname, old_name)
    const newPath = path.join(__dirname, new_name)

    try{
        await fs.rename(oldPath,newPath)
        console.log("File renamed succesfully")

    }
    catch(err){
       console.log("Error in file renaming")
    }
}
async function allfiles_list(){
    try{
        const all=await fs.readdir(__dirname)
        all.forEach(e => {
            console.log(e)
        });
    }
    catch(err){
        console.log("Error in reading files in directory")
    }

}
async function main(){
    console.log("=======File-Manager=======")
    console.log("1-CreateFile")
    console.log("2-Readfile")
    console.log("3-Append file")
    console.log("4-Delete Files") 
    console.log("5-Rename File")
    console.log("6-List of all files")
    const choice=await rl.question("Enter choice")
    switch(choice){
        case "1":
            const fname1=await rl.question("Enter filename..")
            const content=await rl.question("Enter the content")
            await createfile(fname1,content)
            break;
        case "2":
            const fname2=await rl.question("Enter filename you want to read")
            await readFile(fname2)
            break; 
        case "3" :
            const fname3=await rl.question("Enter file where you want to perform append operation")
            const content_A=await rl.question("Enter contet you want to append")
            await appendFile(fname3,content_A)
            break;
        case "4" :
            const fname4=await rl.question("Enter file you want to delete")
            await delete_file(fname4)
            break;
        case "5" :
            const old_name=await rl.question("Enter old file name")
            const new_name=await rl.question("Enter new file")
            await rename(old_name,new_name)
            break;   
        case "6" :
            await allfiles_list()
            break;  
        default:
            console.log("Invalid Choice")     
                      
    }

}
main()