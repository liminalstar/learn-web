// home/page.tsx
'use client'

import { Container } from "@mui/material";
import Custom_Drawer from "../components/Drawer_compose";


export default function Page() {
    
    return (
        <Container maxWidth="md">
            <Custom_Drawer/>
        </Container>
    )
}