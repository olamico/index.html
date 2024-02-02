var students = ["jingo", "sade", "adu", "michael", "seun" ];

for ( var index = 0; index < students.length; index++) {
    console.log (students[index]);}


// function area(length, breath) {
//     return length * breath
// }


// var tableAreas = (area(2,3))
// console.log(tableAreas)

var PassMark = 40;
function GradeStudent(StudentMark) {
    if (StudentMark >= PassMark) {
        PassMark -= StudentMark;
        console.log ("pass");
    } else { console.log ("fail")

    }
}

GradeStudent(20);
GradeStudent(20);
GradeStudent(20);
GradeStudent(20);
GradeStudent(50);
GradeStudent(20);
GradeStudent(240);

var Staffs = [];

function Staff(Sa, De, Ta) {
this.salary = Sa;
this.Debt = De;
this.Tax = Ta;
}

// var MrDavid = new Staff(45, 4, 2 );

Staffs.push(new Staff(45, 20, 20))
Staffs.push(new Staff(45, 21, 23))
Staffs.push(new Staff(45, 209, 27))
Staffs.push(new Staff(45, 29, 20))

console.log(Staffs);
