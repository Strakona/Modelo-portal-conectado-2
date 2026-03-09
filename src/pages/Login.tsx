import React from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'professor';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden relative">
        <Link 
          to="/" 
          className="absolute top-6 left-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors"
          title="Voltar para seleção de acesso"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <span className="text-white font-bold text-4xl">P</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">Bem-vindo de volta</h2>
          <p className="text-center text-slate-500 mb-8">Acesse o Portal Conectado para gerenciar suas oficinas.</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                E-mail Institucional
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="prof.nome@escola.edu.br"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Senha
                </label>
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Esqueceu a senha?
                </a>
              </div>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                Lembrar-me neste dispositivo
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Entrar no Portal
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Ainda não tem acesso?{' '}
              <Link to="/cadastro" className="font-medium text-indigo-600 hover:text-indigo-500">
                Criar uma conta
              </Link>
            </p>
          </div>
        </div>
        
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-center gap-4 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Ajuda</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-900 transition-colors">Privacidade</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-900 transition-colors">Termos</a>
        </div>
      </div>
    </div>
  );
}
