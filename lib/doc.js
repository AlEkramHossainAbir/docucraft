import fs from "fs"
import path from "path"

const postDirectory = path.join(process.cwd(), "docs")


export function getDocuments() {
    console.log("Post Directory:", postDirectory)
    const fileNames = fs.readdirSync(postDirectory)
    const allDocs = fileNames.map((fileName)=>{
        console.log("file name",fileName)
    })
}