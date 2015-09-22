var identifi = require('./common.js');
var bst = require('./bst.js');
/*var buckets = require('./buckets.js');*/

var index = 9;

/* Answer 1 */
var lnumber = identifi.lnum(index);

/* Answer 2 */
var fnumber = identifi.fnum(index);

/* Answer 4 & 5 */


    i = 1;
    j = 1;
    prev = 0;
    console.log('Leonardo numbers from index -1 to -10');
    for (x=1;x<=10;x++){
       prev = identifi.pnum(i, j);
       j = i;
       i = prev;
    console.log('Index -'+x+" "+prev);    
    }




/* Answer 7 */

var a = new bst(); 
for(i=0;i<=index;i++){
    a.insert('i'+i,identifi.lnum(i));
}



/* Console Logs */

console.log('Print Leonardo number index '+index+': '+lnumber);
console.log('Print Fibonacci number index '+index+': '+fnumber);
console.log('Search Index 5 value: '+a.search('i5'));