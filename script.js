function change() {
   body  = document.querySelector('body');
   var r = (document.getElementById('r').value);
   var g = (document.getElementById('g').value);
   var b = (document.getElementById('b').value);
   
   redValue 	= document.getElementById('redValue')
   greenValue 	= document.getElementById('greenValue')
   blueValue 	= document.getElementById('blueValue')
   rgbValue    = document.getElementById('rgbValue')
   
   rValue = r.valueOf(); 
   gValue = g.valueOf();
   bValue = b.valueOf();
   
   redValue.value 	= (`000${rValue}`).slice(-3); 
   greenValue.value = (`000${gValue}`).slice(-3);  
   blueValue.value 	= (`000${bValue}`).slice(-3); 

   rgb = r+g+b;
   body.style.backgroundColor = 'rgb(' + r + ','+ g + ','+ b +')';
   rHex = parseInt(rValue).toString(16);
   gHex = parseInt(gValue).toString(16);
   bHex = parseInt(bValue).toString(16);
   rgbValue.value = `#${(rHex.length != 2 ? "0" + rHex : rHex).toUpperCase()}${(gHex.length != 2 ? "0" + gHex : gHex).toUpperCase()}${(bHex.length != 2 ? "0" + bHex : bHex).toUpperCase()}`;

}


function copyToClipboard(elementId){
  var aux = document.getElementById(elementId);
  aux.select();
  document.execCommand('copy');
  alert("O valor foi copiado para a área de transferência");
}

