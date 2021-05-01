import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomeScreen from "./screens/HomeScreen";
import SingleMovie from "./screens/SingleMovie";
import SingleSeries from "./screens/SingleSeries";
import SearchResult from './screens/SearchResult';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Register from './screens/users/Register';
import Simp from './components/simping/Simp';
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/movie/:id" component={SingleMovie} />
        <Route path="/tv/:id" component={SingleSeries} />
        <Route path="/results/:searchTerm" component={SearchResult} />
        <Route path="/users/register" component={Register} />
        <Route path="/super" component={Simp} />
      </Router>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default App;
