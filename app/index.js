import Animal from './Animal';

class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }

    hello() {
        console.log(`Hi i'm the ${this.color} ${this.name} from Pride Rock.`);
    }

}

let son = new Lion("Simba", 2, 'Golden');
son.hello();
