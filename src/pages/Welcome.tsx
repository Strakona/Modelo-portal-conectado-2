import { Link } from 'react-router-dom';
import { Users, BookOpen, Code, Globe, ArrowRight } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center mb-12">
        <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg transform -rotate-6">
          <span className="text-white font-bold text-5xl">P</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Bem-vindo ao Portal Conectado
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A plataforma integrada para gestão de oficinas, acompanhamento escolar e engajamento da comunidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Acesso Público - Destaque */}
        <Link 
          to="/publico" 
          className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group flex flex-col sm:flex-row items-center gap-6 text-left"
        >
          <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
            <Globe className="w-8 h-8 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Acesso Público</h2>
            <p className="text-slate-600">Explore o mural global, veja os projetos em destaque e acompanhe as novidades da rede de ensino sem precisar de cadastro.</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <ArrowRight className="w-6 h-6" />
          </div>
        </Link>

        {/* Professor */}
        <Link 
          to="/login?role=professor" 
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Sou Professor</h3>
            <p className="text-sm text-slate-600">Gerencie suas oficinas, turmas e compartilhe atualizações.</p>
          </div>
        </Link>

        {/* Coordenador */}
        <Link 
          to="/login?role=coordenador" 
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Sou Coordenador</h3>
            <p className="text-sm text-slate-600">Visão geral da escola, gestão de oficinas e relatórios.</p>
          </div>
        </Link>

        {/* Desenvolvedor */}
        <Link 
          to="/login?role=desenvolvedor" 
          className="md:col-span-2 bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-800 hover:border-slate-700 hover:shadow-md transition-all group flex items-start gap-4"
        >
          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors">
            <Code className="w-6 h-6 text-slate-300" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Acesso Desenvolvedor</h3>
            <p className="text-sm text-slate-400">Monitoramento do sistema, logs de erro e configurações técnicas da plataforma.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
