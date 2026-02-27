// src/components/DistributionDetails.jsx
import React, { useEffect } from 'react';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft, 
  Database, 
  Truck, 
  Warehouse, 
  ShieldCheck, 
  Zap, 
  Server, 
  LayoutGrid, 
  BarChart3,
  ClipboardCheck,
  PackageCheck
} from 'lucide-react';

export const DistributionDetails = ({ onBack }) => {
  // useEffect para hacer scroll hacia arriba cuando el componente se monta
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, []);

  const project = {
    title: "Sistema Gestión Distribución",
    description: "Plataforma integral Full-Stack para la optimización de la cadena de suministro, integrando módulos de preventa, logística de distribución y cierre contable automático.",
    longDescription: "Este sistema fue diseñado para resolver problemas críticos de logística y almacén. Permite el seguimiento total del producto desde que sale del depósito hasta que llega al cliente final. Su característica más potente es el motor de validaciones, que impide errores operativos como la asignación duplicada de rutas o el descuadre de inventario por devoluciones no registradas.",
    features: [
      "**Módulo de Distribución:** Gestión de entregas en tiempo real, permitiendo confirmar cantidades entregadas y gestionar devoluciones parciales.",
      "**Validación de Rutas:** Lógica de negocio que bloquea la asignación de nuevas rutas a distribuidores que aún tienen entregas pendientes.",
      "**Control de Almacén:** Registro automatizado de salidas y entradas de stock sincronizado con el personal de distribución.",
      "**Contabilidad Dinámica:** Generación automática de estados de resultados, reportes de ventas, ingresos y egresos basados en la operación diaria.",
      "**Gestión de Roles:** Sistema de permisos robusto para Gerentes, Almacenistas, Distribuidores, Contadores y Vendedores.",
      "**Arquitectura Escalable:** Backend robusto con Django REST Framework y un frontend reactivo desarrollado con React y Tailwind CSS."
    ],
    techStack: {
      frontend: ["React", "Tailwind CSS", "Context API", "Lucide Icons", "Axios"],
      backend: ["Django 5", "Django REST Framework", "PostgreSQL", "JWT Authentication", "CORS Headers"],
      devops: ["Git", "GitHub", "Python VirtualEnvs", "Postman (API Testing)"]
    },
    challenges: [
      "**Lógica de Bloqueo de Rutas:** Implementar validadores a nivel de base de datos y API para asegurar que un distribuidor no pueda iniciar una ruta nueva sin haber liquidado la anterior.",
      "**Conciliación Contable:** Crear un flujo de datos que transforme las confirmaciones de entrega y devoluciones en asientos contables precisos sin intervención manual.",
      "**Gestión de Estados Complejos:** Manejar el flujo de vida de un pedido (Preventa -> Almacén -> En Ruta -> Entregado/Devuelto) manteniendo la integridad de los datos."
    ],
    repoUrl: "https://github.com/Eliezer556/sistema-de-distribucion",
    liveDemo: "#", // Cambiar por el link real si existe
    images: {
      main: "./distribution1.jpeg",
      secondary: "./distribution2.jpeg"
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300">
      {/* Fondo sutil */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Botón Volver */}
      <div className="fixed top-6 left-6 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-white/10 transition-all"
        >
          <ArrowLeft size={18} /> Volver al Portafolio
        </button>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24">
        {/* Cabecera */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Enlaces Repo/Demo */}
        <div className="flex justify-center gap-4 mb-16">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" 
             className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg border border-white/10 transition-all">
            <Github size={20} /> Ver Código
          </a>
          {project.liveDemo !== "#" && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition-all shadow-lg">
              <ExternalLink size={20} /> Demo en Vivo
            </a>
          )}
        </div>

        {/* Imagen Principal */}
        <div className="mb-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 aspect-video flex items-center justify-center">
          {project.images.main ? (
            <img src={project.images.main} alt="Vista del sistema de distribución" className="w-full h-full object-cover" />
          ) : (
            <div className="text-slate-500 flex flex-col items-center gap-2">
              <Truck size={48} className="text-blue-500/50" />
              <p>Dashboard de Logística</p>
            </div>
          )}
        </div>

        {/* Descripción Larga */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Zap size={24} className="text-blue-400" /> Visión General</h2>
          <p className="text-slate-300 leading-relaxed text-lg">{project.longDescription}</p>
        </div>

        {/* Características */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><LayoutGrid size={24} className="text-blue-400" /> Módulos Críticos</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-all">
                <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}></p>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda Imagen (Detalle de Reportes o Almacén) */}
        <div className="mb-16 rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 aspect-video flex items-center justify-center">
          {project.images.secondary ? (
            <img src={project.images.secondary} alt="Detalle del sistema" className="w-full h-full object-cover" />
          ) : (
            <div className="text-slate-500 flex flex-col items-center gap-2">
              <BarChart3 size={48} className="text-violet-500/50" />
              <p>Módulo de Contabilidad y Reportes</p>
            </div>
          )}
        </div>

        {/* Stack Tecnológico */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Server size={24} className="text-blue-400" /> Stack Tecnológico</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/20 border border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2"><Database size={18} /> Backend</h3>
              <ul className="space-y-2 text-slate-400">
                {project.techStack.backend.map(tech => <li key={tech} className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{tech}</li>)}
              </ul>
            </div>
            <div className="bg-slate-800/20 border border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-violet-400 mb-4 flex items-center gap-2"><Warehouse size={18} /> Frontend</h3>
              <ul className="space-y-2 text-slate-400">
                {project.techStack.frontend.map(tech => <li key={tech} className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full"></span>{tech}</li>)}
              </ul>
            </div>
            <div className="bg-slate-800/20 border border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2"><ShieldCheck size={18} /> Herramientas</h3>
              <ul className="space-y-2 text-slate-400">
                {project.techStack.devops.map(tech => <li key={tech} className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>{tech}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Desafíos Técnicos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><ClipboardCheck size={24} className="text-blue-400" /> Desafíos de Ingeniería</h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-slate-800/40 border-l-4 border-blue-500 rounded-r-lg p-5">
                <p className="text-slate-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
            <p className="text-slate-500 italic flex items-center justify-center gap-2">
                <PackageCheck size={20} /> Sistema diseñado para la eficiencia operativa.
            </p>
        </div>
      </div>
    </div>
  );
};