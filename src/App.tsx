import { Suspense, useState } from "react";
import { HeaderPanel } from "src/components";

const App: React.FC = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div data-theme={theme ? "dark" : "light"}>
      <Suspense fallback={<>Loading...</>}>
        <HeaderPanel />
        Landing Page
        <button onClick={() => setTheme((theme) => !theme)}>
          {theme ? "Dark" : "Light"}
        </button>
      </Suspense>
    </div>
  );
};
export default App;
