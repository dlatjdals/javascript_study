var count = 0;
while (true) {
    if (count > 5) {
        console.log('end');
        break;
    } else {
        console.log('count: ', count);
        count++;
    }
    
}

var count1 = 0;
for (;;) {
    if (count > 10000) {
    console.log('무한루프!!');
    break;
    } else {
        console.log('count: ', count);
        count++
    }
}