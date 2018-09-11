export function abbrNum(number,dec) {

  let positif=1;
  if(number<0){
    positif=-1;
  }


  let value = number ;

  number = Math.abs(number); 
   

  let decimals = Math.pow(10,dec);
  let abbrev = [ " k", " mn", " bn", " tn" ];

  for (let i=abbrev.length-1; i>=0; i--) {
    let size = Math.pow(10,(i+1)*3);

    if(size <= number) {
     number = number*positif;
     number = Math.round(number*decimals/size)/decimals;

     if((number == 1000) && (i < abbrev.length - 1)) {
       number = 1;
       i++;
     }
     number += abbrev[i];
     value = number;
     break;
    } else {
      number = Math.round(number*decimals)/decimals;
      value = number*positif;
    }
  }
  return value;


}