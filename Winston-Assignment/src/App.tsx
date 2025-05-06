import { AppSidebar } from "./components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "./components/ui/sidebar";
import { GlobalStateProvider } from "./GlobalState";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <div>
      <GlobalStateProvider>
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>{<AppRoutes />}</SidebarInset>
        </SidebarProvider>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
