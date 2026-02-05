import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { GlobalLoader } from "./GlobalLoader";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  isLoading?: boolean;
}

export function MainLayout({ children, title, isLoading = false }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | undefined>();

  useEffect(() => {
    // Check if we're on desktop, open sidebar by default
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Fetch current user info
    fetch("/api/check-session", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.authenticated && data.user?.email) {
          setUserEmail(data.user.email);
          localStorage.setItem("user_email", data.user.email);
        } else {
          const cachedEmail = localStorage.getItem("user_email");
          if (cachedEmail) {
            setUserEmail(cachedEmail);
          }
        }
      })
      .catch(() => {
        const cachedEmail = localStorage.getItem("user_email");
        if (cachedEmail) {
          setUserEmail(cachedEmail);
        }
      });
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "8px",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <AnimatePresence>
        {isLoading && <GlobalLoader />}
      </AnimatePresence>

      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        onLogout={handleLogout}
        userEmail={userEmail}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={toggleSidebar} title={title} />
        
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
