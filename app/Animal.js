class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    hello() {
        console.log(`Hi i'm ${this.name} from the Animal kingdom.`);
    }
}

export default Animal;
