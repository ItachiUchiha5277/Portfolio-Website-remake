import React from "react";
import { StretchyText } from "./StretchyText";
import { DualColorLetter } from "./DualColorLetter";
import "../styles/mainText.css";

export const MainText = () => {
	return (
		<>
			<div className="maintext-container">
				<div className="container">
					<StretchyText letter="H" />
					<StretchyText letter="i" />
					<StretchyText letter="," />
				</div>
				<div className="container">
					<StretchyText letter="I" />
					<StretchyText letter="'" />
					<StretchyText letter="m" />
					<StretchyText letter={<DualColorLetter />} />
					<StretchyText letter="i" />
					<StretchyText letter="s" />
					<StretchyText letter="h" />
					<StretchyText letter="i" />
					<StretchyText letter="l" />
					<StretchyText letter="," />
				</div>
				<div className="container">
					<StretchyText letter="P" />
					<StretchyText letter="r" />
					<StretchyText letter="o" />
					<StretchyText letter="g" />
					<StretchyText letter="r" />
					<StretchyText letter="a" />
					<StretchyText letter="m" />
					<StretchyText letter="m" />
					<StretchyText letter="e" />
					<StretchyText letter="r" />
				</div>
			</div>
		</>
	);
};
