import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import './style/landingPage.css';
import Trending from './components/Trending';
import Superhero from './components/Superhero';
import Action from './components/Action';

function App() {
  return (
    <div>
		{/* Intro Section */}
		<div className='myBG'>
    		<NavigationBar/>
			<Intro/>
		</div>
		{/* End Of Intro */}

		{/* Trending Section */}
		<div className='trending'>
			<Trending/>
		</div>
		{/* End Of Trending */}

		{/* SUperhero Section */}
		<div className='superhero'>
			<Superhero/>
		</div>

		{/* SUperhero Section */}
		<div className='action'>
			<Action/>
		</div>
    </div>
  )
}

export default App;
