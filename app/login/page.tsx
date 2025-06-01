'use client'

import React from "react";
import {Button, TextField, Box} from "@mui/material";
import { useForm } from "react-hook-form";
//import them from "../components/LoginForm"

type UserType = {
    username: string;
    password: string;
}

export default function LoginForm(){
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserType>();

    const onSubmit = (data:UserType) => {
        console.log(data)
    }

    return (
        <Box sx={{
            width:"100vw",
            height:"50vh",
            display: "flex",
            justifyContent:"center",    // 横方向中央
            alignItems:"center",        // 縦方向中央
            backgroundColor: "#f0f0f0", 
        }} >
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    width:300,
                    padding:2,
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap:2,
                    backgroundColor: "white",
                }}>

                <TextField 
                id="username" 
                label="Username" 
                type="text"
                variant="outlined"
                {...register("username", { required: "ユーザー名は必須です。"})}
                error={!!errors.username}
                helperText={errors.username?.message}
                />

                <TextField 
                id="password" 
                label="Password"
                type="password"
                variant="outlined"
                {...register("password", { required: "パスワードは必須です。"})}
                error={!!errors.password}
                helperText={errors.password?.message}
                />

                <Button 
                id="submit" 
                variant="contained"
                type="submit"
                >Login!</Button>
            </Box>
        </Box>
    )
}