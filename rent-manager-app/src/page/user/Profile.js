import React, { useState, useEffect } from "react";
import Footer from "../../common/Footer";
import SidebarNav from "./SidebarNav";
import Header from "../../common/Header";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const UserProfile = (props) => {
    const { authenticated, role, currentUser, location, onLogout } = props;

    const [imageFile, setImageFile] = useState(null);


    const onFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Perform file validation
            const allowedTypes = ["image/jpeg", "image/png"];
            const maxFileSize = 1 * 1024 * 1024; // 1MB
    
            // Check file type
            if (!allowedTypes.includes(file.type)) {
                toast.error("Only JPEG and PNG images are allowed.");
                return;
            }
    
            // Check file size
            if (file.size > maxFileSize) {
                toast.error("File size exceeds the maximum limit of 1MB.");
                return;
            }
    
            setImageFile(file);
        }
    };

    

    const handleSubmit = (event) => {

    };

    if (!authenticated) {
        return <Navigate
            to={{
                pathname: "/login",
                state: { from: location }
            }} />;
    }

    return (
        <>
            <Header authenticated={authenticated} currentUser={currentUser} onLogout={onLogout} />
            <div style={{marginTop : "140px"}}>
            </div>
            <main id="main">
            <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href="index.html">
                        <span className="align-middle"></span>
                    </a>
                    <SidebarNav />
                </div>
            </nav>

            <div className="main">

                <main style={{ margin: "20px 20px 20px 20px" }}>
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {
                                currentUser && currentUser.imageUrl ? (
                                    <img src={currentUser.imageUrl} alt={currentUser.name} style={{ width: "150px" }}/>
                                ) : (
                                    <div className="text-avatar" style={{ width: "150px" }}>
                                        <span style={{ width: "150px" }}>{currentUser && currentUser.name && currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                            <h2>{currentUser && currentUser.name}</h2>
                            <p className="profile-email">{currentUser && currentUser.email}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label">Email</label>
                                        <input type="email" className="form-control" name='email' value={currentUser && currentUser.email} id="inputEmail4" placeholder="Email" disabled />
                                    </div>
                                    <div class="mb-3 col-md-6">
                                        <label class="form-label" >Số điện thoại</label>
                                        <input type="text" className="form-control" name='phone' value={currentUser && currentUser.phone}  id="inputPassword4" placeholder="Số điện thoại"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="inputAddress">Họ và Tên</label>
                                    <input type="text" className="form-control" name='name' value={currentUser && currentUser.name} id="inputAddress" placeholder="Peter Parker" disabled />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="inputAddress">Địa chỉ</label>
                                    <input type="text" className="form-control" name='address' value={currentUser && currentUser.address} id="inputAddress" placeholder="Peter Parker"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Tải Hình Ảnh</label>
                                    <input class="form-control" accept=".png, .jpeg" type="file" onChange={onFileChange} />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
                </main>
            <Footer />
        </>
    );
};

export default UserProfile;
