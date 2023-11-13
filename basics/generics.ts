// polymorphism 다형성

type SuperPoly = {
    <TypePlaceholder>(arr: TypePlaceholder[]) : TypePlaceholder
}

function superman<M>(a: M[]) {
    return a[1]
}

// type SuperPrint = {
//     (arr: number[]):void,
//     (arr: boolean[]):void
//     (arr: string[]):void
//     (arr: (number|boolean)[]) : void
// }

// type SuperPrint = {
//     <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder,
// }

// type SuperPrint = <T, M>(arr: T[], b:M) => T
type SuperP = (a: any[]) => any


// const superPrint: SuperPrint = (arr) => arr[0]
const superP: SuperP = (a) => a[0]

function superPrint<V>(a: V[]) {
    return a[0]
}

const a = superPrint([1,2,3,4])
const b = superPrint([true, false, 1, "hello"])
const d = superP([1,2,true,"hello"])

d.toUpperCase()
//b.toUpperCase()

// 위의 d.toUpperCase() 는 오류가 안뜬다. 왜냐면 위의SuperP는 any로 선언되었기 때문이다.

type PlayerG<E> = {
    name: string
    extraInfo: E
}

type NicoExtra = {
    favFood:string
}

// 여기서 E의 형태를 정해줌

type PlayerPrac<P> = {
    name: string
    infos: P
}

type Player1 = PlayerPrac<{gender : string}>

const tom: Player1 = {
    name : "Tom",
    infos: {
        gender : "male"
    }
}

type Player2 = PlayerPrac<number>

const jerry: Player2 = {
    name : "jerry",
    infos: 123
}



type NicoPlayer = PlayerG<{ favFood:string }>
//type NicoPlayer = Player<NicoExtra> 

const nico: NicoPlayer = {
    name:"nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn: PlayerG<null> = {
    name: "lynn",
    extraInfo : null
}

function printAllNumbers(arr: Array<number>) {
    
}