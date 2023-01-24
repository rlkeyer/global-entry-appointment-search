import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { AppointmentSearch } from "./AppointmentSearch";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppointmentSearch />
      </div>
    </QueryClientProvider>
  );
}

export default App;
