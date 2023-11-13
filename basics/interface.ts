// interface

interface PlayerI {
    name: string
}

interface PlayerII extends PlayerI {
    lastname: string
}

const playerI : PlayerI = {
    firstname : "zz",
    name: "nico"
}

const playerII : PlayerII = {
    firstname : "zz",
    name: "ab",
    lastname: "cd"
}

interface PlayerI {
    firstname : string
}

interface PlayerH {
    firstName: string
}

class UserI implements PlayerH {
    constructor(
        public firstName:string
    ){}
}