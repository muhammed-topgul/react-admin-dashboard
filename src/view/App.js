import "../style/index.css"
import {ColorModeContext, useMode} from "./page/Theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
            </ThemeProvider>
            <div className="app">
                <main className="content">
                    Admin Dashboard
                </main>
            </div>
        </ColorModeContext.Provider>
    );
}

export default App;
