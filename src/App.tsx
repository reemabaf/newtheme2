import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import About from "@/pages/About";
import CollectionPage from "@/pages/Collection";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/collections/:slug" component={CollectionPage} />
      <Route path="/about" component={About} />
      <Route>
        <div className="min-h-screen flex items-center justify-center font-sans bg-background">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-4 text-foreground">404</h1>
            <p className="text-lg text-muted-foreground font-serif italic mb-8">This page has been lost to the archives.</p>
            <a href="/" className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
              Return Home
            </a>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
