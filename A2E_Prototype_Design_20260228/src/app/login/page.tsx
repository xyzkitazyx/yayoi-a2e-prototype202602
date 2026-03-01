"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    Paper,
    Alert,
} from "@mui/material";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Simulate login with NextAuth Credentials Provider
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
            callbackUrl: "/",
        });

        if (res?.error) {
            setError("Login failed. Please check your credentials.");
            setLoading(false);
        } else if (res?.url) {
            // Redirect to main page on success
            window.location.href = res.url;
        }
    };

    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    borderRadius: 2,
                }}
            >
                <Typography component="h1" variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
                    Yayoi A2E Prototype
                </Typography>

                {error && (
                    <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
                        {error}
                    </Alert>
                )}

                {/* Demo info message */}
                <Alert severity="info" sx={{ width: "100%", mb: 3 }}>
                    Demo Credentials:
                    <br />
                    Email: demo@example.com (or any)
                    <br />
                    Password: any
                </Alert>

                <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2, height: "48px" }}
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>

                    <Box sx={{ textAlign: "center", mt: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            Don't have an account?{" "}
                            <Button color="primary" sx={{ p: 0, minWidth: "auto", textTransform: 'none' }}>
                                Sign Up
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
