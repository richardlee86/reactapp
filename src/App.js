import logo from './images/logo.svg';
import mockup from './images/illustration-mockups.svg';
import './App.css';

function App() {
  return (
    <>

      <header>
        <img src={logo} alt='Huddle Logo'></img>
      </header>

      <main>

        <img src={mockup} alt='responsive website illustration'></img>
        <div class='content'>
          <h2>Build the community your fans will love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.</p>
            <button>Register</button>
        </div>
        
        
      </main>
      
    </>
  );
}

export default App;
