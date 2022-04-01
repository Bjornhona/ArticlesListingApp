import './App.css';
import ArticlesList from './components/ArticlesList';
import {faImage} from '@fortawesome/free-regular-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faImage);

function App() {
  return (
    <div>
      <ArticlesList />
    </div>
  );
}

export default App;
