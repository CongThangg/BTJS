/** Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 * Khối 1: input
 * + chieuDai
 * + chieuRong
 * 
 * Khối 2: các bước thực hiện
 * B1: tạo biến gán giá trị
 * 
 * B2:
 *  dienTich = chieuDai * chieuRong
 *  chuVi = (chieuDai + chieuRong) * 2
 * 
 * B3: hiển thị kết quả
 * 
 * Khối 3: output
 * + dienTich
 * + chuVi
 */


//B1
var chieuDai = 20;
var chieuRong = 15;
var dienTich = 0;
var chuVi = 0;

//B2
dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

//B3
console.log("Diện tích HCN:" + dienTich );
console.log("Chu vi HCN:" + chuVi );