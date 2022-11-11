import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

const queryClient = new QueryClient();

export default function App() {
  let token = localStorage.getItem("userToken");
  return (
    <QueryClientProvider client={queryClient}>
      { token ? <Dashboard /> : <Login /> }
    </QueryClientProvider>
  );
}