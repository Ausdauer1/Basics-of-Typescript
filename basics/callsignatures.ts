// call signatures

type sign = {
    (a: number, b: number) : number
}

const signAdd: sign = (a,b) => {
    return a+b
}
// overloading 

type Add = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}

const add: Add = (a, b) => {
    if(typeof b === "string") return a
    return a+b
}


type configPrac = {
    name : string
    infos : object
}
type pushPrac = {
    (name: string) : void
    (config: configPrac) : void
} 

const funcPrac : pushPrac = (config) => {
    if (typeof config == "string") {console.log(config)}
    else {
        console.log(config.name, config.infos)
    }
}

type Config = {
    path: string,
    state: object 
}

type Push = {
    (path:string): void
    (config: Config): void
}

const push:Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else {
        console.log(config.path, config.state)
    }
}

type Adds = {
    (a: number, b:number): number,
    (a: number, b:number, c:number): number,
}

const adds: Adds = (a, b, c?:number) => {
    if(c) return a + b + c
    return a+b
}

// adds("1","2") <= 이거는 안됌.
adds(1,2)
adds(1,2,3)