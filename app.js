
function areBracketsBalanced(expr){

    let stack = []; 
    for(let i = 0; i < expr.length; i++) 
    { 
        let x = expr[i]; 
  
        if (x == '(' || x == '[' || x == '{') 
        { 
            stack.push(x); 
            continue; 
        } 
  
        if (stack.length == 0){ 
            return "not balanced"; 
        }
        let check; 
        switch (x){ 
        case ')': 
            check = stack.pop(); 
            if (check == '{' || check == '[') {
                return "not balanced"; 
            }
            break; 
        case '}': 
            check = stack.pop(); 
            if (check == '(' || check == '[') {
                return "not balanced"; 
            }
            break; 
  
        case ']': 
            check = stack.pop(); 
            if (check == '(' || check == '{') {
                return "not balanced"; 
            }
            break; 
        } 
    } 
    if(stack.length){
        return "not balanced"
    }
    else{
        return "balanced"
    }
} 

console.log(areBracketsBalanced("{(){[]}}"))             //balanced
console.log(areBracketsBalanced("{(){}{[]}}[{()[]}]") )  //balanced
console.log(areBracketsBalanced("{(){[]}}}"))            //not balanced
console.log(areBracketsBalanced("{(){[{}{]}}"))          //not balanced 