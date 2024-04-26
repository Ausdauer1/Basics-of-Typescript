abstract class User {
    constructor(
        // public, private, protected
        protected firstName: string,
        protected lastName: string,
        protected nickname: string
    ) {}
    // 추상 메소드 => 자식 클래스에서 반드시 구현 해주어야함
    abstract getNickName(ar: string): void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class PlayerR extends User {
    getNickName() {
        this.getFullName()
        console.log(this.nickname)
    }
}

const taco = new PlayerR("nico", "las", "니꼬");

taco.getFullName()


abstract class Soju {
    constructor(
        sojuName: string,
        alcoholPercent: number,
    ) {}

    getFullInfo(sojuName, alcoholPercent) {
        return `${sojuName} ${alcoholPercent}`
    }
}

// const c1 = new Soju()


// abstract 키워드는 클래스가 추상 클래스임을 나타내기 위해 사용됩니다. 추상 클래스는 직접적으로 인스턴스화될 수 없으며, 상속을 통해 파생된 클래스에서 구현해야 하는 메서드나 속성을 정의할 수 있습니다.