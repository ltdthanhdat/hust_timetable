# Hust-Calendar

## Yêu cầu
- Docker
- Docker compose

## Cài đặt
1. Clone repo hoặc copy file docker-compose.yml
```bash
git clone https://github.com/ltdthanhdat/hust_timetable.git
cd hust_timetable
```
2. Run docker compose
```bash
docker compose up
```

## Cách sử dụng
1. Truy cập https://dt-ctt.hust.edu.vn/Students/Timetables.aspx
2. Inspect chọn tab network, mục Timetable.aspx và copy value của .AspNet.Cookies	
![image](https://github.com/ltdthanhdat/hust-timetable/assets/134133160/b3fed910-6078-4125-8af9-483a3e911a0c)
3. Dán giá trị vừa copy vào form ấn submit và thu được kết quả
![image](https://github.com/ltdthanhdat/hust-timetable/assets/134133160/2a6f9b2b-d2df-4f2f-acdd-b37ea00ccb16)
