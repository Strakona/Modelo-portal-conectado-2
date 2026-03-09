import { Activity, Cpu, Database, Globe, AlertTriangle, CheckCircle, UserPlus, Check, X } from 'lucide-react';

export default function DashboardDev() {
  const pendingCoordinators = [
    { id: 1, name: 'Fernando Lima', email: 'fernando.lima@edu.br', school: 'CEMI 1', date: 'Hoje, 10:15' },
    { id: 2, name: 'Patricia Souza', email: 'patricia.souza@edu.br', school: 'JOÃO BUENO', date: 'Ontem, 16:40' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Status do Sistema</h1>
          <p className="text-slate-500 mt-1">Monitoramento em tempo real da infraestrutura</p>
        </div>
        <div className="flex gap-3">
          <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            Sistema Operacional
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-slate-600" />
            </div>
            <span className="text-xs font-medium text-emerald-600">Normal</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Uptime</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">99.98%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-slate-600" />
            </div>
            <span className="text-xs font-medium text-emerald-600">45ms avg</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Latência da API</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">42ms</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-slate-600" />
            </div>
            <span className="text-xs font-medium text-amber-600">Atenção</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Uso de CPU</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">78%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-slate-600" />
            </div>
            <span className="text-xs font-medium text-emerald-600">Estável</span>
          </div>
          <h3 className="text-slate-500 text-sm font-medium">Conexões DB</h3>
          <p className="text-2xl font-bold text-slate-900 mt-1">1,240</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Aprovações de Coordenadores */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Solicitações de Acesso</h2>
              <p className="text-sm text-slate-500">Aprovação de novos coordenadores</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-slate-100">
              {pendingCoordinators.map(coord => (
                <li key={coord.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-slate-900">{coord.name}</p>
                      <p className="text-sm text-slate-600">{coord.email}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md">
                          {coord.school}
                        </span>
                        <span className="text-xs text-slate-400">{coord.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded-lg transition-colors border border-emerald-200" title="Aprovar">
                        <Check className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors border border-red-200" title="Recusar">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logs do Sistema */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Logs Recentes</h2>
          </div>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="p-4 font-medium">Timestamp</th>
                  <th className="p-4 font-medium">Nível</th>
                  <th className="p-4 font-medium">Serviço</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-xs">
                <tr>
                  <td className="p-4 text-slate-500">10:42:01</td>
                  <td className="p-4"><span className="text-red-600 flex items-center"><AlertTriangle className="w-3 h-3 mr-1"/> ERROR</span></td>
                  <td className="p-4 text-slate-700">auth-service</td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4 pb-4 pt-0 text-slate-500">Failed to connect to Redis cache</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-500">10:41:15</td>
                  <td className="p-4"><span className="text-amber-600 flex items-center"><AlertTriangle className="w-3 h-3 mr-1"/> WARN</span></td>
                  <td className="p-4 text-slate-700">api-gateway</td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4 pb-4 pt-0 text-slate-500">High latency detected on /api/oficinas</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-500">10:40:00</td>
                  <td className="p-4"><span className="text-emerald-600 flex items-center"><CheckCircle className="w-3 h-3 mr-1"/> INFO</span></td>
                  <td className="p-4 text-slate-700">worker-node-1</td>
                </tr>
                <tr>
                  <td colSpan={3} className="px-4 pb-4 pt-0 text-slate-500">Successfully processed 450 background jobs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
