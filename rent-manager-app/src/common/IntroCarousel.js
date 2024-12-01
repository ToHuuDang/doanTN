import React, { Component } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

class IntroCarosel extends Component {
    render() {
        return (
            <>
                <div className="intro intro-carousel swiper position-relative">



                    <Swiper spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]} className="swiper-wrapper">
                        <SwiperSlide className="carousel-item-b swiper-slide" >
                            <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(assets/img/property-8.jpg)` }}>
                                <div className="overlay overlay-a"></div>
                                <div className="intro-content display-table">
                                    <div className="table-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="intro-body">
                                                        <p className="intro-title-top">Nơi xây dựng tổ ấm của bạn
                                                            <br /> 
                                                        </p>
                                                        <h1 className="intro-title mb-4 ">
                                                            <span className="color-b">Phòng trọ </span> giá tốt tại
                                                            <br /> Đà Nẵng
                                                        </h1>
                                                        <p className="intro-subtitle intro-price">
                                                            <a href="/rental-home"><span className="price-a">Ngay đây!</span></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="carousel-item-b swiper-slide" >
                            <div className="swiper-slide carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(assets/img/post-4.jpg)` }}>
                                <div className="overlay overlay-a"></div>
                                <div className="intro-content display-table">
                                    <div className="table-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="intro-body">
                                                        <p className="intro-title-top">Nhà bao đẹp, bao sang xịn
                                                            <br /> Goodjob!
                                                        </p>
                                                        <h1 className="intro-title mb-4">
                                                            <span className="color-b">Hơn 1 Bilion </span> Phòng trọ
                                                            <br /> Đã được thuê
                                                        </h1>
                                                        <p className="intro-subtitle intro-price">
                                                            <a href="/rental-home"><span className="price-a">Ngay đây!</span></a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>

            </>
        )
    }
}

export default IntroCarosel;