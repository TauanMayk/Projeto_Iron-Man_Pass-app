export default function genaretaPass() {
    let password: string = ''

    let characters: string = 'AQWERTYUIOXLVKDSMNCZ@&7256189403%*_)!#ç'

    let passwordLength = 8
    
    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}

