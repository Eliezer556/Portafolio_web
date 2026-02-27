// src/components/ElectronicsDetails.jsx
import React, { useEffect } from 'react'; // <--- IMPORTANTE: Añade useEffect
import { Github, ExternalLink, ArrowLeft, Database, Cpu, ShoppingCart, Shield, Zap, Server, LayoutGrid, Search } from 'lucide-react';

export const ElectronicsDetails = ({ onBack }) => {
  // useEffect para hacer scroll hacia arriba cuando el componente se monta
  useEffect(() => {
    // Scroll suave al inicio de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 'smooth' para animación suave, 'auto' para instantáneo
    });
    
    // Alternativa más directa (instantánea):
    // window.scrollTo(0, 0);
  }, []); // El array vacío [] asegura que solo se ejecute UNA VEZ al montar el componente

  const project = {
    title: "Sistema Gestión Electrónicos",
    description: "Aplicación full-stack para la gestión integral de inventario y ventas en una tienda de electrónicos. Demuestra una arquitectura limpia y desacoplada con React en el frontend y una API RESTful con Django.",
    longDescription: "El objetivo principal es proporcionar una herramienta funcional que permita controlar el stock en tiempo real, gestionar un catálogo de productos por categorías y registrar ventas de forma intuitiva, con actualización automática del inventario. El proyecto está dockerizado (o listo para serlo) y utiliza variables de entorno para una configuración segura.",
    features: [
      "**Inventario CRUD:** Crear, leer, actualizar y eliminar productos con nombre, categoría, precio y stock.",
      "**Sistema de Ventas:** Registro de ventas con selección de productos y cantidades. El stock se actualiza automáticamente al confirmar.",
      "**Búsqueda y Filtrado:** Busca productos por nombre y filtra el inventario por categoría o rango de precio.",
      "**API RESTful Documentada:** Backend construido con Django REST Framework, ofreciendo endpoints claros y eficientes.",
      "**Autenticación JWT:** Sistema de login seguro para proteger las operaciones.",
      "**Frontend Moderno:** Desarrollado con React 19, Vite y pnpm para un desarrollo rápido y eficiente."
    ],
    techStack: {
      frontend: ["React 19", "Vite", "pnpm", "React Router DOM", "Context API", "CSS Modules/Tailwind"],
      backend: ["Django 5", "Django REST Framework", "PostgreSQL/MySQL", "JWT", "python-dotenv"],
      devops: ["Git", "Variables de Entorno"]
    },
    challenges: [
      "**Sincronización de Stock:** Implementar la lógica para que, al registrar una venta, el stock de múltiples productos se actualice de manera atómica y consistente en la base de datos.",
      "**Arquitectura Desacoplada:** Diseñar una API RESTful limpia y un frontend que se comunique eficientemente con ella, manejando los estados de carga y error correctamente.",
      "**Gestión de Estado:** Usar Context API de React para manejar el estado global del carrito de ventas y la sesión del usuario de forma predecible."
    ],
    repoUrl: "https://github.com/Eliezer556/Sistema-de-electronicos",
    liveDemo: "#",
    images: {
      main: "./electrones_img1.jpeg",
      details: "/path/to/electronics-detail.png"
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
            <img src={project.images.main} alt="Vista principal del proyecto" className="w-full h-full object-cover" />
          ) : (
            <div className="text-slate-500 flex flex-col items-center gap-2">
              <Cpu size={48} className="text-blue-500/50" />
              <p>Captura de pantalla de la aplicación</p>
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
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><LayoutGrid size={24} className="text-blue-400" /> Características Clave</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-all">
                <p className="text-slate-300" dangerouslySetInnerHTML={{ __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}></p>
              </div>
            ))}
          </div>
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
              <h3 className="text-lg font-semibold text-violet-400 mb-4 flex items-center gap-2"><Cpu size={18} /> Frontend</h3>
              <ul className="space-y-2 text-slate-400">
                {project.techStack.frontend.map(tech => <li key={tech} className="flex items-center gap-2"><span className="w-1 h-1 bg-violet-500 rounded-full"></span>{tech}</li>)}
              </ul>
            </div>
            <div className="bg-slate-800/20 border border-white/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2"><Shield size={18} /> DevOps/Herramientas</h3>
              <ul className="space-y-2 text-slate-400">
                {project.techStack.devops.map(tech => <li key={tech} className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>{tech}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Desafíos Técnicos */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Search size={24} className="text-blue-400" /> Desafíos y Soluciones</h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-slate-800/40 border-l-4 border-blue-500 rounded-r-lg p-5">
                <p className="text-slate-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};