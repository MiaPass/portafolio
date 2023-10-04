/* eslint-disable react/style-prop-object */
/* ----------- Modules --------------- */

import React, { useState } from "react";

/* ----------- Styles --------------- */

import "../../styles/Home.css";

/* ----------- Media --------------- */

import bg from "../../styles/multimedia/welcomeImg.png";

/* -------- Techs ------------ */

import htmlLogo from "../../styles/multimedia/svg/html.svg";
import cssLogo from "../../styles/multimedia/svg/css.svg";
import javascriptLogo from "../../styles/multimedia/svg/javascript.svg";
import reactLogo from "../../styles/multimedia/svg/react.svg";
import typescriptLogo from "../../styles/multimedia/svg/typescript.svg";
import mongodbLogo from "../../styles/multimedia/svg/mongodb.svg";
import firebaseLogo from "../../styles/multimedia/svg/firebase.svg";
import nodejsLogo from "../../styles/multimedia/svg/nodejs.svg";
import expressLogo from "../../styles/multimedia/svg/express.svg";
import gitLogo from "../../styles/multimedia/svg/git.svg";
import pg4Logo from "../../styles/multimedia/svg/postgresql.svg";
import reduxLogo from "../../styles/multimedia/svg/redux.svg";

/* -------- Projects ------------ */

import share_it_1 from "../../styles/multimedia/share-it/1.png";
import share_it_2 from "../../styles/multimedia/share-it/2.png";
import share_it_3 from "../../styles/multimedia/share-it/3.png";
import share_it_4 from "../../styles/multimedia/share-it/4.png";
import share_it_5 from "../../styles/multimedia/share-it/5.png";

import videoInfinity from "../../styles/multimedia/infinity/2023-10-04 10-53-25.mp4";

import videoL2Rossek from "../../styles/multimedia/L2Rossek/2023-10-04 11-47-21.mp4";

/* ----------- -+-+-+-+-+-+- --------------- */

export default function Home() {
	let [navName, setNavName] = useState("");

	let [ariaValue, setAriaValue] = useState("false");

	var w = window.innerWidth;

	console.log(w);

	const handleHamb = (e) => {
		if (w < 600)
			if (ariaValue === "false") {
				setNavName("Menu_navOpen__LJerN");
				setAriaValue("true");
			} else {
				setNavName("");
				setAriaValue("false");
			}
	};

	return (
		<>
			<div className="container Home_container__bCOhY">
				<div className="Menu_todoElMenu__Nbzzf false">
					<div className="all-menu Menu_socialMediaBox__UDt4r">
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.github.com/MiaPass"
						>
							<svg
								id="svg"
								width="24"
								height="24"
								fill="currentColor"
								class="bi bi-github"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg>
						</a>
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.linkedin.com/in/ninamiapassalia/"
						>
							<svg
								id="svg"
								width="24"
								height="24"
								fill="currentColor"
								class="bi bi-linkedin"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg>
						</a>
					</div>
					<nav className="Menu_navMenu__EoVm6" id={navName}>
						<a href="/#welcome">Inicio</a>
						<a href="/#about-me">Sobre Mi</a>
						<a href="/#technologies">Tecnologias</a>
						<a href="/#projects">Proyectos</a>
					</nav>
					<div className="Menu_buttonBox__nqN5v" onClick={(e) => handleHamb(e)}>
						<div
							className="hamburger-react"
							aria-expanded={ariaValue}
							role="button"
							style={{
								cursor: "pointer",
								height: "48px",
								position: "relative",
								transition: "0.4s cubic-bezier(0, 0, 0, 1)",
								userSelect: "none",
								width: "48px",
								outline: "none",
							}}
							tabIndex={0}
						>
							<div
								style={{
									background: "currentColor",
									height: "2px",
									left: "12px",
									position: "absolute",
									width: "12.5px",
									borderRadius: "undefined 0 0 undefined",
									top: "15px",
									transition: "0.4s cubic-bezier(0, 0, 0, 1)",
									transform: "none",
								}}
							/>
							<div
								style={{
									background: "currentColor",
									height: "2px",
									left: "50%",
									position: "absolute",
									width: "12.5px",
									borderRadius: "0 undefined undefined 0",
									top: "15px",
									transition: "0.4s cubic-bezier(0, 0, 0, 1)",
									transform: "none",
								}}
							/>
							<div
								style={{
									background: "currentColor",
									height: "2px",
									left: "12px",
									position: "absolute",
									width: "12.5px",
									borderRadius: "undefined 0 0 undefined",
									top: "23px",
									transition: "0.4s cubic-bezier(0, 0, 0, 1)",
									opacity: 1,
									transform: "none",
								}}
							/>
							<div
								style={{
									background: "currentColor",
									height: "2px",
									left: "50%",
									position: "absolute",
									width: "12.5px",
									borderRadius: "0 undefined undefined 0",
									top: "23px",
									transition: "0.4s cubic-bezier(0, 0, 0, 1)",
									opacity: 1,
									transform: "none",
								}}
							/>
							<div
								style={{
									background: "currentColor",
									height: "2px",
									left: "12px",
									position: "absolute",
									width: "12.5px",
									borderRadius: "undefined 0 0 undefined",
									top: "31px",
									transition: "0.4s cubic-bezier(0, 0, 0, 1)",
									transform: "none",
								}}
							/>
							<div
								style={{
									background: "currentColor",
									height: "2px",
									left: "50%",
									position: "absolute",
									width: "12.5px",
									borderRadius: "0 undefined undefined 0",
									top: "31px",
									transition: "0.4s cubic-bezier(0, 0, 0, 1)",
									transform: "none",
								}}
							/>
						</div>
					</div>
				</div>
				<div
					id="welcome"
					className="Welcome_welcomeBox__QG81Z welcome-box-animation"
				>
					<div className="Welcome_textBox__RRikN">
						<h1>Mia Passalia</h1>
						<h2>Desarrollador Fullstack.</h2>
					</div>
					<div className="Welcome_imageSection__xyxjn">
						<img
							alt="Error"
							sizes="100vw"
							src={bg}
							decoding="async"
							data-nimg="fill"
							style={{
								position: "absolute",
								height: "100%",
								// width: "100%",
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
								color: "transparent",
							}}
						/>
					</div>
				</div>
				<div id="about-me" className="about-me-box AboutMe_aboutMeBox__seJDS">
					<div className="text1-animate AboutMe_textBox1__G2kU8">
						<p>
							Mi nombre es <i>Mia</i>, tengo 24 años y soy de Argentina, en el
							2021 decidi darle un giro a mi vida y comenzar a estudiar
							desarrollo de software.
						</p>
						<p className="AboutMe_textPresentation2__dQBiS">
							Me considero una persona creativa e innovadora, poniendo como
							principal característica la flexibilidad y la iniciativa para
							investigar y adaptarme a las nuevas tecnologías, estoy en
							constante aprendizaje y evolucionando como desarrollador en cada
							paso.
						</p>
					</div>
					<div className="textBF-animate AboutMe_textBoxF__yRHO_">
						<h4>En el Front-end:</h4>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z" />
							</svg>
							Realizo sitios responsive con React o Solid.
						</p>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z" />
							</svg>
							Utilizo Photoshop, Ilustrator, entre otros, para adaptar imagenes
							a mi preferencia y exportar en diferentes formatos para mejorar el
							rendimiento.
						</p>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z" />
							</svg>
							Dominio de CSS y SASS, tambien me adapto perfectamente a
							diferentes frameworks o librerias, como Bootstrap, tailwind, etc.
						</p>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z" />
							</svg>
							Adminisitro datos a travez de metodos HTTP, utilizando fetch o
							axios para realizar peticiones.
						</p>
					</div>
					<div className="textBF-animate AboutMe_textBoxB__7iooz">
						<h4>En el Back-end:</h4>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								version="1.1"
								viewBox="0 0 32 32"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								data-darkreader-inline-stroke=""
								data-darkreader-inline-fill=""
							>
								<path d="M16 27.534c-5.323 0-9.641-1.44-9.641-3.214 0-0.97 0-2.031 0-3.214 0-0.279 0.14-0.545 0.341-0.803 1.075 1.384 4.813 2.41 9.301 2.41s8.226-1.026 9.301-2.41c0.201 0.259 0.34 0.524 0.34 0.803 0 0.931 0 1.918 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 21.106c-5.323 0-9.641-1.441-9.641-3.214 0-0.97 0-2.030 0-3.214 0-0.17 0.064-0.336 0.151-0.5v0c0.049-0.103 0.113-0.204 0.19-0.304 1.075 1.383 4.813 2.41 9.301 2.41s8.226-1.027 9.301-2.41c0.077 0.1 0.141 0.201 0.19 0.304v0c0.086 0.164 0.151 0.33 0.151 0.5 0 0.931 0 1.917 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 14.679c-5.323 0-9.641-1.44-9.641-3.214 0-0.508 0-1.044 0-1.607 0-0.511 0-1.041 0-1.607 0-1.774 4.318-3.214 9.641-3.214s9.641 1.44 9.641 3.214c0 0.501 0 1.033 0 1.607 0 0.492 0 1.011 0 1.607 0 1.774-4.318 3.214-9.641 3.214zM16 6.645c-3.55 0-6.427 0.718-6.427 1.607s2.878 1.607 6.427 1.607c3.55 0 6.427-0.718 6.427-1.607s-2.878-1.607-6.427-1.607z"></path>
							</svg>
							Creo API rest utilizando el modulo de Express.
						</p>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								version="1.1"
								viewBox="0 0 32 32"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								data-darkreader-inline-stroke=""
								data-darkreader-inline-fill=""
							>
								<path d="M16 27.534c-5.323 0-9.641-1.44-9.641-3.214 0-0.97 0-2.031 0-3.214 0-0.279 0.14-0.545 0.341-0.803 1.075 1.384 4.813 2.41 9.301 2.41s8.226-1.026 9.301-2.41c0.201 0.259 0.34 0.524 0.34 0.803 0 0.931 0 1.918 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 21.106c-5.323 0-9.641-1.441-9.641-3.214 0-0.97 0-2.030 0-3.214 0-0.17 0.064-0.336 0.151-0.5v0c0.049-0.103 0.113-0.204 0.19-0.304 1.075 1.383 4.813 2.41 9.301 2.41s8.226-1.027 9.301-2.41c0.077 0.1 0.141 0.201 0.19 0.304v0c0.086 0.164 0.151 0.33 0.151 0.5 0 0.931 0 1.917 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 14.679c-5.323 0-9.641-1.44-9.641-3.214 0-0.508 0-1.044 0-1.607 0-0.511 0-1.041 0-1.607 0-1.774 4.318-3.214 9.641-3.214s9.641 1.44 9.641 3.214c0 0.501 0 1.033 0 1.607 0 0.492 0 1.011 0 1.607 0 1.774-4.318 3.214-9.641 3.214zM16 6.645c-3.55 0-6.427 0.718-6.427 1.607s2.878 1.607 6.427 1.607c3.55 0 6.427-0.718 6.427-1.607s-2.878-1.607-6.427-1.607z"></path>
							</svg>
							Conecto bases de datos no relacional y relacionales usando
							diferentes metodos de conexion (MySQL, Mongoose, etc.).
						</p>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								version="1.1"
								viewBox="0 0 32 32"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								data-darkreader-inline-stroke=""
								data-darkreader-inline-fill=""
							>
								<path d="M16 27.534c-5.323 0-9.641-1.44-9.641-3.214 0-0.97 0-2.031 0-3.214 0-0.279 0.14-0.545 0.341-0.803 1.075 1.384 4.813 2.41 9.301 2.41s8.226-1.026 9.301-2.41c0.201 0.259 0.34 0.524 0.34 0.803 0 0.931 0 1.918 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 21.106c-5.323 0-9.641-1.441-9.641-3.214 0-0.97 0-2.030 0-3.214 0-0.17 0.064-0.336 0.151-0.5v0c0.049-0.103 0.113-0.204 0.19-0.304 1.075 1.383 4.813 2.41 9.301 2.41s8.226-1.027 9.301-2.41c0.077 0.1 0.141 0.201 0.19 0.304v0c0.086 0.164 0.151 0.33 0.151 0.5 0 0.931 0 1.917 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 14.679c-5.323 0-9.641-1.44-9.641-3.214 0-0.508 0-1.044 0-1.607 0-0.511 0-1.041 0-1.607 0-1.774 4.318-3.214 9.641-3.214s9.641 1.44 9.641 3.214c0 0.501 0 1.033 0 1.607 0 0.492 0 1.011 0 1.607 0 1.774-4.318 3.214-9.641 3.214zM16 6.645c-3.55 0-6.427 0.718-6.427 1.607s2.878 1.607 6.427 1.607c3.55 0 6.427-0.718 6.427-1.607s-2.878-1.607-6.427-1.607z"></path>
							</svg>
							Creo y trabajo con modelos relacionales y no relacionales.
						</p>
						<p>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								version="1.1"
								viewBox="0 0 32 32"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
								data-darkreader-inline-stroke=""
								data-darkreader-inline-fill=""
							>
								<path d="M16 27.534c-5.323 0-9.641-1.44-9.641-3.214 0-0.97 0-2.031 0-3.214 0-0.279 0.14-0.545 0.341-0.803 1.075 1.384 4.813 2.41 9.301 2.41s8.226-1.026 9.301-2.41c0.201 0.259 0.34 0.524 0.34 0.803 0 0.931 0 1.918 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 21.106c-5.323 0-9.641-1.441-9.641-3.214 0-0.97 0-2.030 0-3.214 0-0.17 0.064-0.336 0.151-0.5v0c0.049-0.103 0.113-0.204 0.19-0.304 1.075 1.383 4.813 2.41 9.301 2.41s8.226-1.027 9.301-2.41c0.077 0.1 0.141 0.201 0.19 0.304v0c0.086 0.164 0.151 0.33 0.151 0.5 0 0.931 0 1.917 0 3.214 0 1.773-4.318 3.214-9.641 3.214zM16 14.679c-5.323 0-9.641-1.44-9.641-3.214 0-0.508 0-1.044 0-1.607 0-0.511 0-1.041 0-1.607 0-1.774 4.318-3.214 9.641-3.214s9.641 1.44 9.641 3.214c0 0.501 0 1.033 0 1.607 0 0.492 0 1.011 0 1.607 0 1.774-4.318 3.214-9.641 3.214zM16 6.645c-3.55 0-6.427 0.718-6.427 1.607s2.878 1.607 6.427 1.607c3.55 0 6.427-0.718 6.427-1.607s-2.878-1.607-6.427-1.607z"></path>
							</svg>
							Hago uso de modulos que se encuentrar en npmjs.
						</p>
					</div>
				</div>
				<div
					id="technologies"
					className="tech-skill-box TechSkill_techSkillBox__vP_Fq"
				>
					<div className="TechSkill_techTitleBox__OmRCk">
						<h2 className="tech-title TechSkill_techTitle__Z8Tz6">
							Tech Skill
						</h2>
						<p className="tech-para TechSkill_techPara__B8zn8">
							Estas son algunas de las tecnologias a cuál mas le dedico tiempo
						</p>
					</div>
					<div className="TechSkill_techLinkBox__ru9mo">
						<a href="/" className="item-1 TechSkill_item1__OUBha">
							<img
								alt="erro"
								sizes="100vw"
								src={htmlLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-2 TechSkill_item2__itcKB">
							<img
								alt="erro"
								sizes="100vw"
								src={cssLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-3 TechSkill_item3__7mcLV">
							<img
								alt="erro"
								sizes="100vw"
								src={javascriptLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-4 TechSkill_item4__Glp6c">
							<img
								alt="erro"
								sizes="100vw"
								src={reactLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-5 TechSkill_item5__ZW_1a">
							<img
								alt="erro"
								sizes="100vw"
								src={typescriptLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-6 TechSkill_item6__nHFTr">
							<img
								alt="erro"
								sizes="100vw"
								src={mongodbLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-7 TechSkill_item7__ml3Cz">
							<img
								alt="erro"
								sizes="100vw"
								src={firebaseLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-8 TechSkill_item8__95_RX">
							<img
								alt="erro"
								sizes="100vw"
								src={nodejsLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-9 TechSkill_item9__SsReS">
							<img
								alt="erro"
								sizes="100vw"
								src={expressLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-10 TechSkill_item10__TAWjQ">
							<img
								alt="erro"
								sizes="100vw"
								src={gitLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-11 TechSkill_item11__tbvGo">
							<img
								alt="erro"
								sizes="100vw"
								src={pg4Logo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
						<a href="/" className="item-12 TechSkill_item12__lJzvU">
							<img
								alt="erro"
								sizes="100vw"
								src={reduxLogo}
								style={{
									position: "absolute",
									height: 80,
									width: 80,
									inset: 0,
									color: "transparent",
								}}
							/>
						</a>
					</div>
				</div>
				<div id="projects" className="MyProjects_allMyProjects__fSUD_">
					<div className="MyProjects_myProjectsTitle__Rlqqc">
						<h2>Mis Proyectos</h2>
					</div>
					<a className="MyProjects_eachProject__h6ebv" id="project" href="/">
						<div className="MyProjects_imgBox__VQ5C_">
							<video
								alt="erro"
								sizes="100vw"
								src={videoInfinity}
								type="video/mp4"
								playsinline="playsinline"
								muted="muted"
								loop="loop"
								autoplay="autoplay"
								decoding="async"
								data-nimg="fill"
								loading="lazy"
								style={{
									position: "absolute",
									height: "100%",
									width: "100%",
									left: 0,
									top: 0,
									right: 0,
									bottom: 0,
									color: "transparent",
								}}
							/>
						</div>
						<div className="MyProjects_titleBox__NKvvd">
							<h3>Infinity</h3>
							<p className="MyProjects_paraTech__o303V">
								React, Redux, Css, Swiper
							</p>
						</div>
					</a>
					<a
						className="MyProjects_eachProject__h6ebv"
						id="project"
						href="https://github.com/henry19ag15/finalproject"
					>
						<div className="MyProjects_imgBox__VQ5C_">
							<img
								alt="erro"
								sizes="100vw"
								src={
									(share_it_1, share_it_2, share_it_3, share_it_4, share_it_5)
								}
								decoding="async"
								data-nimg="fill"
								loading="lazy"
								style={{
									position: "absolute",
									height: "100%",
									width: "100%",
									left: 0,
									top: 0,
									right: 0,
									bottom: 0,
									color: "transparent",
								}}
							/>
						</div>

						<div className="MyProjects_titleBox__NKvvd">
							<h3>Share It</h3>
							<p className="MyProjects_paraTech__o303V">
								ReactJs, NodeJs, Mercado Pago, Firebase
							</p>
						</div>
					</a>
					<a
						className="MyProjects_eachProject__h6ebv"
						id="project"
						href="https://l2rossek.com/donate/index.html"
					>
						<div className="MyProjects_imgBox__VQ5C_">
							<video
								alt="erro"
								sizes="100vw"
								src={videoL2Rossek}
								type="video/mp4"
								playsinline="playsinline"
								muted="muted"
								loop="loop"
								autoplay="autoplay"
								decoding="async"
								data-nimg="fill"
								loading="lazy"
								style={{
									position: "absolute",
									height: "100%",
									width: "100%",
									left: 0,
									top: 0,
									right: 0,
									bottom: 0,
									color: "transparent",
								}}
							/>
						</div>
						<div className="MyProjects_titleBox__NKvvd">
							<h3>L2 Rossek</h3>
							<p className="MyProjects_paraTech__o303V">HTML, CSS</p>
						</div>
					</a>
				</div>
				<footer className="Footer_footerBox__jA3x0">
					<div className="Footer_menuBox__2n2GQ">
						<a href="#welcome">Inicio</a>
						<a href="#about-me">Sobre mi</a>
						<a href="#technologies">Tecnologias</a>
					</div>
					<div className="Footer_end__lTsil">
						<p>Ianina Mia Passalia 2023</p>
					</div>
				</footer>
			</div>
		</>
	);
}
