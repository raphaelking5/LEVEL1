let scores = [2, 4, 6, 9, 7, 8];
let output = scores.map(value => value *2);
console.log(output);
  
let students = ["derrick", "prince", "isaac", "felix", "kenzo",];
let salaries = [200000, 45000, 300000, 130000, 40000,];
const result = students.map((students,index)=>{
    let studentsalary ={} 
    studentsalary [students]= salaries[index];
    return  studentsalary;
    
})
console.log(result);

