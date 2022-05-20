import React from "react";
import { HexagonalGrid } from "./HexagonalGrid";
import { MainAbout } from "./MainAbout";
import { MainText } from "./MainText";

export const RightContent = () => {
	return (
		<div className="right-container">
			<MainText />
			<HexagonalGrid />
			<MainAbout />
		</div>
	);
};
