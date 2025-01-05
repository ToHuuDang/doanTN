import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <>
                <section class="section-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-4">
                                <div class="widget-a">
                                    <div class="w-header-a">
                                        <h3 class="w-title-a text-brand">PhongTroSinhVien</h3>
                                    </div>
                                    <div class="w-body-a">
                                        <p class="w-text-a color-text-a">
                                            Giá cả phải chăng, phòng trọ chất lượng cao!!!
                                        </p>
                                    </div>
                                    <div class="w-footer-a">
                                        <ul class="list-unstyled">
                                            <li class="color-a">
                                                <span class="color-text-a">Email .</span> admin@gmail.com
                                            </li>
                                            <li class="color-a">
                                                <span class="color-text-a">Số điện thoại .</span> +84 394184220
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 section-md-t3">
                                <div class="widget-a">
                                    <div class="w-header-a">
                                        <h3 class="w-title-a text-brand">Loại hình kinh doanh</h3>
                                    </div>
                                    <div class="w-body-a">
                                        <div class="w-body-a">
                                            <ul class="list-unstyled">
                                                <li class="item-list-a">
                                                    <i class="bi bi-chevron-right"></i> <a href="#">Bất động sản</a>
                                                </li>
                                                <li class="item-list-a">
                                                    <i class="bi bi-chevron-right"></i> <a href="#">Chung cư mini</a>
                                                </li>
                                                <li class="item-list-a">
                                                    <i class="bi bi-chevron-right"></i> <a href="#">Phòng trọ sinh viên</a>
                                                </li>
                                                <li class="item-list-a">
                                                    <i class="bi bi-chevron-right"></i> <a href="#">Nhà ở</a>
                                                </li>
                                                <li class="item-list-a">
                                                    <i class="bi bi-chevron-right"></i> <a href="#">Chung cư cao cấp</a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 section-md-t3">
                                <div class="widget-a">
                                    <div class="w-header-a">
                                        <h3 class="w-title-a text-brand">Khu vực hoạt động</h3>
                                    </div>
                                    <div class="w-body-a">
                                        <ul class="list-unstyled">
                                            <li class="item-list-a">
                                                <i class="bi bi-chevron-right"></i> <a href="#">Hà Nội</a>
                                            </li>
                                            <li class="item-list-a">
                                                <i class="bi bi-chevron-right"></i> <a href="#">Đà Nẵng</a>
                                            </li>
                                            <li class="item-list-a">
                                                <i class="bi bi-chevron-right"></i> <a href="#">Thành phố Hồ Chí Minh</a>
                                            </li>
                                            <li class="item-list-a">
                                                <i class="bi bi-chevron-right"></i> <a href="#">Cần Thơ</a>
                                            </li>
                                            <li class="item-list-a">
                                                <i class="bi bi-chevron-right"></i> <a href="#">Hải Phòng</a>
                                            </li>
                                            <li class="item-list-a">
                                                <i class="bi bi-chevron-right"></i> <a href="#">Nha Trang</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <nav class="nav-footer">
                                    {/* <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">About</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">Property</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">Blog</a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul> */}
                                </nav>
                                <div class="socials-a">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="#">
                                                <i class="bi bi-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">
                                                <i class="bi bi-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">
                                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#">
                                                <i class="bi bi-linkedin" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;