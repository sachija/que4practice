// que 1
function MyName(){
    let name;
    
    console.log(name);
    }
    MyName();
    // que2 arrow function
    const My=(a,b)=>{
    let result=a+b;
    console.log(result);
      
    }
    console.log(My);
    My(3,6);
    
    
    // que 4
    function add(a,b){
    let result=0;
    result=a+b;
    console.log(result);
    
    }
    add(3,4);
    // ans 7
    
    // que 5
    var X=21;
    var girl=function(){
    console.log(X);
    var X=21;
    };
    console.log(girl)
    girl();
    // undefined error
    
    // que 6
    var x = 21;
    girl ();
    console.log(x)
    function girl() {
    console.log(x);
    var x = 20;
    };
    // ans undefined error
    
    // que7
    var x = 21;
    a();
    b();
    console.log(a);
    a = function() {
        
      x = 20;
      console.log(x);
    };
    b = function() {
        
      x = 40;
      console.log(x);
    };
    //ans  // reference error
    //que 8.show the code for factorial of five

      const n=5;
      let fact=1
        for(let i=1;i<=5;i++){
        fact*=i;
      }
      console.log(fact);
      // 120
    
      
    