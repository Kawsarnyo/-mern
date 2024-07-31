/*
Arithmetic operators
+, -, *, /, %, ++ ,--
Comparison operators 
== , === ,!= ,!== ,<>, <= ,>=
Logical operators 
&& , || ,!
Assignment Operators 
= , += ,-= ,*= , /= , %=
------------------------
swith - 
------------------------
var marks = prompt("Enter your roll:");
switch(true){
    case(marks>=80 && marks<=100):
        document.write("A+");
    break;
    case(marks>=70 && marks<=79):
        document.write("A");
    break;
    case(marks>=60 && marks<=69):
        document.write("A-");
    break;
    case(marks>=50 && marks<=59):
        document.write("B");
    break;
    case(marks>=40 && marks<=49):
        document.write("C");
    break;
    case(marks>=33 && marks<=39):
    document.write("D");
    break;
    default:
        document.write("Fail");
};
-------------------------
For Loop: 
-------------------------
Entry Controlled Loops:
var i;
for(i=0;i<10;i=i+1){
    if(i==4 || i==6){
        continue; 4,6 jump dibe
        break;   stop hobe loop hobe na r 
    }
    document.write(i+"<button>Submit</button>"+"<br/>");
}
Exit Controled Loop:
------------------------
While Loop : 
-----------------------
var i = 0;
while(i<10){
    document.write(i+"<button>submit</button>"+"<br/>");
    i++;
}
Exit Controlled Loops: 
-----------------------------
Arry loop: 
--------------------------
var category=['name','age','hight','ssc','hsc'];
var i;
for(i=0;i<category.length;i++){
    document.write(category[i]+"<br/>");
}

----------------------
forEach method -  loop r moto sub item ber hobe
-------------------------
var array1=[23,345,65,43,756];
array1.forEach(function(item){
   document.write(item+"<br/>");
});
---------------------------
filter method - number khuje aste parbo
--------------------------
var array1=[23,345,65,43,756];
var result =array1.filter(function(item){
   return item>30
});

document.write(result);

------------------------
Find method - item khujbe first item
-------------------------
var array1 = [23,43,54,32];
var result=array1.find(function(item){
    return item>20
});

document.write(result);
-----------------------------
findIndex method - first item r index number 
-------------------------------
var array1 = [23,43,54,32];
var result=array1.findIndex(function(item){
    return item>20
});

document.write(result);
---------------------------------
forEach - loop r moto sob value show korbe
---------------------------------
var array1 = [23,34,65,78];
array1.forEach(function(item){
    document.write(item+"<br/>");
});
-------------------------------------
includes - kono akta value ache ki na jana r jono 
--------------------------------------
var array1 = [23,43,54,32];
var result =  array1.includes(323);

document.write(result);
-----------------------------------------
indexOf - kono value r index number 
------------------------------------
var array1 = [23,43,54,32];
var result =  array1.indexOf(23);

document.write(result);
---------------------------------------
reverse - value  ses theke asbe
---------------------------------------
var array1 = [23,43,54,32];
var result =  array1.reverse();

document.write(result);
---------------------------------
push - new kono value add kora jabe
----------------------------------
var array1 = [23,43,54,32];
array1.push(56);

document.write(array1);
----------------------------
pop - dia ses theke value delete kor jabe
-------------------------
var array1 = [23,34,65,78];
array1.pop();
document.write(array1);
---------------------------
slice - koto theke koto number kate nia jabe
----------------------------------
var array1 = [23,34,65,78,56,87];
var result = array1.slice(1,3);
document.write(result);
-----------------------------
sort - arrange kore dibe 
--------------------------------
var array1 = [23,34,98,65,78,56,87];
array1.sort().reverse();
document.write(array1);
-----------------------
string method - 
charAt - kono spesific letter or value k nia asa jabe
-------------------
var city = "Bangladesh";
   var ok = city.charAt(3);
document.write(ok);
--------------------------
indexOf - dia kono letter r index koto jabe
---------------------------
var city = "Bangladesh";
   var ok = city.indexOf("g");
document.write(ok);
--------------------
lastIndexOf - ses r index ber kora jabe
-----------------------
var city = "Bangladesh";
   var ok = city.lastIndexOf("a");
document.write(ok);
--------------------------------
replace method - dia kono value k replcae kora jabe
-------------------------------
var city = "Bangaldesh";
var letter1= city.replace("desh","deshi");
document.write(letter1);
------------------------
sub string - substr(); - kthay theke cutte hobe bole dite hobe
--------------------------
var city = "Bangaldesh";
var result = city.substr(0,4);
document.write(result);
-----------------------------------
Date Object

-----------------------
window object function 
confirm - Yes or no popup button
-------------------------
function clickMe(){
    var result = confirm("Yes or No");
    document.write(result);
}

prompt: - input 
-----------------------------
function clickMe(){
    var result = prompt("Yes or No");
    document.write(result);
}
open: new tab open hobe 
--------------------------------------
function clickMe(){
    var result = open("open new tab");
    document.write(result);
}
close: tab delete hobe
------------------------------------
function clickMe(){
    var close = open("open new tab");
    document.write(result);
}
setTimeout - 
---------------------
setTimeout(function(){
    alert("Would you like to eat ? ");
},10000)
--------------------------
window object 
----------------------------
var appCode=navigator.appCodeName;
var appName=navigator.appName;
var appVersion=navigator.appVersion;
var appCookied=navigator.cookieEnabled;
var appAgent=navigator.userAgent;
var appLanguage=navigator.language;
var appOnline=navigator.platform;

document.write(appCode+"<br/>");
document.write(appName+"<br/>");
document.write(appVersion+"<br/>");
document.write(appCookied+"<br/>");
document.write(appAgent+"<br/>");
document.write(appLanguage+"<br/>");
document.write(appOnline+"<br/>");
----------------------------------
// Window Object mothod
-----------------------------------
function YesOrNo(){
    alert("Congratulation!");
}
function YesOrNo(){
    var result=confirm("Do you delete it ? ");
    document.write(result);
}
function openButton(tabButton){
    open(tabButton);
}
function closeTab(){
    close();
}
setTimeout(function(){
    alert('Alert after 3 secound');
},10000);

----------------------------------
moduel - 2 
-------------------------------
Geolocation: 
----------------------------
/*navigator.geolocation.getCurrentPosition(function(position){
   let alt= position.coords.altitude;
   let lati= position.coords.latitude;
   let long= position.coords.longitude;
   let speed= position.coords.speed;

   document.write(alt+"<br/>");
   document.write(lati+"<br/>");
   document.write(long+"<br/>");
   document.write(speed+"<br/>");
});

------------------------------------
Events 
---------------------------------
<button onmouseover="buttonover('mouseover hoiche')">mouseover</button>
<button onmouseout="mouseOut('mouse out good')">onmouseout</button>

function buttonover(msg){
    document.write(msg);
};
function mouseOut(pl){
    document.write(pl);
};
----------------------------------
DOM - Document object model
-------------------------
Tag - 
var tagName = document.getElementsByTagName('tagName);
tagName[0].innerHTML="Changed text";
Class - 
var cssCLass = document.getElementsByClassName('ClassName);
cssClass[3].innerHTML="OutPut";
Id- 
var Id= document.getElementById('Id');
Id.innerHTML="OutPut";
name- 
var Name= document.getElementsByName();
cookie ---
function cookied(){
    var cookied1 = document.cookie; (domain)(lastModified)(url)
   document.getElementsByTagName('p')[0].innerHTML=cookied1;
}
replace - 
function onclickd(){
    document.open('text/html','replace');
    document.write('<h2> Kawsar </h2>');
    document.close();
}
------------------------------------
input theke value nia 
----------------------------------
<input type="text" name="" id="input1">
<input type="text" name="" id="input2">
<button onclick="formNumber()">Result</button>

<script>

function formNumber(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    let result= parseInt(input1)+parseInt(input2);
   
    alert(result);


}
-------------------------------------








*/