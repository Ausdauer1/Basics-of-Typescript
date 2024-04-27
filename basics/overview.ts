let pitcher : string = "페디"
pitcher = "쿠에바스"
let backNumber : number[] = [1,2]
let pitchers : Array<number> = [2,3]

enum Color { Red = 5, Green, Orange}

// --------------------------
let aString : number[] = [1,2]
let bString : string[] = ["1", "3"]
let cString : boolean[] = [true]

type nameTest = string
type ageTest = number
// 타입스크립트가 추론하게 만듦
let aa = [1,2]
let bb = ["1", "3"]
let cc = [false]

const x : {
    name: string,
    age?: number
} = {
    name: "nico"
}

const xxx : {
    name : nameTest
    age? : ageTest
} = {
    name : "tom"
}

type PlayerExample = {
    name?: string,
    age?: number,
    play? : string
}

const nicoOverview : PlayerExample = {
    name: "nico"
}
    
const lynnOverview : PlayerExample = {
    name: "lynn",
    age: 12
}

function playerMaker(name:string) : PlayerExample {
    return {
        name
    }
}

function Maker(name: string, age : number, ) : PlayerExample {
    return {
        name,
        age
    }
}
const mad = Maker("go", 11)
mad.age 


const co = playerMaker("nice")
co.age = 12

const playerMakerA = (name:string) : PlayerExample => ({name})

const playMakerB = (play:string) : PlayerExample => ({play})

const AbAb = () => {
    
}