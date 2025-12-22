import SearchBar from './SearchBar.jsx';
import Feedback from './Feedback.jsx';

function TextFields() {
  return(
    <div className="flex flex-col align-self-center space-y-4">
      <p>
        Ask me a question
      </p>
      <SearchBar />
      <p>
        How do you like my facts?
      </p>
      <Feedback />
    </div>
  )
}

export default TextFields;