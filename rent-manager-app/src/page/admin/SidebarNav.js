import React from "react";
import { Link, NavLink } from 'react-router-dom';

const SidebarNav = () => {
  return (
    <ul className="sidebar-nav">
      <li className="sidebar-header">
        Quản lí chức năng
      </li>
<<<<<<< HEAD

      <li className="sidebar-item">
        <NavLink to="/admin/account-manager" className="sidebar-link">
=======
      <li className="sidebar-item">
        <NavLink to="/admin" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Thống kê</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/admin/account-management" className="sidebar-link">
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý tài khoản</span>
        </NavLink>
      </li>
      <li className="sidebar-item">
        <NavLink to="/admin/room-management" className="sidebar-link">
>>>>>>> 710218f6c061481477397eb534333dc8e5e7326c
          <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Quản lý phòng trọ</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default SidebarNav;