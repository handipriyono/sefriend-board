import { ThemeProvider } from "@/components/theme-provider";
import ModeToggle from "@/components/mode-toggle";
import RouteList from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <ModeToggle /> */}
      <RouteList />
    </ThemeProvider>
  );
}

export default App;
