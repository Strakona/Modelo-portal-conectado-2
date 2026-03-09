import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function Cadastro() {
  const [role, setRole] = useState('professor');
  const [submitted, setSubmitted] = useState(false);

  const escolas = [
    "CEMI 1",
    "CEMI 2",
    "JOÃO BUENO",
    "GENERAL GEISEL",
    "JORGE MOREIRA",
    "LIOMAR GOMES"
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Cadastro Enviado!</h2>
          <p className="text-slate-600 mb-8">
            Sua solicitação de conta como <strong>{role}</strong> foi enviada para aprovação. 
            {role === 'professor' ? ' O coordenador da sua unidade' : ' O administrador do sistema'} avaliará seu pedido em breve.
          </p>
          <Link
            to="/"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden relative">
        <Link 
          to="/login" 
          className="absolute top-6 left-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors"
          title="Voltar para o login"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
              <span className="text-white font-bold text-4xl">P</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Criar Conta</h2>
          <p className="text-center text-slate-500 mb-8">Solicite seu acesso ao Portal Conectado</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Tipo de Acesso
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('professor')}
                  className={`py-2 px-4 rounded-xl border text-sm font-medium transition-colors ${
                    role === 'professor' 
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Professor
                </button>
                <button
                  type="button"
                  onClick={() => setRole('coordenador')}
                  className={`py-2 px-4 rounded-xl border text-sm font-medium transition-colors ${
                    role === 'coordenador' 
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Coordenador
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                Nome Completo
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                E-mail Institucional
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="nome@escola.edu.br"
              />
            </div>

            {role === 'professor' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-slate-700 mb-1">
                    Unidade Escolar
                  </label>
                  <select
                    id="school"
                    required
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
                  >
                    <option value="" disabled>Selecione sua escola...</option>
                    {escolas.map(escola => (
                      <option key={escola} value={escola}>{escola}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="oficina" className="block text-sm font-medium text-slate-700 mb-1">
                    Oficina
                  </label>
                  <select
                    id="oficina"
                    required
                    defaultValue=""
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-white"
                  >
                    <option value="" disabled>Selecione a oficina...</option>
                    {oficinas.map(oficina => (
                      <option key={oficina} value={oficina}>{oficina}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors mt-2"
            >
              Solicitar Acesso
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              Já tem uma conta?{' '}
              <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Faça login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
