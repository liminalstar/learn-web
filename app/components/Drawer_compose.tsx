// components/Drawer_compose.tsx

import { Drawer, List, ListItem, ListItemText, Button} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState} from "react";


export default function Home_Drawer(){
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen:boolean) => {
        setOpen(newOpen);
    };

    const drawerContent = (
        <List sx={{width: 250}}>
            <ListItem component="a" href="/home">
                <ListItemText primary="home"/>
            </ListItem>
            <ListItem component="a" href="/login">
                <ListItemText primary="login"/>
            </ListItem>
            
        </List>
    );

    return (
        <>
            <Button onClick={() => toggleDrawer(true)}><MenuIcon/></Button>
            <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
                {drawerContent}
            </Drawer>
        </>
    )
}