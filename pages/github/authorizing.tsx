import { useGithubAuthRedirect } from "react-tinacms-github";

// Our GitHub app redirects back to this page with auth code
const Authorizing = () => {
  // Let the main app know, that we received an auth code from the GitHub redirect
  useGithubAuthRedirect();

  return <h2>Rajorizing with GitHub, please wait...</h2>;
};

export default Authorizing;
