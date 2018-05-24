import { render } from "inferno";
import { BrowserRouter, Link, Route } from "inferno-router";

import { About } from "./about";
import { Home } from "./home";

const App = () => (
	<BrowserRouter>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>

			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</div>
	</BrowserRouter>
);

render(<App />, document.getElementById("app"));

document.addEventListener("scatterLoaded", async scatterExtension => {
	const scatter = (window as any).scatter;
	(window as any).scatter = undefined;
	console.log({ scatter, scatterExtension });
	//const identity = await scatter.getIdentity();
	// console.log({ identity });
});
