var table =document.createElement('table');
table.className='table table-bordered';

var thead=document.createElement('thead');
thead.className='thead-dark';

var tr1=document.createElement('tr');
var th1=createtrth('th','FirstName');
var th2=createtrth('th','LastName');
var th3=createtrth('th','Address');
var th4=createtrth('th','Pincode');
var th5=createtrth('th','Gender');
var th6=createtrth('th','Food');
var th7=createtrth('th','State');
var th8=createtrth('th','Country');

tr1.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr1);
table.append(thead)
document.body.append(table);

function loadData(){
var tbody=document.createElement('tbody');
var tr=document.createElement('tr');
var td1=createtrth('td',document.getElementById('fname').value);
var td2=createtrth('td',document.getElementById('lname').value);
var td3=createtrth('td',document.getElementById('addr').value);
var td4=createtrth('td',document.getElementById('pin').value);

var genderVal = document.getElementsByName('inlineRadioOptions');
              
for(i = 0; i < genderVal.length; i++) {
    if(genderVal[i].checked)
    var td5=createtrth('td',genderVal[i].value);

}

var foodVal = document.getElementsByName('inlineCheckbox');
 let foodSel='';             
for(j = 0; j < foodVal.length; j++) {
    if(foodVal[j].checked && j==0)
    {
        foodSel =foodVal[j].value;
    }
    else if(foodVal[j].checked){
        foodSel=foodSel+" "+foodVal[j].value;
    }
    var td6=createtrth('td',foodSel);

}

var state = document.getElementById("state");
var stateVal=state.options[state.selectedIndex].value;
var td7=createtrth('td',stateVal);

var country = document.getElementById("country");
var countryVal=country.options[country.selectedIndex].value;
var td8=createtrth('td',countryVal);

tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
tbody.append(tr);
table.append(tbody)
document.body.append(table)
resetValues();
}

function resetValues(){
    document.getElementById('fname').value=null;
    document.getElementById('lname').value=null;
    document.getElementById('addr').value=null;
    document.getElementById('pin').value=null;
    document.getElementById('inlineRadio1').checked=false;
    document.getElementById('inlineRadio2').checked=false;
    document.getElementById('inlineCheckbox1').checked=false;
    document.getElementById('inlineCheckbox2').checked=false;
    document.getElementById('inlineCheckbox3').checked=false;
    document.getElementById('inlineCheckbox4').checked=false;
    document.getElementById('inlineCheckbox5').checked=false;
    var stateReset = document.getElementById("state");
    stateReset.selectedIndex=0;
    var countryReset = document.getElementById("country");
    countryReset.selectedIndex=0;
}

function createtrth(name,val=''){
    var td=document.createElement(name);
    td.innerHTML=val;
    return td;
}
