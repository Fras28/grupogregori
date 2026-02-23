import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useState, ReactNode } from 'react';

import { useAuthStore } from './store/authStore';
import { Role } from './types';

// Layouts



// Páginas Institucionales


// Catálogo Existente

import AuthForm from './components/Auth/AuthForm';
import UserView from './components/user/UserView';
import ProductDetail from './components/product/Productdetail';
import CheckoutPage from './pages/Checkoutpage';
import OrderDetail from './orders/OrderDetail';
import MyOrders from './orders/MyOrders';
import PaymentSuccess from './components/cart/PaymentSuccess';
import PaymentInstructions from './components/cart/Paymentinstructions';
import EmailConfirmation from './components/Auth/EmailConfirmation';
import AdminDashboard from './components/admin/AdminDashboard';
import DemoDashboard from './components/admin/demo/Demodashboard';
import CartDrawer from './components/cart/CartDrawer';

import { extractProductId } from './utils/urlUtils';
import { VERSION_INFO } from './utils/version';

import bgFungi from "./assets/Persiana.jpg";
import InstitutionalLayout from './components/layout/InstitutionalLayout';
import Home from './components/institutional/Home';
import Servicios from "./components/institutional/Servicios"
import Gallery from './components/institutional/Gallery';
import About from './components/institutional/About';
import Contact from './components/institutional/Contact';

// Console log de versión
console.log(
  `%c🚀 ${VERSION_INFO.name} v${VERSION_INFO.version} | ${VERSION_INFO.environment}`,
  "color: #0fe778; font-weight: bold; font-size: 12px;"
);

// Tipos
interface ApiResponse {
  status: number;
  data: unknown;
}

interface LayoutProps {
  children: ReactNode;
  response?: ApiResponse | null;
}

// Layout Component
const LayoutWrapper = ({ children }: Omit<LayoutProps, 'response'>) => {
  return (
    <div
      className="min-h-screen text-slate-200 p-3 sm:p-4 md:p-8 font-sans selection:bg-[#E30613]/30 bg-cover bg-no-repeat relative overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.85)), url(${bgFungi})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="w-full max-w-6xl mx-auto space-y-6 sm:space-y-8 relative z-0">
        <main className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </main>
      </div>
    </div>
  );
};

// ProductDetail Wrapper
const ProductDetailWrapper = (): JSX.Element => {
  const { slugWithId } = useParams<{ slugWithId: string }>();
  const productId = slugWithId ? extractProductId(slugWithId) : null;
  
  if (!productId) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0a0a0a]">
        <div className="text-center p-4">
          <h2 className="text-2xl font-black mb-4">Producto no encontrado</h2>
          <p className="text-slate-400 mb-6">La URL del producto no es válida</p>
          <button
            onClick={() => window.location.href = '/catalogo'}
            className="bg-[#E30613] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold"
          >
            Volver al Catálogo
          </button>
        </div>
      </div>
    );
  }
  
  return <ProductDetail />;
};

// PrivateRoute Component
interface PrivateRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
}

const PrivateRoute = ({ children, adminOnly = false }: PrivateRouteProps): JSX.Element => {
  const { user } = useAuthStore();
  
  if (!user) return <Navigate to="/login" replace />;
  if (adminOnly && user.role !== Role.ADMIN) return <Navigate to="/catalogo" replace />;
  
  return <>{children}</>;
};

// Admin Dashboard Wrapper con Toggle
const AdminDashboardWrapper = (): JSX.Element => {
  const [useDemoMode, setUseDemoMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('adminDashboardMode');
    return saved === 'demo';
  });

  const toggleMode = (): void => {
    const newMode = !useDemoMode;
    setUseDemoMode(newMode);
    localStorage.setItem('adminDashboardMode', newMode ? 'demo' : 'real');
  };

  return (
    <div className="space-y-4">
      <div className="sticky top-4 z-50 flex justify-end">
        <button
          onClick={toggleMode}
          className={`group relative px-4 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-lg ${
            useDemoMode
              ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white'
              : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white'
          }`}
        >
          <span className="flex items-center gap-2">
            {useDemoMode ? (
              <>
                <span className="w-2 h-2 bg-orange-300 rounded-full animate-pulse"></span>
                Modo Demo
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
                Modo Real
              </>
            )}
          </span>
        </button>
      </div>

      {useDemoMode ? <DemoDashboard /> : <AdminDashboard />}
    </div>
  );
};

function App(): JSX.Element {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        {/* 🏠 WEB INSTITUCIONAL */}
        <Route element={<InstitutionalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>

        {/* 🛒 CATÁLOGO ECOMMERCE */}
        <Route
          path="/catalogo"
          element={
            <LayoutWrapper>
              <UserView />
            </LayoutWrapper>
          }
        />
        
        <Route
          path="/productos/:slugWithId"
          element={
            <LayoutWrapper>
              <ProductDetailWrapper />
            </LayoutWrapper>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <LayoutWrapper>
                <CheckoutPage />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        <Route
          path="/my-orders"
          element={
            <PrivateRoute>
              <LayoutWrapper>
                <MyOrders />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        <Route
          path="/orders/:orderId"
          element={
            <PrivateRoute>
              <LayoutWrapper>
                <OrderDetail />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/orders/:orderId"
          element={
            <PrivateRoute adminOnly>
              <LayoutWrapper>
                <OrderDetail />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        <Route
          path="/payment/success"
          element={
            <PrivateRoute>
              <LayoutWrapper>
                <PaymentSuccess />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        <Route
          path="/payment/instructions/:orderId"
          element={
            <PrivateRoute>
              <LayoutWrapper>
                <PaymentInstructions />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        {/* 🔐 AUTH */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to={user.role === Role.ADMIN ? "/admin" : "/catalogo"} replace />
            ) : (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0a0a]"
                style={{
                  backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.9))`
                }}
              >
                <AuthForm />
              </div>
            )
          }
        />

        <Route path="/auth/confirm-email" element={<EmailConfirmation />} />

        {/* ⚙️ ADMIN */}
        <Route
          path="/admin"
          element={
            <PrivateRoute adminOnly>
              <LayoutWrapper>
                <AdminDashboardWrapper />
              </LayoutWrapper>
            </PrivateRoute>
          }
        />

        {/* 🔄 Redirecciones */}
        <Route path="/dashboard" element={<Navigate to="/catalogo" replace />} />
        <Route path="/product/:id" element={<Navigate to="/catalogo" replace />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white font-black text-center p-4">
              <div>
                <h1 className="text-6xl mb-4 text-[#E30613]">404</h1>
                <p className="text-sm mb-6 uppercase tracking-widest">Página no encontrada</p>
                <a
                  href="/"
                  className="bg-[#E30613] hover:bg-red-700 text-white px-8 py-3 font-black uppercase tracking-wider text-sm inline-block"
                >
                  Volver al Inicio
                </a>
              </div>
            </div>
          }
        />
      </Routes>

      <CartDrawer />
    </BrowserRouter>
  );
}

export default App;