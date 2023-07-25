
import {Outlet} from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <SearchHeader/>
      <QueryClientProvider client={queryClient}>
      <Outlet/>
      </QueryClientProvider>
      {/* Outlet에서 사용하는 어떤 곳에서든 useQuery를 사용 할 수 있다.  */}
    </div>
  );
}

export default App;
