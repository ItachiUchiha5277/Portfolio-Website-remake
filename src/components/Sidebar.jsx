import React from "react";
import "../styles/sideBar.css";
import DualLetter from "../assets/DualLetter.png";
import Github from "../assets/github_logo.png";
import Reddit from "../assets/reddit_logo.png";
import HashNode from "../assets/hashnode_logo.png";

export const Sidebar = () => {
	return (
		<nav>
			<div className="profile-container">
				<img className="image" src={DualLetter} alt="" />
				<h5 className="name">Nishil</h5>
				<p className="description">Programmer</p>
			</div>
			<ul>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Skills</a>
				</li>
				<li>
					<a href="#">Work</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
				<div className="social-container">
					<a
						href="https://github.com/ItachiUchiha5277/"
						target="_blank"
					>
						<img className="github" src={Github} alt="" />
					</a>
					<a
						href="https://www.reddit.com/user/Itachi_my_fav"
						target="_blank"
					>
						<img className="reddit" src={Reddit} alt="" />
					</a>
					<a href="#" target="_blank">
						<img className="hashnode" src={HashNode} alt="" />
					</a>
				</div>
			</ul>
		</nav>
	);
};
