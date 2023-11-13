type Words = {
    [key: string]: string
}
type term = string

class Dict {
    private words: Words    
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
        this.words[word.term] = word.def
        }
    }
    def(term : term) {
        return this.words[term]
    }
    del(term: string) {
        if(this.words[term] !== undefined){
            delete this.words[term]
        }
    }
    show() {
        return this.words
    }
    static hello() {
        return "hello"
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi);
dict.add(new Word("picture", "그림"))
dict.def("kimchi")