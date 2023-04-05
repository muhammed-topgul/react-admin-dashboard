import "../style/index.css"
import {ColorModeContext, useMode} from "./page/Theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./page/global/Topbar";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
            <div className="app">
                <main className="content">
                    <Topbar/>
                </main>
            </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
