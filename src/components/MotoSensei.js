import React from 'react';

const MotoSensei = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-slate-50 font-sans antialiased">
      {/* Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-radial from-blue-500/[0.03] via-transparent to-transparent"></div>
      
      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/5 left-1/10 text-2xl text-blue-500/10 animate-bounce" style={{animationDelay: '0s', animationDuration: '8s'}}>
          🎓
        </div>
        <div className="absolute top-3/5 right-3/20 text-2xl text-orange-500/10 animate-bounce" style={{animationDelay: '2s', animationDuration: '10s'}}>
          🏍️
        </div>
        <div className="absolute bottom-1/3 left-1/5 text-2xl text-blue-500/10 animate-bounce" style={{animationDelay: '4s', animationDuration: '12s'}}>
          📚
        </div>
        <div className="absolute top-2/5 right-1/3 text-2xl text-orange-500/10 animate-bounce" style={{animationDelay: '6s', animationDuration: '9s'}}>
          🏆
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen p-8 text-center max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="mb-16 animate-fade-in-up">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-slate-50/10 backdrop-blur-3xl rounded-3xl p-4 border border-slate-50/10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:bg-slate-50/5 hover:shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                MS
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-50 to-slate-300 bg-clip-text text-transparent tracking-tight leading-tight">
            Moto Sensei
          </h1>
        </div>

        {/* Content Section */}
        <div className="bg-slate-50/5 backdrop-blur-3xl rounded-[2rem] p-12 mb-8 border border-slate-50/10 animate-fade-in-up max-w-2xl w-full" style={{animationDelay: '0.2s'}}>
          <h2 className="text-3xl font-semibold text-slate-50 mb-4 tracking-tight">
            Website Under Construction
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed font-normal">
            We're working hard to bring you an amazing experience. Stay tuned!
          </p>

          {/* Construction Animation */}
          <div className="flex items-center justify-center text-2xl text-orange-500 mb-10 gap-3">
            <div className="animate-spin">🔧</div>
            <div className="flex gap-1">
              <span className="animate-pulse" style={{animationDelay: '0s'}}>.</span>
              <span className="animate-pulse" style={{animationDelay: '0.5s'}}>.</span>
              <span className="animate-pulse" style={{animationDelay: '1s'}}>.</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-slate-50 mb-6 tracking-tight">
              Get in Touch
            </h3>
            
            <div className="space-y-4">
              <a 
                href="https://web.facebook.com/Motosenseii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 bg-slate-50/10 rounded-2xl border border-slate-50/10 transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:bg-slate-50/5 hover:border-orange-500 group"
              >
                <span className="text-xl text-orange-500">📘</span>
                <span className="text-slate-300 font-medium text-sm group-hover:text-slate-50 transition-colors">
                  Follow us on Facebook
                </span>
              </a>
              
              <a 
                href="tel:+94777291450"
                className="flex items-center justify-center gap-3 p-4 bg-slate-50/10 rounded-2xl border border-slate-50/10 transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:bg-slate-50/5 hover:border-orange-500 group"
              >
                <span className="text-xl text-orange-500">📞</span>
                <span className="text-slate-300 font-medium text-sm group-hover:text-slate-50 transition-colors">
                  +94 777 291 450
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-slate-500 text-sm animate-fade-in-up font-normal" style={{animationDelay: '0.4s'}}>
          © 2025 Moto Sensei. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default MotoSensei;

