class fatherName{
    constructor(){
        this.fatherName = 'Abdul Ahad Munshi'
    }
}
class Student extends fatherName{ 
    constructor(sName,sId){
        super()
        this.Name = sName;
        this.Id = sId;
        this.School = 'Nirjhor Cantonment Public School and College'
      
    }
    getFullName(){
        return this.Name + ` `+ this.fatherName;
    }
}
const student1 = new Student('Rhythm Akash','Ncpsc202007180');
console.log(student1.getFullName());