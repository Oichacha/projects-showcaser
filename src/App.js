import './App.css';
import Showcaser from './Showcaser';
import Tool from './Tool'
import defaultImage from './assets/default-thumbnail.png'

function App() {
  const tools = ['Java', 'Python']
  return (
    <div>
      <Showcaser Name = "Awesome Project" Caption = "This is my awesome project" Thumbnail = {defaultImage}
                 foo = {tools} />
    </div>
  );
}

export default App;
