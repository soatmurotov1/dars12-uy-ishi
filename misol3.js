




class Universitet {
    constructor(name, departaments) {
        this.name = name
        this.departaments = []

    }

    addDepartment(deparName){
        if(!this.departaments.includes(deparName)) {
            this.departaments.push(this.departaments)
            console.log(`${deparName} qushildi`);
            
        }else {
            console.log(`${deparName} bor`);
            
        }
    }

    removeDepar(departaments){
        const dep = this.departaments.indexOf(departaments)
        if(dep == -1){
            this.departaments.splice(dep, 1)
            console.log(`${departaments} uchirildi`);
            
        }else {
            console.log(`${departaments} yuq`);
            
        }
    }

    showAll(){
        if(this.departaments == 0){
            console.log(`Departament yuq`);
            
        }else {
            console.log(`${this.departaments}`);
            
        }
    }

    getDepSoni(){
        return this.departaments.length
    }

    hasDep(deparName){
        return this.departaments.includes(deparName)
    }

    getInfo(){
        return `Universitet nomi: ${this.name}`
    }
}


const universitet = new Universitet("Toshkent axborot texnologiyalari universiteti")
console.log(universitet.getInfo());


universitet.addDepartment("matematika")
universitet.addDepartment("fizika")
universitet.addDepartment("kimyo")
universitet.addDepartment("informatika")
universitet.addDepartment("geometriya")


universitet.showAll()

universitet.removeDepar("kimyo")
universitet.removeDepar("matematika")


universitet.showAll()