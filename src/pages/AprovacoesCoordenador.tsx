import { useState } from 'react';
import { Check, X, User, FileText, Clock } from 'lucide-react';

export default function AprovacoesCoordenador() {
  const [activeTab, setActiveTab] = useState<'usuarios' | 'publicacoes'>('publicacoes');

  const pendingUsers = [
    { id: 1, name: 'Mariana Costa', email: 'mariana.costa@edu.br', role: 'Professora de Dança', date: 'Hoje, 09:30' },
    { id: 2, name: 'Roberto Alves', email: 'roberto.alves@edu.br', role: 'Professor de Matemática', date: 'Ontem, 14:15' },
  ];

  const pendingPosts = [
    { 
      id: 1, 
      author: 'Prof. Ana Beatriz', 
      content: 'Turma do 9º ano finalizou os projetos de robótica hoje! Muito orgulho do empenho de todos.',
      date: 'Há 2 horas'
    },
    { 
      id: 2, 
      author: 'Prof. Carlos Eduardo', 
      content: 'Lembrando a todos que amanhã teremos a apresentação do Coral no pátio principal às 10h.',
      date: 'Há 5 horas'
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Aprovações Pendentes</h1>
        <p className="text-slate-500 mt-1">Gerencie as solicitações de acesso e publicações da sua unidade</p>
      </div>

      <div className="flex gap-6 border-b border-slate-200 mb-8">
        <button
          onClick={() => setActiveTab('publicacoes')}
          className={`pb-4 text-sm font-medium transition-colors relative flex items-center gap-2 ${
            activeTab === 'publicacoes'
              ? 'text-indigo-600'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          Publicações ({pendingPosts.length})
          {activeTab === 'publicacoes' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('usuarios')}
          className={`pb-4 text-sm font-medium transition-colors relative flex items-center gap-2 ${
            activeTab === 'usuarios'
              ? 'text-indigo-600'
              : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          <User className="w-4 h-4" />
          Novos Professores ({pendingUsers.length})
          {activeTab === 'usuarios' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></span>
          )}
        </button>
      </div>

      {activeTab === 'publicacoes' && (
        <div className="space-y-4">
          {pendingPosts.map(post => (
            <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-6 justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-slate-900">{post.author}</span>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.date}
                  </span>
                </div>
                <p className="text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  "{post.content}"
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-emerald-200">
                  <Check className="w-4 h-4" /> Aprovar
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-red-200">
                  <X className="w-4 h-4" /> Recusar
                </button>
              </div>
            </div>
          ))}
          {pendingPosts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">Nenhuma publicação pendente de aprovação.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'usuarios' && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="p-4 font-medium">Nome</th>
                <th className="p-4 font-medium">E-mail</th>
                <th className="p-4 font-medium">Cargo/Oficina</th>
                <th className="p-4 font-medium">Data da Solicitação</th>
                <th className="p-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pendingUsers.map(user => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{user.name}</td>
                  <td className="p-4 text-slate-600">{user.email}</td>
                  <td className="p-4 text-slate-600">{user.role}</td>
                  <td className="p-4 text-slate-500">{user.date}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200" title="Aprovar">
                      <Check className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors border border-red-200" title="Recusar">
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {pendingUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    Nenhuma solicitação de acesso pendente.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
