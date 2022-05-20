import React from "react";
import "./App.css";

import { MainText } from "./components/MainText";
import { HexagonalGrid } from "./components/HexagonalGrid";
import { Sidebar } from "./components/Sidebar";
import { RightContent } from "./components/RightContent";

function App() {
	return (
		<>
			<div className="app-container">
				<Sidebar />
				<RightContent />
			</div>
		</>
	);
}

export default App;
