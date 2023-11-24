var eng = 55;
var math = 80;
var science = 90;

var average = (eng + math + science) / 3;

var grade;

if (average >= 80){
grade = "A";
}
else if(average >= 60){
    grade = "B";
}
else if(average >=450){
    grade = "C";
}
else{
    grade = "D";
}

document.write("your grade is " +  grade);