/** Bài 3: Quy đổi tiền
 * Khối 1: input
 * + gia1Usd
 * + soUsd
 * 
 * Khối 2: các bước xử lý
 * B1: tạo biến gán giá trị
 * 
 * B2: xây dựng công thức
 * giaUsd = soUsd * gia1Usd
 * 
 * B3: hiển thị kết quả
 * 
 * Khối 3: output
 * + Xuất ra số tiền sau quy đổi VNĐ
 */

//B1
var gia1Usd = 23500;
var soUsd = 0;

//B2
var soUsd = window.prompt('Số USD cần đổi:');
giaUsd = soUsd * gia1Usd;

//B3
alert("Giá quy đổi sang VNĐ:" + giaUsd.toLocaleString() + "VNĐ")

