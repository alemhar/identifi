
var leonardo = function (i) {
   if(i <= 1){
      return 1;
   }else{
      return leonardo( i - 1 ) + leonardo( i - 2 ) + 1;
   }

}


var  fibonacci = function (i)
{
   if (i == 0) {
      return 0;
   }
   else if (i == 1)
   {
      return 1;
   } else {
      return fibonacci( i - 1 ) + fibonacci( i - 2 );
   }
}

/* Equation 4 */

var nextnum = function(i, j){
    return i + j + 1;
};

var prevnum = function($i, $j){
    return j - i - 1;
};


exports.lnum = leonardo;
exports.fnum = fibonacci;
exports.nnum = nextnum;
exports.pnum = prevnum;


