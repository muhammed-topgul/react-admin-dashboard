import "../../style/index.css"
import {ColorModeContext, useMode} from "./Theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Topbar from "./Topbar";
import Dashboard from "../page/Dashboard";
import Team from "../page/Team";
import Contact from "../page/Contact";
import Invoice from "../page/Invoice";
import Form from "../page/Form";
import BarChart from "../page/BarChart";
import PieChart from "../page/PieChart";
import LineChart from "../page/LineChart";
import FAQ from "../page/FAQ";
import Geography from "../page/Geography";
import Calendar from "../page/Calendar";
import Sidebar from "./Sidebar";

function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar/>
                    <main className="content">
                        <Topbar/>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/team" element={<Team/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                            <Route path="/invoice" element={<Invoice/>}/>
                            <Route path="/form" element={<Form/>}/>
                            <Route path="/bar-chart" element={<BarChart/>}/>
                            <Route path="/pie-chart" element={<PieChart/>}/>
                            <Route path="/line-chart" element={<LineChart/>}/>
                            <Route path="/faq" element={<FAQ/>}/>
                            <Route path="/geography" element={<Geography/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
