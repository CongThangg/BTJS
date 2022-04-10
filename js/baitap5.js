/**Bài 5: Tính tổng 2 ký số
 * 
 * Khối 1: input
 * + num(số dương có 2 chữ số)
 * 
 * Khối 2: các bước xử lý
 * B1: khai báo biến, và gán giá trị khởi tạo
 * ten = num/10 ;
 * unit = num % 10;
 * 
 * sum = ten + unit;
 * 
 * B3: hiển thị kết quả
 * 
 * Khối 3: output
 * + sum(tông các chữ số)
 * 
 */

//B1
var num = 44;
var ten = 0;
var unit= 0;


//B2
ten = Math.floor(num/10);

unit = num % 10;

sum = ten + unit;

//B3
console.log("Tổng 2 chữ số: " + sum)