function onInit(){       
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("point").addEventListener("click",point);
document.getElementById("AC").addEventListener("click",AC);
document.getElementById("s").addEventListener("click",o1);
document.getElementById("r").addEventListener("click",o2);
document.getElementById("m").addEventListener("click",o3);
document.getElementById("d").addEventListener("click",o4);
document.getElementById("sr").addEventListener("click",showResult);
}

let buttonZero=document.getElementById("n0");
let buttonOne=document.getElementById("n1");
let buttonTwo=document.getElementById("n2");
let buttonThree=document.getElementById("n3");
let buttonFour=document.getElementById("n4");
let buttonFive=document.getElementById("n5");
let buttonSix=document.getElementById("n6");
let buttonSeven=document.getElementById("n7");
let buttonEight=document.getElementById("n8");
let buttonNine=document.getElementById("n9");

    let buttonAdd=document.getElementById("s");
    let buttonSubs=document.getElementById("r");
    let buttonMult=document.getElementById("m");
    let buttonDiv=document.getElementById("d");

function AC(){
    document.getElementById('result').innerHTML="0" ;
    buttonAdd.disabled=false;
    buttonSubs.disabled=false;
    buttonMult.disabled=false;
    buttonDiv.disabled=false;
    buttonZero.disabled=false;
    buttonOne.disabled=false;
    buttonTwo.disabled=false;
    buttonThree.disabled=false;
    buttonFour.disabled=false;
    buttonFive.disabled=false;
    buttonSix.disabled=false;
    buttonSeven.disabled=false;
    buttonEight.disabled=false;
    buttonNine.disabled=false;
}
/*git init
git add .
git commit -m "" */


function n1(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = actual.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n1").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate; 

}

function n2(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n2").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}

function n3(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n3").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}

function n4(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n4").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}

function n5(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n5").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}
function n6(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n6").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}
function n7(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n7").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}
function n8(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n8").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}
function n9(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n9").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}
function n0(){
    let actual = document.getElementById('result').innerHTML;
    if (actual.charAt(0)==0 || actual.charAt(0)=="0"){
        actual = document.getElementById('result').innerHTML.charAt(0).replace("0","");}
    let concatenate = document.getElementById("n0").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
}

function point(){
    let actual = document.getElementById('result').innerHTML;
    let concatenate = document.getElementById("point").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate;
    document.getElementById("point").disabled =true;
}

   let op;
function o1(){
    op="Add";
    let actual = document.getElementById('result').innerHTML;
    let concatenate = document.getElementById("s").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate ;
    document.getElementById("point").disabled =false;

    buttonAdd.disabled=true;
    buttonSubs.disabled=true;
    buttonMult.disabled=true;
    buttonDiv.disabled=true;
    buttonZero.disabled=false;
    buttonOne.disabled=false;
    buttonTwo.disabled=false;
    buttonThree.disabled=false;
    buttonFour.disabled=false;
    buttonFive.disabled=false;
    buttonSix.disabled=false;
    buttonSeven.disabled=false;
    buttonEight.disabled=false;
    buttonNine.disabled=false;
    }

function o2(){
    op="Substract";
    let actual = document.getElementById('result').innerHTML;
    let concatenate = document.getElementById("r").innerHTML;
    document.getElementById('result').innerHTML = actual + concatenate ;
    document.getElementById("point").disabled =false;
    buttonAdd.disabled=true;
    buttonSubs.disabled=true;
    buttonMult.disabled=true;
    buttonDiv.disabled=true;
    buttonZero.disabled=false;
    buttonOne.disabled=false;
    buttonTwo.disabled=false;
    buttonThree.disabled=false;
    buttonFour.disabled=false;
    buttonFive.disabled=false;
    buttonSix.disabled=false;
    buttonSeven.disabled=false;
    buttonEight.disabled=false;
    buttonNine.disabled=false;
}

function o3(){
    op="Multiply";
    let actual = document.getElementById('result').innerHTML;
    let concatenate = document.getElementById("m").innerHTML;
    document.getElementById('result').innerHTML = actual+ concatenate;
    document.getElementById("point").disabled =false;
    buttonAdd.disabled=true;
    buttonSubs.disabled=true;
    buttonMult.disabled=true;
    buttonDiv.disabled=true;
    buttonZero.disabled=false;
    buttonOne.disabled=false;
    buttonTwo.disabled=false;
    buttonThree.disabled=false;
    buttonFour.disabled=false;
    buttonFive.disabled=false;
    buttonSix.disabled=false;
    buttonSeven.disabled=false;
    buttonEight.disabled=false;
    buttonNine.disabled=false;
}

function o4(){
    op="Divide";
    let actual = document.getElementById('result').innerHTML;
    let concatenate = document.getElementById("d").innerHTML;
    document.getElementById('result').innerHTML = actual+concatenate;
    document.getElementById("point").disabled =false;
    buttonAdd.disabled=true;
    buttonSubs.disabled=true;
    buttonMult.disabled=true;
    buttonDiv.disabled=true;
    buttonZero.disabled=false;
    buttonOne.disabled=false;
    buttonTwo.disabled=false;
    buttonThree.disabled=false;
    buttonFour.disabled=false;
    buttonFive.disabled=false;
    buttonSix.disabled=false;
    buttonSeven.disabled=false;
    buttonEight.disabled=false;
    buttonNine.disabled=false;
}

function showResult(){
    let actual = document.getElementById('result').innerHTML;
    
    switch(op){
        case "Add":
            let vect0 = actual.split("+",2)
        if(vect0[1]=="."){
            vect0[1]="0";
        }
            let responseAdd = parseFloat(vect0[0]) + parseFloat(vect0[1]);

     //Division Remainder
     
             if(responseAdd%1==0){
                document.getElementById("result").innerHTML = responseAdd;
                }
             else{
                document.getElementById("result").innerHTML = responseAdd.toFixed(1);
                }
        break;

        case "Substract":
            let vect1 = actual.split("-",2);
            
            if(vect1[1]=="."){
                vect1[1]="0";
            }
            let responseSubstract = parseFloat(vect1[0]) - parseFloat(vect1[1]);

            
            if(responseSubstract%1==0){
                document.getElementById("result").innerHTML=responseSubstract;
            }
            else{
                document.getElementById("result").innerHTML=responseSubstract.toFixed(1);
            } 
        break;

        case "Multiply":
            let vect2 = actual.split("x",2);

            if(vect2[1]=="."){
                vect2[1]="0";
            }

            let responseMultiply = parseFloat(vect2[0]) *  parseFloat(vect2[1]);       
            if(responseMultiply%1==0){
               document.getElementById("result").innerHTML=responseMultiply;
           }
           else{
               document.getElementById("result").innerHTML=responseMultiply.toFixed(1);
           }
           
            break;

        case "Divide":
            
            let vect3 = actual.split("÷",2);

            if(vect3[1]=="."){
               vect3[1]="0";
            }
            let responseDivide = parseFloat(vect3[0]) / parseFloat(vect3[1]);
            
            if(responseDivide%1==0){
                document.getElementById("result").innerHTML=responseDivide;
            }
            else{
                document.getElementById("result").innerHTML=responseDivide.toFixed(1);
            }
            
            break;            
    }

    buttonAdd.disabled=false;
    buttonSubs.disabled=false;
    buttonMult.disabled=false;
    buttonDiv.disabled=false;
    buttonZero.disabled=true;
    buttonOne.disabled=true;
    buttonTwo.disabled=true;
    buttonThree.disabled=true;
    buttonFour.disabled=true;
    buttonFive.disabled=true;
    buttonSix.disabled=true;
    buttonSeven.disabled=true;
    buttonEight.disabled=true;
    buttonNine.disabled=true;
    
    /*
       Previous code with if nested

    let actual = document.getElementById('result').innerHTML;
    // indexof search match
    let suma=actual.indexOf("+");
    let resta=actual.indexOf("-");
    let mult=actual.indexOf("x");
    let div=actual.indexOf("÷");
   
    if(suma != -1){
     let vect = actual.split("+",2)
     let res = parseFloat(vect[0]) + parseFloat(vect[1]);

     //Division Remainder
         if(res%1==0){
            document.getElementById("result").innerHTML = res;
            }
        else{
            document.getElementById("result").innerHTML = res.toFixed(1);
         }
		
    }
    else if(resta != -1){
        let vect = actual.split("-",2)
        let res = parseFloat(vect[0]) - parseFloat(vect[1]);
       
        if(res%1==0){
            document.getElementById("result").innerHTML=res
        }
        else{
            document.getElementById("result").innerHTML=res.toFixed(1);
        }
           
    }
    else if (mult != -1){
        let vect = actual.split("x",2)
     let res = parseFloat(vect[0]) *  parseFloat(vect[1]);

     if(res%1==0){
        document.getElementById("result").innerHTML=res
    }
    else{
        document.getElementById("result").innerHTML=res.toFixed(1);
    }
    }


    else if(div != -1){
        let vect = actual.split("÷",2);
        let res = parseFloat(vect[0]) / parseFloat(vect[1]);
        
        if(res%1==0){
            document.getElementById("result").innerHTML=res;
        }
        else{
            document.getElementById("result").innerHTML=res.toFixed(1);
        }
           
    } */
}

