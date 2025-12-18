import { useEffect } from "react";
import { 
    UserCheck,
    Package,
    ShoppingCart,
    User,
    CreditCard,
    ShieldCheck,
    ArrowLeft,
    ArrowRight,
    Github,
    ExternalLink,
    CheckCircle2
 } from "lucide-react";

export const ProjectDetails = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Registro & Autenticación",
      desc: "Implementación de seguridad robusta utilizando JWT (JSON Web Tokens). La interfaz de registro valida en tiempo real la fortaleza de la contraseña y la disponibilidad del correo electrónico, proporcionando retroalimentación inmediata al usuario.",
      icon: <UserCheck className="text-blue-400" size={32} />,
      image: "https://placehold.co/800x500/0f172a/3b82f6?text=Interfaz+de+Login+y+Registro&font=roboto",
      tech: ["JWT", "React Hook Form", "Bcrypt"]
    },
    {
      title: "Catálogo Dinámico de Productos",
      desc: "Grid responsivo que consume la API REST. Incluye paginación en el servidor, filtros por categoría y búsqueda en tiempo real. Las imágenes se cargan con 'lazy loading' para mejorar el rendimiento.",
      icon: <Package className="text-violet-400" size={32} />,
      image: "https://placehold.co/800x500/0f172a/8b5cf6?text=Catalogo+de+Productos&font=roboto",
      tech: ["Axios", "Lazy Load", "Django Filters"]
    },
    {
      title: "Carrito de Compras Persistente",
      desc: "Estado global gestionado (Context API / Redux) que persiste la selección del usuario incluso si cierra el navegador. Permite actualizar cantidades y calcular subtotales dinámicamente sin recargar la página.",
      icon: <ShoppingCart className="text-pink-400" size={32} />,
      image: "https://placehold.co/800x500/0f172a/ec4899?text=Carrito+de+Compras&font=roboto",
      tech: ["Redux Toolkit", "Local Storage", "State Management"]
    },
    {
      title: "Perfil de Usuario & Historial",
      desc: "Dashboard privado donde el cliente puede gestionar sus direcciones de envío y visualizar el estado de sus pedidos anteriores con detalles de seguimiento.",
      icon: <User className="text-cyan-400" size={32} />,
      image: "https://placehold.co/800x500/0f172a/22d3ee?text=Perfil+de+Usuario&font=roboto",
      tech: ["Protected Routes", "User Dashboard", "API Integration"]
    },
    {
      title: "Proceso de Checkout Seguro",
      desc: "Flujo de pago en tres pasos: Confirmación de carrito, Datos de envío y Método de pago. Integra validaciones estrictas antes de procesar la orden final.",
      icon: <CreditCard className="text-emerald-400" size={32} />,
      image: "https://placehold.co/800x500/0f172a/34d399?text=Pasarela+de+Pago&font=roboto",
      tech: ["Stripe Integration", "Form Validation", "Secure Transaction"]
    },
    {
      title: "Panel de Validación (Admin)",
      desc: "Vista administrativa para el control de stock y validación de pedidos entrantes. Permite al administrador cambiar estados de orden y gestionar inventario.",
      icon: <ShieldCheck className="text-orange-400" size={32} />,
      image: "https://placehold.co/800x500/0f172a/fb923c?text=Panel+Administrativo&font=roboto",
      tech: ["Admin Dashboard", "Stock Logic", "Role Based Access"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans relative overflow-x-hidden">
      {/* Background FX (Reused) */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Nav Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-white mb-16 cursor-pointer transition-colors px-4 py-2 rounded-full hover:bg-white/5 w-fit border border-transparent hover:border-white/10"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Portafolio
        </button>

        {/* Project Hero */}
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-5 bg-blue-500/10 rounded-3xl mb-8 border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <ShoppingCart size={56} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            E-commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Full Stack</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Una plataforma de comercio electrónico diseñada desde cero para ofrecer rendimiento y seguridad. 
            Combina la potencia de <span className="text-blue-400 font-medium">Django</span> en el backend con la interactividad de <span className="text-violet-400 font-medium">React</span>.
          </p>
        </div>

        {/* --- MAIN FEATURES LIST (IMAGEN IZQUIERDA - TEXTO DERECHA) --- */}
        <div className="space-y-32 mb-32">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
              
              {/* IMAGEN (LADO IZQUIERDO) */}
              <div className="w-full md:w-1/2 relative perspective-1000">
                {/* Glow Effect Back */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl blur-2xl opacity-40 group-hover:opacity-80 transition duration-700"></div>
                
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0F19] transform group-hover:scale-[1.02] transition-all duration-500">
                   {/* Header falso de navegador para realismo */}
                   <div className="h-8 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                   </div>
                   {/* Imagen Placeholder */}
                   <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                   />
                </div>
              </div>

              {/* TEXTO (LADO DERECHO) */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800/50 backdrop-blur-md rounded-xl border border-white/10 shadow-lg group-hover:bg-slate-800 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-slate-400 text-lg leading-relaxed pl-2 border-l-2 border-slate-700 group-hover:border-blue-500 transition-colors duration-500">
                  {feature.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {feature.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-white/5">
                      <CheckCircle2 size={12} className="text-blue-500" /> {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">¿Te interesa ver el código?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Este proyecto demuestra mi capacidad para manejar flujos complejos de datos y crear experiencias de usuario fluidas. El código completo está disponible en mi repositorio.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Github size={20} /> Ver Repositorio
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};