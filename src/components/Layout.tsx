import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, School, Users, Settings, LogOut, Bell, Search, ChevronDown, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ role }: { role: 'professor' | 'coordenador' | 'desenvolvedor' }) {
  const location = useLocation();
  const [selectedOficina, setSelectedOficina] = useState('Artes Visuais');

  const oficinas = [
    "Artes Marciais",
    "Artes Visuais",
    "Capoeira",
    "Contação de Histórias / Literatura",
    "Coral",
    "Dança",
    "Esporte",
    "Funcional",
    "Ginástica Rítmica",
    "GR (Meninas) / Capoeira (Meninos)",
    "Musicalização",
    "Recomposição da Aprendizagem",
    "Recreação",
    "Robótica Educacional",
    "Teatro"
  ];

  const navigation = role === 'professor' 
    ? [
        { name: 'Feed Global', href: '/professor', icon: Home },
        { name: 'Minha Escola', href: '/professor/escola', icon: School },
      ]
    : role === 'coordenador'
    ? [
        { name: 'Gestão de Oficinas', href: '/coordenador', icon: Users },
        { name: 'Minha Escola', href: '/coordenador/escola', icon: School },
        { name: 'Feed Global', href: '/coordenador/feed', icon: Home },
        { name: 'Aprovações', href: '/coordenador/aprovacoes', icon: ClipboardCheck },
      ]
    : [
        { name: 'Status do Sistema', href: '/desenvolvedor', icon: Settings },
      ];

  const userProfile = role === 'professor'
    ? { name: 'Prof. Ana Beatriz', title: 'Professora de Artes', img: 'https://picsum.photos/seed/ana/40/40' }
    : role === 'coordenador'
    ? { name: 'Prof. Ricardo Silva', title: 'Coordenador Pedagógico', img: 'https://picsum.photos/seed/user1/40/40' }
    : { name: 'Admin System', title: 'Desenvolvedor', img: 'https://picsum.photos/seed/dev/40/40' };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Portal Conectado</span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
            <img
              src={userProfile.img}
              alt="User"
              className="w-10 h-10 rounded-full"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-sm font-medium text-slate-900">{userProfile.name}</p>
              <p className="text-xs text-slate-500">{userProfile.title}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-slate-200">
          <Link
            to="/login"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5 text-slate-400" />
            Sair
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar oficinas, escolas, professores..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {role === 'professor' && (
                <div className="relative">
                  <select
                    value={selectedOficina}
                    onChange={(e) => setSelectedOficina(e.target.value)}
                    className="appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer shadow-sm"
                  >
                    <option value="" disabled>Selecione a oficina...</option>
                    {oficinas.map((oficina) => (
                      <option key={oficina} value={oficina}>
                        {oficina}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
