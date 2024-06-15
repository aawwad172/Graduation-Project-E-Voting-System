import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/soft-ui-dashboard.css";
import { Link, useLocation } from "react-router-dom";
// Link of the our website logo
import logo from "@assets/img/logos/logo.jpg";
import HomeIcon from "@components/Icons/HomeIcon";
import ElectionIcon from "@components/Icons/ElectionIcon";
import SideBarSection from "./SideBarSection";
import ProfileIcon from "@components/Icons/ProfileIcon";
import LogoutIcon from "@components/Icons/LogoutIcon";

import SideBarButton from "./SideBarButton";

const DashboardSidebar: React.FC = () => {
	const location = useLocation();

	return (
		<>
			<aside
				className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3"
				id="sidenav-main">
				<div className="sidenav-header">
					<i
						className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
						aria-hidden="true"
						id="iconSidenav"
					/>
					<Link
						to="/dashboard"
						className="navbar-brand m-0">
						<img
							src={logo}
							className="navbar-brand-img h-100"
							alt="main_logo"
						/>
						<span className="ms-1 font-weight-bold">Dashboard</span>
					</Link>
				</div>
				<hr className="horizontal dark mt-0" />
				<div
					className="collapse navbar-collapse w-auto"
					id="sidenav-collapse-main">
					<ul className="navbar-nav">
						<SideBarButton
							title="Dashboard"
							route="/dashboard"
							SVG={<HomeIcon />}
						/>
						<SideBarButton
							title="Elections"
							route="/elections"
							SVG={<ElectionIcon />}
						/>
						<SideBarSection title="Account pages" />

						<SideBarButton
							title="Profile"
							route="/profile"
							SVG={<ProfileIcon />}
						/>
						<SideBarButton
							title="logout"
							route="/signin"
							SVG={<LogoutIcon />}
						/>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default DashboardSidebar;
