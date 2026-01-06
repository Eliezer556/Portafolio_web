import { useEffect, useState } from "react";
import {
  Heart,
  Layout,
  Search,
  UserCircle,
  ClipboardList,
  ShieldCheck,
  ArrowLeft,
  Github,
  CheckCircle2,
  PawPrint,
  Settings,
  ShieldAlert
} from "lucide-react";

const OptimizedImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-slate-800 aspect-video rounded-xl">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
    </div>
  );
};

export const PetsSocietyDetails = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Landing Page de Bienvenida",
      desc: "Interfaz de usuario moderna y minimalista construida con Tailwind CSS. Utiliza un sistema de capas y desenfoques (backdrop-blur) para una navegación fluida, presentando la misión de la plataforma y llamadas a la acción claras.",
      icon: <Layout className="text-emerald-400" size={32} />,
      image: "./society1.jpg",
      tech: ["Django Templates", "Tailwind CSS", "Lucide Icons"]
    },
    {
      title: "Catálogo de Mascotas",
      desc: "Grid dinámico que muestra las mascotas disponibles en tiempo real. Implementa filtros inteligentes para agilizar la búsqueda del compañero ideal, extrayendo la información directamente desde los modelos de Django.",
      icon: <Search className="text-orange-400" size={32} />,
      image: "./society2.jpg",
      tech: ["Django ORM", "Responsive Design", "Static Files"]
    },
    {
      title: "Sistema de Usuarios & Sesiones",
      desc: "Gestión completa de autenticación utilizando el sistema integrado de Django. Incluye registro, inicio de sesión y perfiles de usuario personalizados para realizar el seguimiento de solicitudes de adopción.",
      icon: <UserCircle className="text-blue-400" size={32} />,
      image: "./society3.jpg",
      tech: ["Django Auth", "Session Management", "User Profiles"]
    },
    {
      title: "Formulario de Adopción",
      desc: "Proceso de solicitud estructurado con validaciones tanto en el frontend como en el backend. Permite a los usuarios enviar su interés formal por una mascota, vinculando automáticamente los datos del adoptante con el registro animal.",
      icon: <ClipboardList className="text-rose-400" size={32} />,
      image: "./society4.jpg",
      tech: ["Django Forms", "CSRF Security", "Business Logic"]
    },
    {
      title: "Panel de Gestión Administrativa",
      desc: "Dashboard exclusivo para administradores que permite el ciclo de vida de la adopción. Incluye funciones para aprobar, rechazar o dejar en pendiente las solicitudes, garantizando un flujo controlado de bienestar animal.",
      icon: <Settings className="text-indigo-400" size={32} />,
      image: "./society5.jpg",
      tech: ["Admin Workflow", "Status Transitions", "Database Persistence"]
    },
    {
      title: "Perfil de usuario y Superusuario",
      desc: "Nivel de acceso más alto para la gestión total de la plataforma. Permite la moderación de cuentas, gestión completa de la base de datos de mascotas y supervisión de métricas globales del sistema.",
      icon: <ShieldCheck className="text-red-400" size={32} />,
      image: "./society6.jpg",
      tech: ["Superuser Auth", "Database Management", "Global Permissions"]
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-400 hover:text-white mb-16 cursor-pointer transition-colors px-4 py-2 rounded-full hover:bg-white/5 w-fit border border-transparent hover:border-white/10"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al Portafolio
        </button>

        <header className="text-center mb-24">
          <div className="inline-flex items-center justify-center p-5 bg-emerald-500/10 rounded-3xl mb-8 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <PawPrint size={56} className="text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight italic">
            PetsSociety <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Full Stack</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
            Una plataforma dedicada a la adopción animal construida con la robustez de <span className="text-emerald-400 font-medium">Django</span>.
            Gestiona desde la captación de adoptantes hasta el control administrativo de solicitudes.
          </p>
        </header>

        <div className="space-y-32 mb-32">
          {features.map((feature, idx) => (
            <section key={idx} className={`group flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-40 group-hover:opacity-80 transition duration-700"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0F19] transform group-hover:scale-[1.01] transition-all duration-500">
                  <div className="h-8 bg-slate-900 border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <OptimizedImage src={feature.image} alt={feature.title} />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-800/50 backdrop-blur-md rounded-xl border border-white/10 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed pl-2 border-l-2 border-slate-700 group-hover:border-emerald-500 transition-colors duration-500">
                  {feature.desc}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {feature.tech.map((tech, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-slate-300 border border-white/5">
                      <CheckCircle2 size={12} className="text-emerald-500" /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 italic">¿Quieres revisar la lógica del backend?</h3>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Este proyecto resalta el manejo de modelos complejos en Django y el control de flujos administrativos. 
              El repositorio contiene la arquitectura completa del proyecto.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/Eliezer556/SocietyPets.git" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Github size={20} />
                Ver Repositorio
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};