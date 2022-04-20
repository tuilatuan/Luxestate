console.log("cau 1:");
let a = 4;
let b=12;
c =a+b;
console.log(c);
console.log("lay du " + b%a);
console.log("lay nguyen "+ b/a);
console.log("cau 2:");
let fname = "pham";
let lname = "tuan";
console.log(fname+ " " + lname);
console.log("cau3:");
let s = "happy new year";
console.log("chieu dai chuoi: " + s.length);
console.log("tu tren xuong: "+ s.indexOf('y'));
console.log("tu duoi len: "+ s.lastIndexOf('y'));
console.log("thay the:  " + s.replace('happy', 'lucky'));
console.log("cau 4:");
let d=14;
if(d==1){
    console.log("một kìa");
}
else if(d%2==0){
    console.log("true");
}
else{
    console.log("false");
}
console.log("cau 5:")
let g = 0;
for(let i=0;i<10;i++){
    // console.log("i là: " + i + "\n" + "kết quả là: " + (g+=i));
    g+=i;
}
console.log(g);
console.log("cau 6: ");
let n = 0;
while(n<=20){
    if(n%2==0){
        console.log(n);  
    }
    n+=1;
}
console.log("cau 7:");
// console.log("const: là hằng số ko thay đổi, có giá trị nhất định");
// console.log("var: ");
// console.log("let: ");
// console.log("bien toan cuc: sử dụng chung cho cho tất cả,pham vi rộng");
// console.log("bien cuc bo: sử dụng cho 1 vùng nhất định, phạm vi nhỏ ");
console.log("cau 8:");
let r=[1,2,3,4,5]
console.log(r);
console.log("so da xoa: "+ r.splice(3,2));
console.log(r);
console.log(r.length-1);
console.log(r)