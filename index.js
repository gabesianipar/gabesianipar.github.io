function MainPage() {
	return (
		<div id="home">
			<NavBar />
			<div class="header">
				<div class="typewriter">
					<h1>Hi! I'm Gabe. :D</h1>
				</div>
			</div>
			<Bio />
			<BioData />

			<h2>Scroll down to see some of the cool things I've done recently!</h2>
			<div class="down-arrow"></div>

			<Pictures />
			<Projects />
			<Skills />
			<Passions />
			<Socials />
			<Footer />
		</div>
	);
}

function Footer() {
	return (
		<footer>
			<p> &#169; 2023 Sianipar. All rights reserved.</p>
		</footer>
	);
}

function Bio() {
	return (
		<div class="bio">
			<p>
				Nice having you here! This is my personal website, all about me and the
				world I love.
			</p>
			<p>
				I'm an aspiring technologist. I'm interested in learning and growing as
				a contributor in lots of fields including software development,
				entrepreneurship, value investing, consulting, entertainment, AI/ML, and
				most importantly... Tetris.
			</p>
		</div>
	);
}

function BioData() {
	return (
		<>
			<div class="bio-data">
				<ul>
					<li>
						Student at <b>U</b>niversity of <b>S</b>outhern <b>C</b>alifornia
					</li>
					<li>
						<b>C</b>omputer <b>S</b>cience + <b>B</b>usiness <b>A</b>
						dministration
					</li>
					<li>Based in Los Angeles, California.</li>
					<li>Born and raised in Jakarta, Indonesia.</li>
					<li>
						Take a look at my{' '}
						<a href="https://gabe-sianipar.tiiny.site/" target="_blank">
							resume
						</a>
					</li>
					<li>
						<b>Let's talk! </b>
						<a href="mailto: gabrielbarita@gmail.com" target="_blank">
							gabrielbarita@gmail.com
						</a>
					</li>
				</ul>
				<div class="status">
					<p>
						<b>current status :</b>
					</p>
					<p>looking for projects to do over the summer break!</p>
				</div>
			</div>
		</>
	);
}

function NavBar() {
	return (
		<div className="navbar">
			<div class="topnav">
				<a class="active" href="#home">
					About Me
				</a>
				<a href="#projects">Projects</a>
				<a href="#skills">Skills</a>
				<a href="#passions">Passions</a>
				<a href="#socials">Socials</a>
			</div>
		</div>
	);
}

function Pictures() {
	return (
		<div class="images">
			<p>Moderating a verticals panel with some very awesome people!</p>
			<div class="desc">
				<div class="wrapper">
					<a href="https://hacksc.com" target="_blank">
						<img src="./img/hacksc_panel.png" width="40%"></img>
					</a>
				</div>
				<p>
					This past Febuary, HackSC gave me the wonderful opportunity to
					moderate and host a vertical panel within the hackathon. The panel was
					in a talk show format of sorts and had a few notable industry leaders
					from companies such as GoogleX, Yahoo and Duolingo. I had such a fun
					time conversating with them as I was able to pick their brains and
					learn from their way of thinking. The organization gave me the room to
					ask them questions specific to their fields like "what led you to
					decide to start with ocean farming first?" to Neil Dave of Tidal and
					"what advice do you have for young marketers today?" to Cammie Dunaway
					of Duolingo. Their answers were heard by not only me, but also a very
					interested live audience filled that consisted of aspiring college
					students – the young adults who hold the future of technology. It was
					a great learning experience for me and all-around surreal.
				</p>
			</div>

			<p>Public speaking and producing an opening ceremony!</p>
			<div class="desc">
				<div class="wrapper">
					<a href="https://hacksc.com" target="_blank">
						<img src="./img/linkedin-header.png" width="40%"></img>
					</a>
				</div>
				<p>
					Public speaking is indeed a passion of mine, but it wasn't always like
					this. I remember when I was in 8th grade I was struggling to translate
					my thoughts into words during debate and stumbling all over my
					arguments. Nevertheless, I trained to get better and the continuous
					improvement motivated me in something I can only describe as a
					positive feedback loop. I've come a long way but emceeing has now
					become a role that I truly love being in. Also with HackSC, I was part
					of the production team that created the script and produced the
					opening ceremony, where we continuously improved the production
					elements over the span of 2 weeks to make it the most enjoyable
					experience possible for our hacker audience. The experience of hosting
					the opening ceremony in Bovard Auditorium, an iconic place that had
					George Carlin's first standup performance, holds a special place in my
					heart forever.
				</p>
			</div>

			<p>Starting a new consulting club on campus!</p>
			<div class="desc">
				<div class="wrapper">
					<a href="https://linktr.ee/uscavenues" target="_blank">
						<img src="./img/pointing.png" width="40%"></img>
					</a>
				</div>
				<p>
					Another thing that holds a special place in my heart is starting
					things. I love being in an environment of hopeful uncertainty and
					within that space, making decisions that have such great, and often
					times in the moment unimaginable trajectories. Building something from
					the ground up is as raw as the process gets and I do not hesitate to
					take any opportunity to start the foundation for something new. When
					Debra explained her vision for Avenues Consulting to me, I was
					immediately inspired and committed to see this enterprise go the whole
					way. The consulting club is still in its very early stages, but our
					team's common mission of sustainable and tangible impact is very much
					bright and alive. In the founding team full of some of the most
					enthusiastic and lively people on campus, I am the Director of
					Affairs. I am responsible for both internal organizational culture and
					external organizational relations. The road is long for this group,
					but it is also very exciting one we are ready to do what it takes to
					help bring to the world positive change.
				</p>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div id="projects">
			<h2>Projects with Computers</h2>
			<div class="row">
				<div class="column">
					<h3>My 3D version of Tetris</h3>
					<img src="./img/3d-tetris.png" width="50%"></img>
					<p>
						This project is in progress and is on track to be released
						open-source on my GitHub by May 2023.
					</p>
				</div>
				<div class="column">
					<h3>Tic Tac Toe with AI</h3>
					<img src="./img/ttt.png" width="50%"></img>
					<p>
						One of the required projects in the class "Introduction to
						Programming" offered by USC Computer Science. I programmed an n*n
						Tic Tac Toe game in C++ with AI implementation, and was able to
						learn about the MiniMax algorithm.
					</p>
				</div>
				<div class="column">
					<h3>YourSpace</h3>
					<img src="./img/yourspace.webp" width="50%"></img>
					<p>
						A productivity app I built with a team that was launched on the
						Google Play Store in 2021. We built this mobile app over the course
						of a couple of months using human-centered design then conducted A/B
						testing with a couple of high school friends.
					</p>
				</div>
			</div>
		</div>
	);
}

function Skills() {
	return (
		<div id="skills">
			<h2>Skills</h2>
			<div class="row">
				<div class="column">
					<h3>HTML + CSS + JavaScript</h3>
					<img src="./img/javascript.png" width="50%"></img>
					<p>
						Vanilla HTML/CSS/JS is always a great foundation for web developers.
						I learned these 3 languages and it started my exciting journey in
						full-stack — a journey that I'm still in for the long run.
					</p>
				</div>
				<div class="column">
					<h3>C++</h3>
					<img src="./img/C++.png" width="50%"></img>
					<p>
						The primary language used in my USC Computer Science classes. I
						found learning it to be very helpful in understanding what
						programming truly is. Learning the language really helps programmers
						see what's under the hood in terms of how the high-level language
						interacts with the machine itself.
					</p>
				</div>
				<div class="column">
					<h3>Python</h3>
					<img src="./img/python.png" width="50%"></img>
					<p>
						I learned Python as part of my Computer Science curriculum in high
						school where we learned the basics of programming. However, there's
						deeper and more interesting areas that Python really excels in.
						Currently, I'm in the progress of learning the AI and mathematical
						aspect of this language.
					</p>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<h3>React.js</h3>
					<img src="./img/react.jpeg" width="50%"></img>
					<p>
						Learning about the MERN stack as I'm writing this. This personal
						website was built with React.js.
					</p>
				</div>
				<div class="column">
					<h3>Flutter</h3>
					<img src="./img/flutter.png" width="50%"></img>
					<p>
						For YourSpace, I used this software development kit to build
						YourSpace and make it conveniently compatible for both iOS and
						Android systems. Unfortunately however, we were never able to launch
						it to the iOS app store because of financial constraints.
					</p>
				</div>
				<div class="column">
					<h3>Git and Version Control</h3>
					<img src="./img/github.png" width="50%"></img>
					<p>
						Version control is ridiculously important when working with
						teammates. I found git to be an extremely important skill in order
						to be a team player.
					</p>
				</div>
			</div>
		</div>
	);
}

function Passions() {
	return (
		<div id="passions">
			<h2>(A non-exclusive list of) my passions</h2>
			<div class="row">
				<div class="column">
					<h3>Basketball</h3>
					<a
						href="https://en.wikipedia.org/wiki/Sacramento_Kings"
						target="_blank"
					>
						<img src="./img/deaaron-fox.png" width="80%"></img>
					</a>
				</div>
				<div class="column">
					<h3>Food</h3>
					<a href="https://en.wikipedia.org/wiki/Granola" target="_blank">
						<img src="./img/granola.jpeg" width="80%"></img>
					</a>
				</div>
				<div class="column">
					<h3>Clothing</h3>
					<a href="https://golfwang.com/" target="_blank">
						<img src="./img/clothing.jpeg" width="80%"></img>
					</a>
				</div>
			</div>
			<div class="row">
				<div class="column">
					<h3>Computer-Generated Imagery</h3>
					<a
						href="https://www.techradar.com/news/video/software/applications/the-making-of-pixar-s-up-603600"
						target="_blank"
					>
						<img src="./img/up.jpg" width="80%"></img>
					</a>
				</div>
				<div class="column">
					<h3>Value Investing</h3>
					<a
						href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661"
						target="_blank"
					>
						<img src="./img/ben_graham.jpeg" width="80%"></img>
					</a>
				</div>
				<div class="column">
					<h3>Daft Punk</h3>
					<a
						href="https://en.wikipedia.org/wiki/Random_Access_Memories"
						target="_blank"
					>
						<img src="./img/daft_punk.webp" width="80%"></img>
					</a>
				</div>
			</div>
		</div>
	);
}

function Socials() {
	return (
		<div id="socials">
			<h2>Socials</h2>
			<a
				href="https://www.linkedin.com/in/gabe-sianipar-b9987221a"
				target="_blank"
			>
				<img src="./img/linkedin.png" height="60px"></img>
			</a>
			<a href="https://www.instagram.com/gabrielbarita/" target="_blank">
				<img src="./img/instagram.png" height="60px"></img>
			</a>
			<a href="https://github.com/gabesianipar" target="_blank">
				<img src="./img/github.png" height="60px"></img>
			</a>
		</div>
	);
}
ReactDOM.render(<MainPage />, document.getElementById('root'));
