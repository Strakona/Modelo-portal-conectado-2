import { Users, BookOpen, Star, TrendingUp, Calendar, Clock, MapPin, ChevronRight, MessageSquare, Award } from 'lucide-react';

export default function DashboardEscola() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">CEMI 1</h1>
          <p className="text-slate-500 mt-1">Dashboard da Unidade Escolar</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            Exportar Relatório
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
            Nova Oficina
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12%
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Oficinas Ativas</h3>
          <p className="text-3xl font-bold text-slate-900 mt-1">24</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-4 h-4 mr-1" />
              +5%
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Alunos Participantes</h3>
          <p className="text-3xl font-bold text-slate-900 mt-1">342</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-amber-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
              Média
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Avaliação Geral</h3>
          <p className="text-3xl font-bold text-slate-900 mt-1">4.8<span className="text-lg text-slate-400 font-normal">/5</span></p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-4 h-4 mr-1" />
              +2
            </span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Projetos Concluídos</h3>
          <p className="text-3xl font-bold text-slate-900 mt-1">18</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Oficinas em Andamento */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Oficinas em Andamento</h2>
              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center">
                Ver todas <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { name: 'Robótica Criativa', prof: 'Prof. Carlos', students: 24, progress: 75, status: 'Em andamento' },
                { name: 'Teatro e Expressão', prof: 'Profa. Marina', students: 18, progress: 40, status: 'Inscrições abertas' },
                { name: 'Clube de Leitura', prof: 'Profa. Julia', students: 15, progress: 90, status: 'Finalizando' },
              ].map((oficina, idx) => (
                <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900">{oficina.name}</h3>
                      <p className="text-sm text-slate-500">{oficina.prof} • {oficina.students} alunos</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      oficina.status === 'Em andamento' ? 'bg-blue-50 text-blue-700' :
                      oficina.status === 'Inscrições abertas' ? 'bg-emerald-50 text-emerald-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>
                      {oficina.status}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Progresso</span>
                      <span className="text-slate-900 font-bold">{oficina.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
                        style={{ width: `${oficina.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Últimos Feedbacks */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Últimos Feedbacks</h2>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2].map((_, idx) => (
                <div key={idx} className="flex gap-4">
                  <img
                    src={`https://picsum.photos/seed/student${idx}/40/40`}
                    alt="Aluno"
                    className="w-10 h-10 rounded-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-sm">João Pedro (9º Ano)</h4>
                      <div className="flex text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      A oficina de robótica está sendo incrível! Aprendi a programar meu primeiro robô e estou muito animado para o projeto final.
                    </p>
                    <p className="text-xs text-slate-400 mt-2">Sobre: Robótica Criativa • Há 2 dias</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-8">
          {/* Próximos Encontros */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">Próximos Encontros</h2>
            </div>
            <div className="p-6 space-y-6">
              {[
                { title: 'Robótica Criativa', time: 'Hoje, 14:00', loc: 'Laboratório Maker', type: 'Aula Prática' },
                { title: 'Teatro', time: 'Amanhã, 15:30', loc: 'Auditório', type: 'Ensaio' },
                { title: 'Clube de Leitura', time: 'Qua, 10:00', loc: 'Biblioteca', type: 'Discussão' },
              ].map((evento, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{evento.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <Clock className="w-3 h-3" /> {evento.time}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" /> {evento.loc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50">
              <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                Ver calendário completo
              </button>
            </div>
          </div>

          {/* Avisos da Coordenação */}
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-sm p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-lg font-bold">Mural da Coordenação</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-sm mb-1">Reunião de Planejamento</h4>
                <p className="text-sm text-indigo-100">Lembrete: Sexta-feira às 10h teremos nossa reunião mensal de alinhamento das oficinas.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-sm mb-1">Novos Materiais</h4>
                <p className="text-sm text-indigo-100">Os kits de robótica chegaram! Retirar na secretaria a partir de amanhã.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
