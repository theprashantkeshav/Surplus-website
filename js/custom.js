// CALCULATER 
function filterChars(s, charList)
{
	var s1 = "" + s; // force s1 to be a string data type
	var i;
	for (i = 0; i < s1.length; )
	{
		if (charList.indexOf(s1.charAt(i)) < 0)
			s1 = s1.substring(0,i) + s1.substring(i+1, s1.length);
		else
			i++;
	}
	return s1;
}		
function makeNumeric(s)
{
	return filterChars(s, "1234567890.-");
}

function numval(val,digits,minval,maxval)
{
	val = makeNumeric(val);
	if (val == "" || isNaN(val)) val = 0;
	val = parseFloat(val);
	if (digits != null)
	{
		var dec = Math.pow(10,digits);
		val = (Math.round(val * dec))/dec;
	}
	if (minval != null && val < minval) val = minval;
	if (maxval != null && val > maxval) val = maxval;
	return parseFloat(val);
}

function formatNumber(val,digits,minval,maxval)
{
	var sval = "" + numval(val,digits,minval,maxval);
	var i;
	var iDecpt = sval.indexOf(".");
	if (iDecpt < 0) iDecpt = sval.length;
	if (digits != null && digits > 0)
	{
		if (iDecpt == sval.length)
			sval = sval + ".";
		var places = sval.length - sval.indexOf(".") - 1;
		for (i = 0; i < digits - places; i++)
			sval = sval + "0";
	}
	var firstNumchar = 0;
	if (sval.charAt(0) == "-") firstNumchar = 1;
	for (i = iDecpt - 3; i > firstNumchar; i-= 3)
		sval = sval.substring(0, i) + "," + sval.substring(i);

	return sval;
}

function presentValue(fv,r,y)
{
	return fv/Math.pow(1+r,y);
}
function zeroBlanks(formname)
{
	var i, ctrl;
	for (i = 0; i < formname.elements.length; i++)
	{
		ctrl = formname.elements[i];
		if (ctrl.type == "text")
		{
			if (makeNumeric(ctrl.value) == "")
				ctrl.value = "0";
		}
	}
}

function calculate (){
	
	   $("#calResultDiv").slideDown(); 
	document.mainform.numOfClient.value
	var numOfClient		= numval(document.mainform.numOfClient.value);
	var clientInvestAverage		= numval(document.mainform.clientInvestAverage.value);
	//alert(numOfClient);alert(clientInvestAverage);

var calResult1=(numOfClient*clientInvestAverage*0.30);
var calResult2=(numOfClient*clientInvestAverage*12);
var calResult3=(calResult1*0.275);
var calResult4=(calResult1+calResult3);
var calResult5=(calResult4*12);
var calResult6=(calResult5*1.32);
var calResult7=(calResult6*1.24);
var calResult8=(calResult7*1.37);
var calResult9=(calResult8*1.28);

document.getElementById('calResult1').innerHTML='$'+formatNumber(calResult1,2,0);
document.getElementById('calResult2').innerHTML='$'+formatNumber(calResult2,2,0);
document.getElementById('calResult3').innerHTML='$'+formatNumber(calResult3,2,0);

document.getElementById('calResult4').innerHTML='$'+formatNumber(calResult4,2,0);
document.getElementById('calResult5').innerHTML='$'+formatNumber(calResult5,2,0);
document.getElementById('calResult6').innerHTML='$'+formatNumber(calResult6,2,0);
document.getElementById('calResult7').innerHTML='$'+formatNumber(calResult7,2,0);
document.getElementById('calResult8').innerHTML='$'+formatNumber(calResult8,2,0);
document.getElementById('calResult9').innerHTML='$'+formatNumber(calResult9,2,0);
		}


    // RESULTS DIV
    $("#numOfClient").on("keyup change", function () {
      $("#calResultDiv").slideUp(); 
   });

$("#calc-age").on("mousemove touchmove click", function () {
     in_1 = Number($(this).val());
     $("#clientInvestAverage").val(in_1);
     // $("#calResultDiv").hide(); 
   });
$("#clientInvestAverage").on("keyup change", function () {
     in_1 = Number($(this).val());
     $("#calc-age").val(in_1);
      $("#calResultDiv").slideUp(); 
   });
$("#calc-age").on("input change", function (event) {
var age = $(this).val()
$("#calResultDiv").slideUp(); 
}); 
    // RESULTS DIV 


ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1500,
  delay: 400
  });
  ScrollReveal().reveal('nav',{
      delay: 500,
      origin: 'top'
  });

  ScrollReveal().reveal('h1,a, .section-two h2, .tumbnail, .shape',{
      delay: 500,
      origin: 'bottom'
  });


  ScrollReveal().reveal('.row-banner h1, .section-ten p, .section-ten img, .big-txt, .section-nine .icon-row, .section-nine h6, .row-banner h4, .row-banner p, .row-banner a, .section-two .col, .section-three .col-md, .section-five .box, .section-six .col-md-4, .section-seven li, .section-eight .col-md-4',{
      delay: 500,
      origin: 'bottom',
      interval: 200,
      duration: 1500 ,
  });

  ScrollReveal().reveal('.box-b',{
      delay: 500,
      
  });
  ScrollReveal().reveal('.banner-img, .boxes3, .section-five .icon-row',{
      delay: 600,
      duration: 2600 ,
      origin: 'right',
      interval: 200
  });


