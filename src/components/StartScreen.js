// rfc snippet  react functional component
import { useQuestions } from "../contexts/QueastionsContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuestions();

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} queastions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

// rfc snippet  react

export default StartScreen;
