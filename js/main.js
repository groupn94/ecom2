document.getElementById('footer').innerHTML="My footer";
document.write("Hello javascript");
// alert("Delete Element?");
// prompt("Your Password:");
// confirm("Delete Element?");
console.log("Error");
// Variables
var x=9;
var y=10.5;
var name="Ahmed";
var b=true;
               
var students=["Ahmed",25,"Ahmed@yahoo.com",true];
var res=students[1]+20;
students[1]="Cairo";

if(x>y){
    document.getElementById('footer').innerHTML=students[1];     
    
}else if(x==y){
    document.getElementById('footer').innerHTML=students[2];  
}else{
    document.getElementById('footer').innerHTML=students[3];  
}

/**
 * Switch 
 */
switch(x>y){
    case false:{
        document.getElementById('footer').innerHTML=students[1];
        break;
    }
    case true:{
        document.getElementById('footer').innerHTML=students[2];
    }
}
/**
 * Loops
 */
var emps=["Ahmed","shraf","Ali","Hossam"];
document.getElementById('footer').innerHTML='';
for(i=0;i<emps.length;i++){
    document.getElementById('footer').innerHTML+=emps[i]+'<br />';
}
/**
 * For in
 */
for(indx in emps ){
    document.getElementById('footer').innerHTML+=emps[indx]+'<br />';
}
/**
 * Functions
 */
function myfunction(str="Mohmmed"){
    console.log(str);  
}

// myfunction();