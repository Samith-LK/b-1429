import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import AppRoutes from "@/components/AppRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

// Get the base URL from Vite's import.meta.env
const baseUrl = import.meta.env.BASE_URL;

console.log('Base URL:', baseUrl); // Debug log

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={baseUrl}>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;