import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Lock, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

type Mode = "login" | "register";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setNeedsConfirmation(false);

    try {
      if (mode === "register") {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          toast.error(payload.message ?? "Registration failed");
        } else {
          toast.success("Account created! Check your email to confirm.");
          setMode("login");
          setPassword("");
        }
      } else {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          if (payload.needsConfirmation) {
            setNeedsConfirmation(true);
            setConfirmationEmail(email);
            toast.error("Please confirm your email first");
          } else {
            toast.error(payload.message ?? "Login failed");
          }
        } else {
          toast.success("Login successful!");
          localStorage.setItem("user_email", email);
          setTimeout(() => {
            window.location.href = "/notes";
          }, 500);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResendConfirmation = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/resend-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: confirmationEmail }),
      });

      if (response.ok) {
        toast.success("Confirmation email sent!");
        setNeedsConfirmation(false);
      } else {
        toast.error("Failed to send confirmation email");
      }
    } catch {
      toast.error("Failed to send confirmation email");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setNeedsConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Toaster position="top-center" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, x: mode === "login" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: mode === "login" ? 20 : -20 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-2xl text-center">
                  {mode === "login" ? "Welcome back" : "Create account"}
                </CardTitle>
                <p className="text-sm text-center text-gray-500">
                  {mode === "login"
                    ? "Sign in to access your notes"
                    : "Get started with your free account"}
                </p>
              </CardHeader>

              <CardContent>
                {needsConfirmation ? (
                  <div className="space-y-4 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <Mail className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email not confirmed</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Please check your inbox and confirm your email before logging in.
                      </p>
                    </div>
                    <Button
                      onClick={handleResendConfirmation}
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Mail className="mr-2 h-4 w-4" />
                      )}
                      Resend confirmation email
                    </Button>
                    <button
                      type="button"
                      onClick={() => setNeedsConfirmation(false)}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Back to login
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-9"
                          minLength={6}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {mode === "login" ? "Sign in" : "Create account"}
                    </Button>
                  </form>
                )}
              </CardContent>

              {!needsConfirmation && (
                <CardFooter className="flex justify-center pb-6">
                  <p className="text-sm text-gray-500">
                    {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="font-semibold text-gray-900 hover:underline"
                    >
                      {mode === "login" ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
