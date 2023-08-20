import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import Nav from './Nav';
import SidebarNav from './SidebarNav';
import '../../assets/css/app.css';
import BarChart from '../rentaler/chart/BarChart';
import PieChart from '../rentaler/chart/PieChart';
import { UserData } from '../../utils/Data';

const DashboardAdmin = (props) => {
  const { authenticated, roleName, location, currentUser, onLogout } = props;

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
        {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
        },
    ],
});

  if (!authenticated) {
    return <Navigate
      to={{
        pathname: "/login-admin",
        state: { from: location }
      }} />;
  }

  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="index.html">
            <span className="align-middle">ADMIN PRO</span>
          </a>
          <SidebarNav />
        </div>
      </nav>

      <div className="main">
        <Nav onLogout={onLogout} currentUser={currentUser} />

        <main style={{ margin: "20px 20px 20px 20px" }}>
          <div className="container-fluid p-0">
            <div class="row mb-2 mb-xl-3">
              <div class="col-auto d-none d-sm-block">
                <h3><strong>✨</strong> Thông kê</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-xl-3">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col mt-0">
                        <h5 class="card-title">Tài khoản</h5>
                      </div>

                      <div class="col-auto">
                        <div class="stat text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign align-middle"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                      </div>
                    </div>
                    <h1 class="mt-1 mb-3">$47.482</h1>
                    <div class="mb-0">
                      <span class="badge badge-success-light"> <i class="mdi mdi-arrow-bottom-right"></i> 3.65% </span>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col mt-0">
                        <h5 class="card-title">Tin duyệt</h5>
                      </div>

                      <div class="col-auto">
                        <div class="stat text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag align-middle"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </div>
                      </div>
                    </div>
                    <h1 class="mt-1 mb-3">2.542</h1>
                    <div class="mb-0">
                      <span class="badge badge-danger-light"> <i class="mdi mdi-arrow-bottom-right"></i> -5.25% </span>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col mt-0">
                        <h5 class="card-title">Tin chưa duyệt</h5>
                      </div>

                      <div class="col-auto">
                        <div class="stat text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity align-middle"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        </div>
                      </div>
                    </div>
                    <h1 class="mt-1 mb-3">16.300</h1>
                    <div class="mb-0">
                      <span class="badge badge-success-light"> <i class="mdi mdi-arrow-bottom-right"></i> 4.65% </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-3">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col mt-0">
                        <h5 class="card-title">Tổng tin</h5>
                      </div>

                      <div class="col-auto">
                        <div class="stat text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        </div>
                      </div>
                    </div>
                    <h1 class="mt-1 mb-3">$20.120</h1>
                    <div class="mb-0">
                      <span class="badge badge-success-light"> <i class="mdi mdi-arrow-bottom-right"></i> 2.35% </span>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-8 d-flex">
                <div class="card flex-fill w-100">
                  <div class="card-header">
                    <div class="float-end">

                    </div>
                    <h5 class="card-title mb-0">Tổng Doanh Thu</h5>
                  </div>
                  <div class="card-body pt-2 pb-3">
                    <div class="chart chart-md"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                      <BarChart chartData={userData} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-lg-4 d-flex">
                <div class="card flex-fill w-100">
                  <div class="card-header">
                    <div class="float-end">
                    </div>
                    <h5 class="card-title mb-0">Các chi phí khác</h5>
                  </div>
                  <PieChart chartData={userData} />
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardAdmin;