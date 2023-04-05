import {useEffect, useState} from "react";
import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {tokens} from "./Theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === to}
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(to)}
            icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    useEffect(() => {
        const path = window.location.pathname;
        setSelected(path);
    }, []);

    return (
        <Box
            style={{height: "100%"}}
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                }
            }}>

            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                              icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                              style={{
                                  margin: "10px 0 20px 0",
                                  color: colors.grey[500]
                              }}>
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px">
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>
                    {/*User*/}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={"data:image/jpeg;base64,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"}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{m: "10px 0 0 0"}}>Muhammed Topgul</Typography>
                                <Typography
                                    variant="h5"
                                    color={colors.greenAccent[500]}>Fancy Admin</Typography>
                            </Box>
                        </Box>
                    )}

                    {/*Menu items*/}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HomeOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m: "15px 0 5px 20px"}}>Data</Typography>
                        <Item
                            title="Manage Team"
                            to="/team"
                            icon={<PeopleOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="Contacts"
                            to="/contact"
                            icon={<ContactsOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="Invoices"
                            to="/invoice"
                            icon={<ReceiptOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m: "15px 0 5px 20px"}}>Pages</Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="FAQ"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{m: "15px 0 5px 20px"}}>Charts</Typography>
                        <Item
                            title="Bar Chart"
                            to="/bar-chart"
                            icon={<BarChartOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="Pie Chart"
                            to="/pie-chart"
                            icon={<PieChartOutlineOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="Line Chart"
                            to="/line-chart"
                            icon={<TimelineOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                        <Item
                            title="Geography"
                            to="/geography"
                            icon={<MapOutlinedIcon/>}
                            selected={selected}
                            setSelected={setSelected}/>
                    </Box>
                </Menu>
            </ProSidebar>

        </Box>
    );
}

export default Sidebar;