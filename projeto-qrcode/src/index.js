import prompt from "prompt"
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"
import createQRCode from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"

async function main(){
    prompt.get(promptSchemaMain, async (err, result) => {
        if(result.select == 1) await createQRCode()
        if(result.select == 2) await createPassword()
        
    })
}

main()