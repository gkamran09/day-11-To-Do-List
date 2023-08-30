import './css/styles.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='nav-bar'>
        <nav>
          <ul className="nav-list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={'/done'}>Done</NavLink></li>
            <li><NavLink to={'/Help'}>Help</NavLink></li>
            <li>About</li>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
