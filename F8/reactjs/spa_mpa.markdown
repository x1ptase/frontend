# SPA & MPA
- ReactJS là 1 trong những thư viện tạo ra SPA
- Các "ông lớn" sử dụng SPA: Google, Facebook, X
- Các SPA khác: chotot, zingmp3,...

## Cách triển khai
- SPA - Single-Page Application --> CSR: Client side rendering
- MPA - Multiple-Page Application --> SSR: Server side rendering

---

## Sự khác biệt

### SPA
- Hiện đại hơn
- Không yêu cầu tải lại trang trong quá trình sử dụng

### MPA
- Cổ điển hơn
- Tải lại trang trong quá trình sử dụng (click vào đường link, chuyển sang,..)
- Viết theo mô hình MVC

## So sánh

### Tốc độ
- SPA nhanh hơn khi sử dụng (lần tải đầu có thể chậm)
    - Phần lớn tài nguyên được tải trong lần đầu
    - Trang chỉ tải thêm dữ liệu mới khi cần
- MPA chậm hơn khi sử dụng
    - Luôn tải lại toàn bộ trang khi truy cập và chuyển hướng

### Bốc tách
- SPA có phần Front-end riêng biệt
- MPA Front-end & Back-end phụ thuộc nhau nhiều hơn, được đặt trong cùng 1 dự án

### SEO
- SPA không thân thiện với SEO như MPA
- Trải nghiệm trên thiết bị di động tốt hơn

### UX
- SPA cho trải nghiệm tốt hơn, nhất là các thao tác chuyển trang
- Trải nghiệm trên thiết bị di động tốt hơn

### Qúa trình phát triển
- SPA dễ dàng tái sử dụng code [component]
- SPA bốc tách FE & BE
    - Chia team phát triển song song
    - Phát triển thêm mobile app dễ dàng

### Phụ thuộc JavaScript
- SPA phụ thuộc hoàn toàn vào JavaScript
- MPA có thể không cần JavaScript

---

## Chọn SPA hay MPA?
- Không có thứ gì luôn hoàn hảo trong mọi trường hợp
- Trang bán hàng đơn giản, không phát triển thêm mobile app --> MPA (không viết thêm API, bóc tách, deploy nhanh hơn, chi phí phát triển thấp)
- Quan tâm đến trải nghiệm người dùng, mượt mà, phát triển thêm --> SPA (chia team front-end, back-end, chi phí cao)

- Performence: 
    - SPA giảm tải cho server, trình duyệt tự đọc script và render dữ liệu
    - MPA nhiều người sử dụng thì request sẽ tải hết lên server, mỗi thao tác chuyển trang đều phải request lên server 1 cái --> tăng tải lên server --> tốn thêm chi phí cho máy chủ, hạ tầng

