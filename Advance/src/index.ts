// watch mode
console.log("type script is running")
console.log("converting to js file")
// class User{
//     public email:string
//     private name:string
//     private city:string=""
//     constructor(email:string,name:string){
//         this.email=email
//         this.name=name
//     }
// }

// const u=new User("pruthi@gmail.com","pruthi")

class User{
    readonly city:string="bbsr"
    protected courseCount:number=0
    constructor(
        protected email:string,
        public name:string,
        private userId:string
    ){
        this.email=email
        this.name=name
    }
    private deleteTokon(){
        console.log('token delete')
    }

    get getEmail():string{
       return `email is ${this.userId}`
    }

    get getCourseCount():number{
        return this.courseCount
    }
    set courseCountChange(courseNum:number){
           this.courseCount=courseNum
    }
}

class SubUser extends User{
    isFamily:boolean=true

  changeCourseCount(){
       this.courseCount=68
    }
}

const u=new User("pruthi@gmail.com","pruthi","jhfjhvgrfh")