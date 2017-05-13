function one(){
	var x,y,bandwidth;
	x=document.getElementById("numb").value;
	y=document.getElementById("numb2").value;
	bandwidth=2*x*(Math.log2(y));
	/*document.write("NYQUSIT BANDWIDTH");
	document.write("This is nyqusit bandwidth in bits/sec= ",bandwidth);*/
	document.getElementById("change").innerHTML=bandwidth+" bits per sec";
}

function two(){
	var x,y,band,z;
	x=document.getElementById("demo").value;
	y=document.getElementById("demo1").value;
	z=y+1;
	band=x*(Math.log2(z));
	document.getElementById("change2").innerHTML=band+" bits per sec";
}

function three(){
	var out,distance,speed,size,rate;
	distance=document.getElementById("input1").value;
	speed=document.getElementById("input2").value;
	rate=document.getElementById("input3").value;
	size=document.getElementById("input4").value;
	out=(distance*1000)/speed + (rate*1000)/size;
	document.getElementById("output").innerHTML=out+" seconds"; 
}

function four(){
	var sig,noise,output,out;
	sig=document.getElementById("dem").value;
	noise=document.getElementById("dem1").value;
	output=sig/noise;
	out=10*Math.log10(output);
	document.getElementById("chang2").innerHTML=output;
	document.getElementById("chang").innerHTML=out+" decibels";
}

function five(){
	var frames,bits,result;
	frames=document.getElementById("last2").value;
	bits=document.getElementById("last3").value;
	result=(frames*bits)/60;
	document.getElementById("resu").innerHTML=result+"bits per second";
}