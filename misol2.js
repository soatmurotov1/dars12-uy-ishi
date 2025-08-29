





class Point {
    constructor(x, y){
        this.x = x;
        this.y = y

    }

    static distance(point1, point2) {
        const dx = point2.x - point1.x
        const dy = point2.y - point2.y
        return Math.sqrt(dx*dx + dy * dy)
    }

    toString() {
        return `${this.x}: ${this.y}`
    }

    korKuch(deltaX, deltaY){
        this.x += deltaX
        this.y += deltaY
    }

    korHisob() {
        return Point.distance(this, new Point(0, 0))
    }

}

const p1 = new Point(0, 1)
const p2 = new Point(3, 4)

console.log(`p1: ${p1.toString()}`);
console.log(`p2: ${p2.toString()}`);

console.log(`p1: ${p2.korHisob()}`);
