function sieveOfAtkin(limit){
   var limitSqrt = Math.sqrt(limit);
   var sieve = []; // asal = true
   var n;

   //prime start from 2, and 3
   sieve[2] = true;
   sieve[3] = true;

   for (var x = 1; x <= limitSqrt; x++) {
       var xx = x*x;
       for (var y = 1; y <= limitSqrt; y++) {
           var yy = y*y;
           if (xx + yy >= limit) {
             break;
           }
           // first quadratic using m = 12 and r in R1 = {r : 1, 5}
           n = (4 * xx) + (yy);
           if (n <= limit && (n % 12 == 1 || n % 12 == 5)) {
               sieve[n] = !sieve[n];
           }
           // second quadratic using m = 12 and r in R2 = {r : 7}
           n = (3 * xx) + (yy);
           if (n <= limit && (n % 12 == 7)) {
               sieve[n] = !sieve[n];
           }
           // third quadratic using m = 12 and r in R3 = {r : 11}
           n = (3 * xx) - (yy);
           if (x > y && n <= limit && (n % 12 == 11)) {
               sieve[n] = !sieve[n];
           }
       }
   }

   retur = [];

   sieve.forEach( function(al,i){
         if(al)
          retur.push(i);
   });

   //primes values are the one which sieve[x] = true
   return retur;
}

primes = sieveOfAtkin(50);
c(primes);