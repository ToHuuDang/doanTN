INSERT IGNORE INTO rental_home.roles (name) VALUES
	 ('ROLE_ADMIN'),
	 ('ROLE_RENTALER'),
	 ('ROLE_USER');
	 
INSERT IGNORE INTO rental_home.location (id, city_name) 
VALUES 
    (1, "Hà Nội"),
    (2, "Đà Nẵng"),
    (3, "TP Hồ Chí Minh"),
    (4, "Cần Thơ"),
    (5, "Hải Phòng"),
    (6, "Nha Trang"),
    (7, "Huế"),
    (8, "Vũng Tàu"),
    (9, "Quy Nhơn"),
    (10, "Đà Lạt");


INSERT IGNORE INTO rental_home.category(id,name) values(1,"Bất động sản"), (2,"Phòng trọ"), (3,"Chung cư mini")