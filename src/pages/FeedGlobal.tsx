import { useState } from 'react';
import { Image, Video, FileText, Send, MoreHorizontal, Heart, MessageCircle, Share2, MapPin, Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function FeedGlobal({ isPublic = false, role = 'professor' }: { isPublic?: boolean, role?: string }) {
  const [activeTab, setActiveTab] = useState('todas');
  const [postStatus, setPostStatus] = useState<'idle' | 'pending' | 'success'>('idle');

  const handlePost = () => {
    if (role === 'professor') {
      setPostStatus('pending');
      setTimeout(() => setPostStatus('idle'), 4000);
    } else {
      setPostStatus('success');
      setTimeout(() => setPostStatus('idle'), 3000);
    }
  };

  const posts = [
    {
      id: 1,
      author: {
        name: 'Prof. Ana Beatriz',
        role: 'Professora de Artes',
        avatar: 'https://picsum.photos/seed/ana/40/40',
        school: 'CEMI 1'
      },
      time: 'Há 2 horas',
      content: 'Hoje finalizamos o projeto de muralismo com as turmas do 9º ano! O resultado ficou incrível e os alunos adoraram a experiência de trabalhar com diferentes texturas e cores. Agradeço à direção pelo apoio com os materiais.',
      images: ['https://picsum.photos/seed/mural1/600/400', 'https://picsum.photos/seed/mural2/600/400'],
      likes: 45,
      comments: 12,
      tags: ['Artes', 'ProjetoPrático', 'Muralismo']
    },
    {
      id: 2,
      author: {
        name: 'Carlos Eduardo',
        role: 'Coordenador de Tecnologia',
        avatar: 'https://picsum.photos/seed/carlos/40/40',
        school: 'JOÃO BUENO'
      },
      time: 'Há 5 horas',
      content: 'Atenção professores: As inscrições para a oficina de "Robótica Educacional Básica" estão abertas! Serão 4 encontros práticos utilizando kits Arduino. Vagas limitadas.',
      event: {
        title: 'Oficina: Robótica Educacional Básica',
        date: '15 a 18 de Outubro',
        time: '14h às 17h',
        location: 'Laboratório Central Maker',
        spots: '20 vagas'
      },
      likes: 89,
      comments: 34,
      tags: ['Tecnologia', 'Formação', 'Robótica']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Feed Global</h1>
          <p className="text-slate-500 mt-1">Acompanhe as novidades da rede de ensino</p>
        </div>
        {!isPublic && (
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Filtrar
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm">
              Nova Publicação
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-slate-200 mb-8">
        {['Todas', 'Minha Escola', 'Oficinas', 'Avisos'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-4 text-sm font-medium transition-colors relative ${
              activeTab === tab.toLowerCase()
                ? 'text-indigo-600'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Create Post */}
      {!isPublic && (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex gap-4">
            <img
              src="https://picsum.photos/seed/user1/48/48"
              alt="User"
              className="w-12 h-12 rounded-full border-2 border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1">
              <textarea
                placeholder="Compartilhe uma novidade, projeto ou aviso..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none min-h-[100px]"
              ></textarea>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-2">
                    <Image className="w-5 h-5" />
                    <span className="text-sm font-medium hidden sm:inline">Foto</span>
                  </button>
                  <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    <span className="text-sm font-medium hidden sm:inline">Vídeo</span>
                  </button>
                  <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-medium hidden sm:inline">Documento</span>
                  </button>
                </div>
                <button 
                  onClick={handlePost}
                  disabled={postStatus !== 'idle'}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  Publicar
                </button>
              </div>
              
              {postStatus === 'pending' && (
                <div className="mt-4 p-3 bg-amber-50 text-amber-700 rounded-lg text-sm flex items-center gap-2 border border-amber-200 animate-in fade-in slide-in-from-top-2">
                  <Clock className="w-4 h-4" />
                  Sua publicação foi enviada para aprovação do coordenador.
                </div>
              )}
              {postStatus === 'success' && (
                <div className="mt-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg text-sm flex items-center gap-2 border border-emerald-200 animate-in fade-in slide-in-from-top-2">
                  <CheckCircle className="w-4 h-4" />
                  Publicado com sucesso!
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Post Header */}
            <div className="p-6 flex items-start justify-between">
              <div className="flex gap-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-slate-900">{post.author.name}</h3>
                  <p className="text-sm text-slate-500">{post.author.role} • {post.author.school}</p>
                  <p className="text-xs text-slate-400 mt-1">{post.time}</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            {/* Post Content */}
            <div className="px-6 pb-4">
              <p className="text-slate-800 leading-relaxed">{post.content}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Media/Event */}
            {post.images && (
              <div className="grid grid-cols-2 gap-1 px-6 pb-6">
                {post.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Post media"
                    className={`w-full h-64 object-cover ${idx === 0 ? 'rounded-l-xl' : 'rounded-r-xl'}`}
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            )}

            {post.event && (
              <div className="mx-6 mb-6 p-5 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="font-bold text-slate-900 text-lg mb-4">{post.event.title}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">{post.event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">{post.event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">{post.event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm">{post.event.spots}</span>
                  </div>
                </div>
                <button className="mt-6 w-full py-2.5 bg-white border border-indigo-200 text-indigo-700 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors">
                  Inscrever-se na Oficina
                </button>
              </div>
            )}

            {/* Post Actions */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-red-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-indigo-50 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{post.comments}</span>
                </button>
              </div>
              <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors group">
                <div className="p-2 rounded-full group-hover:bg-slate-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="font-medium hidden sm:inline">Compartilhar</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
