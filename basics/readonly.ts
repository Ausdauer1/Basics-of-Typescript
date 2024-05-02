type Age = number;
type Name = string;

type Team = number;

type BasketBall = {
     team : Team  
}

const USA : BasketBall = {
    team : 30
}

const Korea : BasketBall = {
    team : 10
}


type Player = {
    readonly name: Name
    age?: Age
}

const test : Player = {
    name: "eee",
    age: 13
}

test.age = 12
const testre : Player = {
    name : "rrr"
}

testre.age = 13

const playMaker = (name:string) : Player => ({name})
const nicoRe = playMaker("nico")

nicoRe.age = 12
// nicoRe.name = "abcd" 네임은 readonly 이기 때문에 수정할 수 없다.

const numbers : readonly number[] = [1,2,3,4]
// numbers.push(1) 여기도 마찬가지 read only이기 때문에 배열에 요소를 넣을수도 없음
// readonly는 Map도 안됌


// Tuple 
const player: [string, number, boolean] = ["nico", 1, true]
player[0] = "hi"

// Any

const ax : any[] = [1,2,3,4]
const bx : any = true

// unkown 

let abcd: unknown
let cdef: unknown
if(typeof abcd === 'string'){
    cdef = abcd.toUpperCase()
} 

// void is a function returning nothing
function hello() {
    console.log("x")
}

// never
function nev(name:string|number) {
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        name
    }
}

function naver(name: string) : never {
    throw console.error(1);
    
}

