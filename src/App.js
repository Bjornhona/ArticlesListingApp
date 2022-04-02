import './App.scss';
import ArticlesList from './components/articles_list/ArticlesList';
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
