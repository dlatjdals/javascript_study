var a = 30
var b = 50
var c = 10

if (a <= b && a <= c) {
    console.log ('a가 최소값입니다')
    if (a >= b && a >= c) {
        console.log ('a가 최대값입니다')   
    }
    else if (b >= a && b >= c) {
        console.log ('b가 최대값입니다')
    }
    else  {
        console.log ('c가 최대값입니다')
    }
} else if (b <= a && b <= c) {
    console.log ('b가 최소값입니다')
    if (a >= b && a >= c) {
        console.log ('a가 최대값입니다')
    
        
    }
    else if (b >= a && b >= c) {
        console.log ('b가 최대값입니다')
    }
    else  {
        console.log ('c가 최대값입니다')
    }
} else  {
    console.log ('c가 최소값입니다')
    if (a >= b && a >= c) {
        console.log ('a가 최대값입니다')
    
        
    }
    else if (b >= a && b >= c) {
        console.log ('b가 최대값입니다')
    }
    else  {
        console.log ('c가 최대값입니다')
    }
}
 
