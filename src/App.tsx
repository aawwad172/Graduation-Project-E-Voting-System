import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testing from "@test/Testing";
import SignInPage from "@pages/SignInPage";
import SignUpPage from "@pages/SignUpPage";
import Dashboard from "@pages/Admin/Dashboard";
import ElectionDetails from "@pages/Admin/ElectionDetails";
import ElectionsPage from "@pages/Admin/ElectionsPage";
import AboutUsPage from "@pages/AboutUsPage";
import ProfilePage from "@pages/Admin/ProfilePage";

// This is the main component of the app. It will render the testing component and the sign in page.

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Testing />}
				/>
				<Route
					path="/home"
					element={<Dashboard />}
				/>
				<Route
					path="/signin"
					element={<SignInPage />}
				/>
				<Route
					path="/signup"
					element={<SignUpPage />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/election/:id"
					element={<ElectionDetails />}
				/>
				<Route
					path="/elections"
					element={<ElectionsPage />}
				/>
				<Route
					path="/about-us"
					element={<AboutUsPage inDashboard={true} />}
				/>
				<Route
					path="/profile"
					element={<ProfilePage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
