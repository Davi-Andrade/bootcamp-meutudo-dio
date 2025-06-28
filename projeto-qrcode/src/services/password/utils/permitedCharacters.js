async function permitedCharacters(){
    let characteres = []
    if(process.env.UPPERCASE_LETTERS == "true")
        characteres.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if(process.env.LOWERCASE_LETTERS == "true")
        characteres.push(..."abcdefghijklmnopqrstuvwxyz")
    if(process.env.NUMBERS)
        characteres.push(..."0123456789")
    if(process.env.SPECIAL_CHARACTERES == "true")
        characteres.push(..."!@#$%&*")

    return characteres
}
export default permitedCharacters