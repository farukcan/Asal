
  /*
  |--------------------------------------------------------------------------
  | Asal Sayý Bulucu ve Depolayýcý
  |--------------------------------------------------------------------------
  |
  | 
  */

  function isPrime(n) {
   if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
   if (n%2==0) return (n==2);
   if (n%3==0) return (n==3);
   var m=Math.sqrt(n);
   for (var i=5;i<=m;i+=6) {
    if (n%i==0)     return false;
    if (n%(i+2)==0) return false;
   }
   return true;
  }


  // belirli bir aralýkta rastgele asal sayý üretir
  function rndPrime (min,max) {
    var i = rnd(min,max);
    while(!isPrime(i)){
      i++;
      if(i>max) i=min;
    }
    return i;
  }

  asalDepolar = []; // depo adresleri buraya kaydedilir, depo güncelleme için
  setInterval(function() {
    asalDepolar.forEach( function(ad){
          ad.loop();
    });
  }, 
  1000 // Kaç ms de bir yeni asal sayi eklenecegidir
  );
  function asalDeposu (min,max,limit) {
    this.min = min;
    this.max = max;
    this.limit = limit;
    this.depo = [];
    this.loop = function () {
      if(this.depo.length<this.limit){
        this.depo.pushUnique(rndPrime(this.min,this.max));
      }
    };
    this.get = function () {
      var a =  this.depo.splice(rnd(0,this.depo.length-1),1)[0];
      if(a)
        return a;
      return rndPrime(this.min,this.max);
    };

    asalDepolar.push(this);
  }

  ctt("Asal sayý deposu çalýþtýrýldý : 10^9 ile 10^10 arasý asallar için... ");
  var asallar = new asalDeposu(1000000000,9999999999,50);

