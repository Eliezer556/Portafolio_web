import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Terminal,
  Server,
  Cpu,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Layers,
  Zap,
  Globe,
  CodeXml,
  Braces,
  PawPrint
} from 'lucide-react';

import IconReact from './icons/iconReact';
import IconPython from './icons/iconPython';
import IconCart from './icons/iconCart';
import { ProjectDetails } from './ProjectDetails';
import { PetsSocietyDetails } from './PetsSocietyDetails';
import IconGit from './icons/iconGit';
import IconPostgre from './icons/iconPostgre';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState('portfolio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre mi', 'habilidades', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profile = {
    name: "Eliezer Motta",
    role: "Desarrollador Full Stack",
    education: "Ingeniería en Sistemas (8vo Semestre)",
    email: "mailto:eliezerdma556@gmail.com?subject=Consulta%20Profesional%20desde%20Portafolio%20|%20Eliezer%20Motta",
    github: "https://github.com/Eliezer556/",
    linkedin: "https://linkedin.com/in/eliezer-motta"
  };

  const skills = [
    { name: "Html", level: "Estructura web", icon: <CodeXml size={20} /> },
    { name: "CSS", level: "Estilos web", icon: <Braces size={20} /> },
    { name: "Python & Django", level: "Lenguaje y framework", icon: <IconPython size={20} /> },
    { name: "React & JS", level: "Lenguaje y framework", icon: <IconReact size={20} /> },
    { name: "SQL & Bases de Datos", level: "Modelos", icon: <Database size={20} /> },
    { name: "PostgreSQL", level: "Herramientas", icon: <IconPostgre size={20} /> },
    { name: "Bash & Terminal", level: "Herramientas", icon: <Terminal size={20} /> },
    { name: "Git", level: "Herramientas", icon: <IconGit size={20} /> },
  ];

  const projects = [
    {
      id: 'e-commerce',
      title: "E-commerce",
      desc: "Base de datos hecha en Postgresql, Bakend solido con Django rest_framework basado en APIs, con autenticacion JWT, consumo de servicios con Axios y Frontend hecho en React.",
      tags: ["DRF", "React", "PostgreSQL", "Fullstack"],
      icon: <IconCart size={24} />,
      isFeatured: true,
    },
    {
      id: 'society-pets',
      title: "Society Pets",
      desc: "Plataforma integral para la adopción responsable y gestión de bienestar animal. Cuenta con autenticación segura, validaciones personalizadas, visualización de estadísticas y módulos de formación interactivos para dueños de mascotas.",
      tags: ["Django", "Tailwind CSS", "JavaScript", "Python", "MySQLite"],
      icon: <PawPrint size={24} />,
      isFeatured: true,
    },
    {
      id: 'process',
      title: "En proceso...",
      desc: "...",
      tags: ["Bash", "Linux", "Cron"],
      icon: <Terminal size={24} />,
      isFeatured: false,
    }
  ];

  if (currentView === 'e-commerce') {
    return <ProjectDetails onBack={() => setCurrentView('portfolio')} />;
  }

  if (currentView === 'society-pets') {
    return <PetsSocietyDetails onBack={() => setCurrentView('portfolio')} />;
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden relative">

      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-2xl">
        <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-2xl flex justify-between items-center">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">EM.</a>

          <div className="hidden md:flex gap-1">
            {['Inicio', 'Sobre mi', 'Habilidades', 'Proyectos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.toLowerCase() ? 'bg-white/10 text-white shadow-inner' : 'hover:text-white hover:bg-white/5'}`}
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contacto" className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Mail size={14} /> <span>Hola</span>
          </a>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-2">
            {['Inicio', 'Sobre mi', 'Habilidades', 'Proyectos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="p-3 text-center hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="inicio" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Disponible para trabajar
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
          <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">{profile.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-8 font-light">
          Ingeniero de Software en formación. Desarrollador web Junior en<span className="text-blue-400 font-medium"> Backend</span> y <span className="text-violet-400 font-medium">Frontend moderno</span>.
        </p>

        <div className="flex gap-4">
          <a href="#proyectos" className="group relative px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-all flex items-center gap-2">
            Ver Proyectos
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a href={profile.github} className="px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-medium transition-all flex items-center gap-2">
            <Github size={18} /> GitHub
          </a>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex justify-center opacity-50">
          <div className="w-[1px] h-20 bg-gradient-to-b from-slate-500 to-transparent"></div>
        </div>
      </section>

      <section id="sobre mi" className="py-24 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-[2px] bg-blue-500"></span> Sobre Mí
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Soy estudiante de <strong className="text-white">8vo semestre de Ingeniería en Sistemas</strong> con un enfoque pragmático: el código debe ser limpio, eficiente y escalable.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Mi viaje comenzó compilando código de python en la terminal hasta convertirse en desarrollo web y luego el desarrollo Full Stack. Me siento cómodo construyendo el bakend completo de un sistema web como el frontend para la experiencia de usuario óptima.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              {['Responsable', 'Analítico', 'Autodidacta'].map(trait => (
                <span key={trait} className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded text-sm text-slate-300">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl blur-xl opacity-20 transform rotate-3 scale-95"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-400 font-mono text-sm">terminal@eliezer:~</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-pink-500">➜</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-300">neofetch</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                  <div className="text-blue-500 flex items-center justify-center">
                    <Cpu size={48} />
                  </div>
                  <div className="space-y-1 text-slate-400">
                    <p><span className="text-blue-400 font-bold">Usuario:</span> Eliezer Motta</p>
                    <p><span className="text-blue-400 font-bold">Roll:</span> Full Stack Dev</p>
                    <p><span className="text-blue-400 font-bold">Shell:</span> Bash / Warp</p>
                    <p><span className="text-blue-400 font-bold">Stack:</span> Html, CSS, TailwindCSS, Javascript, Python, Django, DRF, React</p>
                    <p><span className="text-blue-400 font-bold">Status:</span> Junior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="habilidades" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Stack Tecnológico</h2>
            <p className="text-slate-400">Herramientas que utilizo para dar vida a las ideas</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div key={idx} className="group p-6 bg-slate-800/20 hover:bg-slate-800/40 border border-white/5 hover:border-blue-500/30 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-slate-200">{skill.name}</h3>
                <span className="text-xs text-slate-500 font-mono">{skill.level}</span>
              </div>
            ))}

            <div className="col-span-2 md:col-span-2 p-6 bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-white/5 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white mb-1">Django Rest Framework</h3>
                <p className="text-sm text-slate-400">Especializado en APIs robustas</p>
              </div>
              <Database className="text-blue-500 opacity-50" size={40} />
            </div>

            <div className="col-span-2 md:col-span-2 p-6 bg-gradient-to-br from-violet-900/20 to-slate-900/50 border border-white/5 rounded-xl flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white mb-1">Frontend Moderno</h3>
                <p className="text-sm text-slate-400">React + Tailwind CSS</p>
              </div>
              <Globe className="text-violet-500 opacity-50" size={40} />
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Proyectos Destacados</h2>
              <p className="text-slate-400">Una selección de mis trabajos recientes</p>
            </div>
            <a href={profile.github} className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              Ver todo en GitHub <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-slate-800 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <Github className="text-slate-600 hover:text-white cursor-pointer transition-colors" size={20} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    {project.isFeatured ? (
                      <button
                        onClick={() => setCurrentView(project.id)}
                        className="w-full mt-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 cursor-pointer text-blue-400 border border-blue-500/30 rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2"
                      >
                        Ver Detalles Completos <ExternalLink size={14} />
                      </button>
                    ) : (
                      <div className='flex gap-4'>
                        <button
                          className="w-full mt-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 cursor-pointer text-blue-400 border border-blue-500/30 rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2"
                        >
                          Live demo <ExternalLink size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para colaborar?</h2>
          <p className="text-slate-400 text-lg mb-10">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a href={profile.email} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              <Mail size={18} /> Enviar Correo
            </a>
            <div className="flex gap-4">
              <a href={profile.github} className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors border border-white/10">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-slate-600 text-sm">
        <p>&copy; 2025 Eliezer Motta. Diseñado con React & Tailwind.</p>
      </footer>
    </div>
  );
}