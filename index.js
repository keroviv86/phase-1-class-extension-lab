class Polygon{
    constructor(array){
        this.array = array
    }
    get countSides(){
        return this.array.length
    }

    get perimeter(){
        return this.array.reduce((a,b)=>a+b)
    }
}

// class Triangle extends{

// }