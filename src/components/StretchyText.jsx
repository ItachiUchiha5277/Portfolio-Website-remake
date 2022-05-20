import React, { useState } from "react";
import "../styles/stretchyText.css";

export const StretchyText = (props) => {
	const [active, setActive] = useState(false);
	return (
		<div
			onMouseEnter={() => {
				setActive(true);
			}}
			onAnimationEnd={() => {
				setActive(false);
			}}
			className={`letter ${active ? "active" : ""}`}
		>
			{props.letter}
		</div>
	);
};
