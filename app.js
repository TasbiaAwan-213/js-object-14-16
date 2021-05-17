//********************-------------------*****************Chapter 14-16********************-------------------*****************//
//CHAPTER NO.14-16 :
//task no .1 :
var students = [];

////task no .2 : 
var students = new Array();

//task no .3 :
var colors = ["Yellow", "Orange", "Red", "Purple", "Blue"];
document.write("String Array: " + colors + "<br>" );

//task no .4 : 
var marks = [03, 42, 88, 43, 14];
document.write("Number Array: " + marks + "<br>" );

//task no .5 :
var bool = [true, false, false, true];
document.write("Boolean Array: " + bool + "<br>" );

//task no .6 :
var data = ["ahsan", "waqar", 23, true];
document.write("Mixed Array: " + data + "<br>" );

//task no .7 :
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
var count = 0;
var a = 0;

document.write("Qualification" + "<br/>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>");
document.write(++count + ") " + qualifications[a++] + "<br>" );

//task no .8 :

var studentNames = ["ahsan", "ali", "umar"];
var studentMarks = [300, 375, 489];
var index = 0;

document.write("numbers of " + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br>");
document.write("numbers of" + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br>");
document.write("numbers of" + studentNames[index] + " is " + studentMarks[index] + ". Percentage: " + ((studentMarks[index++] / 500) * 100) + "<br>");


//task no .9 :

var colorNames = [];
document.write(colorNames);

var addStartColor = prompt("Add color in begining: ");
colorNames.unshift(addStartColor)
document.write(colorNames+"<br>");

var addLastColor = prompt("Add color in last: ");
colorNames.push(addLastColor)
document.write(colorNames+"<br>");

var addStartColor = prompt("Add color in begining 1: ");
colorNames.unshift(addStartColor)
var addStartColor2 = prompt("Add color in begining 2: ");
colorNames.unshift(addStartColor2)
document.write(colorNames+"<br>");



colorNames.shift()
document.write(colorNames+"<br>");


colorNames.pop()
document.write(colorNames+"<br>");


var index = prompt("Enter index number: ");
var newcolor = prompt("Enter color: ");

colorNames.splice(index,newcolor);
document.write(colorNames+"<br>");


var pos = prompt("Enter index number: ");
var del = prompt("How many color wants to delete: ");

colorNames.splice(index,del);
document.write(colorNames+"<br>");

//task no .10 :

var studentMarks = [320, 230, 480, 123];
document.write("Score of Students: " + studentMarks + "<br>");
document.write("Ordered Score of Students: " + studentMarks.sort());

//task no .11 :

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan"];
document.write("Cities List:" + "<br/>" + cities + "<br/>" + "<br/>");
var selectedCities = [];
selectedCities = cities.slice(2, 5);
document.write("Selected cities List:" + "<br/>" + selectedCities )


//task no .12:

var arr = ["This", "is", "my", "cat"];
document.write("Array:" + "<br/>" + arr + "<br/>" + "<br/>");
var join_arr = arr.join(" ");
document.write("String:" + "<br/>" + join_arr  );


//task no .13:
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br>" + devices + "<br/>" );

out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.shift();
document.write("Out:" + "<br>" + out + "<br>" );




//task no .14 :
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br>" + devices + "<br/>" );

out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>");
out = devices.pop();
document.write("Out:" + "<br>" + out + "<br>" );


//task no .15 :

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var index = 0;
document.write("<select>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("<option>" + phoneManufacturers[index++] + "<option>");
document.write("</select>");

