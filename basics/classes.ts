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


class Soju {
    sojuName: string;
    alcoholPercent: number;

    constructor(
        sojuName: string,
        alcoholPercent: number,
    ) {
        this.sojuName = sojuName;
        this.alcoholPercent = alcoholPercent;
    }

    getFullInfo() {
        return `${this.sojuName} ${this.alcoholPercent}%`;
    }
}

const c1 = new Soju("Chamisul", 20);
console.log(c1.getFullInfo()); // 출력: Chamisul 20%