import permitedCharacters from "./utils/permitedCharacters.js"

async function handle(){
    let characteres = []
    characteres = await permitedCharacters()
    let password = ""
    let password_length = process.env.PASSWORD_LENGTH
    for(let i=0;i<password_length;i++){
        let index = Math.floor(Math.random()*characteres.length)
        password+=characteres[index]
    }
    return password
}

export default handle