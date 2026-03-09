import { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, Edit2, Trash2, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function GestaoOficinas() {
  const [activeTab, setActiveTab] = useState('todas');

  const oficinas = [
    {
      id: 1,
      nome: 'Robótica Criativa',
      escola: 'CEMI 1',
      professor: 'Carlos Eduardo',
      alunos: 24,
      vagas: 30,
      status: 'Ativa',
      progresso: 75,
      ultimaAula: '12/10/2023'
    },
    {
      id: 2,
      nome: 'Teatro e Expressão',
      escola: 'CEMI 2',
      professor: 'Marina Silva',
      alunos: 18,
      vagas: 20,
      status: 'Pendente',
      progresso: 0,
      ultimaAula: '-'
    },
    {
      id: 3,
      nome: 'Clube de Leitura',
      escola: 'JOÃO BUENO',
      professor: 'Julia Santos',
      alunos: 15,
      vagas: 15,
      status: 'Concluída',
      progresso: 100,
      ultimaAula: '05/10/2023'
    },
    {
      id: 4,
      nome: 'Matemática Divertida',
      escola: 'GENERAL GEISEL',
      professor: 'Roberto Alves',
      alunos: 28,
      vagas: 30,
      status: 'Ativa',
      progresso: 40,
      ultimaAula: '14/10/2023'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativa': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Pendente': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Concluída': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Ativa': return <CheckCircle className="w-4 h-4 mr-1.5" />;
      case 'Pendente': return <Clock className="w-4 h-4 mr-1.5" />;
      case 'Concluída': return <CheckCircle className="w-4 h-4 mr-1.5" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Gestão de Oficinas</h1>
          <p className="text-slate-500 mt-1">Gerencie todas as oficinas da rede de ensino</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors flex items-center shadow-sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtros Avançados
          </button>
          <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center shadow-sm">
            <Plus className="w-4 h-4 mr-2" />
            Nova Oficina
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total de Oficinas', value: '156', trend: '+12%', color: 'indigo' },
          { label: 'Alunos Atendidos', value: '3.450', trend: '+5%', color: 'emerald' },
          { label: 'Aguardando Aprovação', value: '12', trend: '-2', color: 'amber' },
          { label: 'Taxa de Conclusão', value: '89%', trend: '+4%', color: 'blue' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500 mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
              <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['Todas', 'Ativas', 'Pendentes', 'Concluídas'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por nome, escola ou professor..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <th className="p-4 pl-6">Oficina</th>
                <th className="p-4">Escola / Professor</th>
                <th className="p-4">Ocupação</th>
                <th className="p-4">Status</th>
                <th className="p-4">Progresso</th>
                <th className="p-4 text-right pr-6">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {oficinas.map((oficina) => (
                <tr key={oficina.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="font-bold text-slate-900">{oficina.nome}</div>
                    <div className="text-xs text-slate-500 mt-1">ID: #{oficina.id.toString().padStart(4, '0')}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-slate-700">{oficina.escola}</div>
                    <div className="text-sm text-slate-500 mt-0.5">{oficina.professor}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium text-slate-900">
                        {oficina.alunos} <span className="text-slate-400 font-normal">/ {oficina.vagas}</span>
                      </div>
                      <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${oficina.alunos >= oficina.vagas ? 'bg-red-500' : 'bg-emerald-500'}`}
                          style={{ width: `${(oficina.alunos / oficina.vagas) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(oficina.status)}`}>
                      {getStatusIcon(oficina.status)}
                      {oficina.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-slate-700 w-8">{oficina.progresso}%</span>
                      <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: `${oficina.progresso}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Ver detalhes">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50">
          <p className="text-sm text-slate-500">
            Mostrando <span className="font-medium text-slate-900">1</span> a <span className="font-medium text-slate-900">4</span> de <span className="font-medium text-slate-900">156</span> resultados
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm font-medium text-slate-500 hover:bg-white transition-colors disabled:opacity-50" disabled>
              Anterior
            </button>
            <button className="px-3 py-1 bg-indigo-600 border border-indigo-600 rounded-lg text-sm font-medium text-white shadow-sm">
              1
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-white transition-colors">
              2
            </button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-white transition-colors">
              3
            </button>
            <span className="px-2 py-1 text-slate-400">...</span>
            <button className="px-3 py-1 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-white transition-colors">
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
