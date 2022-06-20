function birthday(s, d, m) {
    var count = 0
    var sum = 0
    for(var index = 0; index <= (s.length - m); index ++){
        for(var index2 = 0; index2 < m; index2 ++){
            sum = sum + s[index + index2];
        }
        if(sum === d){
            count += 1
        }
        sum = 0
    }
    return count
}
console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));
// 3