import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";

const Index = lazy(() => import("./pages/Index"));
const Lesson = lazy(() => import("./pages/Lesson"));
const Review = lazy(() => import("./pages/Review"));
const Diagnostic = lazy(() => import("./pages/Diagnostic"));
const Project = lazy(() => import("./pages/Project"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Suspense
            fallback={
              <div className="page-shell flex items-center justify-center">
                <div className="glass-card p-6 text-sm text-muted-foreground">
                  Carregando...
                </div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lesson/:lessonId" element={<Lesson />} />
              <Route path="/review" element={<Review />} />
              <Route path="/diagnostic/:moduleId" element={<Diagnostic />} />
              <Route path="/project/:moduleId" element={<Project />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
