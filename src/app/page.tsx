"use client"
import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  MapPin,
  Phone,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [category, setCategory] = useState('');

  // Identitas Sekolah berdasarkan Logo
  const schoolName = "AL ASMAUL HUSNA";
  const location = "JI.Sampuma Km.3,5 Desa Hidayah Makmur Kec. Simpang Empat, Kab. Tanah Bumbu Provinsi Kalimantan Selatan";

  const googleFormLinks: any = {
    smp: "https://forms.gle/yhdEDuRPTNV1CPKY9",
    sma: "https://forms.gle/MJJuJD8KCbvHjQmq6"
  };

  const categories = [
    {
      id: 'smp',
      label: 'SMP ISLAM TERPADU',
      subtitle: 'Al Asmaul Husna - Tanah Bumbu',
      icon: <BookOpen className="w-7 h-7" />,
      color: 'from-green-500 to-green-700',
      lightColor: 'bg-green-50',
    },
    {
      id: 'sma',
      label: 'SMA IT AL ASMAUL HUSNA',
      subtitle: 'Tanah Bumbu - Kalimantan Selatan',
      icon: <GraduationCap className="w-7 h-7" />,
      color: 'from-emerald-600 to-teal-700',
      lightColor: 'bg-emerald-50',
    },
  ];

  const handleRedirect = () => {
    if (category && googleFormLinks[category]) {
      window.open(googleFormLinks[category], '_blank');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F0FDF4] flex flex-col font-sans text-slate-900 overflow-x-hidden">
      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-[120px] -ml-48 -mb-48"></div>

        <div className="max-w-4xl w-full flex flex-col items-center relative z-10 py-6">

          {/* Logo Section: SMP - YAYASAN - SMA */}
          <div className="flex flex-col items-center mb-10 w-full">
            <div className="flex items-center justify-center gap-4 md:gap-8 mb-6">
              {/* Logo SMP (Kiri) */}
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl shadow-lg border-2 border-green-100 p-2 flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                <img
                  src="/SMP.jpeg"
                  alt="Logo SMPIT"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Logo Yayasan (Tengah - Lebih Besar) */}
              <div className="relative">
                <div className="absolute -inset-4 bg-white/50 rounded-full blur-xl opacity-70"></div>
                <div className="relative w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-green-500 p-2 overflow-hidden transform hover:scale-110 transition-transform duration-500">
                  <img
                    src="logo.jpeg"
                    alt="Logo Yayasan Al Asmaul Husna"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Logo SMA (Kanan) */}
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl shadow-lg border-2 border-green-100 p-2 flex items-center justify-center overflow-hidden transition-transform hover:scale-105">
                <img
                  src="SMA.jpeg"
                  alt="Logo SMAIT"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-black text-2xl md:text-3xl tracking-tight text-green-800 uppercase leading-none">
                Pondok Pesantren {schoolName}
              </h2>
              <div className="mt-3 inline-flex items-center gap-2 bg-green-600 px-4 py-1.5 rounded-full shadow-lg shadow-green-200">
                <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                <p className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.2em]">PORTAL PENDAFTARAN RESMI</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white flex flex-col items-center">

            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-4xl font-black text-slate-800 mb-3 tracking-tight leading-tight">
                Pendaftaran Siswa <span className="text-green-600">Baru</span>
              </h1>
              <p className="text-slate-500 text-sm md:text-base max-w-sm mx-auto font-medium">
                Pilih jenjang pendidikan di bawah ini untuk memulai pengisian formulir pendaftaran online.
              </p>
            </div>

            {/* Category Grid */}
            <div className="grid grid-cols-1 gap-4 w-full mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`group relative rounded-2xl p-5 text-left transition-all duration-300 border-2 flex items-center gap-5 ${category === cat.id
                    ? 'bg-white border-green-500 ring-4 ring-green-500/10 translate-y-[-2px] shadow-md'
                    : 'bg-white/50 border-transparent hover:border-slate-200'
                    }`}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${category === cat.id
                    ? `bg-gradient-to-br ${cat.color} text-white shadow-lg`
                    : `bg-slate-100 text-slate-500`
                    }`}>
                    {cat.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-black text-lg transition-colors ${category === cat.id ? 'text-green-700' : 'text-slate-800'}`}>
                      {cat.label}
                    </h3>
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">{cat.subtitle}</p>
                  </div>
                  {category === cat.id && (
                    <div className="ml-auto flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                      <div className="w-3 h-3 bg-green-600 rounded-full relative"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Action Button */}
            <div className="w-full">
              <button
                onClick={handleRedirect}
                disabled={!category}
                className={`group w-full py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 ${category
                  ? 'bg-green-700 text-white shadow-xl shadow-green-900/20 active:scale-95'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-60'
                  }`}
              >
                Isi Formulir Online <ArrowRight className={`w-5 h-5 transition-transform ${category ? 'group-hover:translate-x-1' : ''}`} />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <ExternalLink className="w-3 h-3" />
                <span>Buka di tab baru google form</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Non-Sticky */}
      <footer className="w-full bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">

          {/* Address & Copyright */}
          <div className="flex flex-col gap-4 order-3 md:order-1 items-center md:items-start">
            <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-3 rounded-2xl pr-6 border border-slate-100">
              <div className="bg-green-100 p-2 rounded-xl">
                <MapPin className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Alamat Sekolah</p>
                <p className="text-xs md:text-sm font-bold text-slate-700">{location}</p>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">
              © 2026 Pondok Pesantren {schoolName} <br className="md:hidden" />· Tanah Bumbu, Kalsel
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 order-1 md:order-2">
            {/* Contact 1 */}
            <div className="flex items-center gap-4 group">
              <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-100 transition-all border border-green-100">
                <Phone className="w-6 h-6 text-green-700" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Ustadzah Khairiah</p>
                <p className="text-base font-black text-slate-800 tracking-tight">+62 895-3365-06766</p>
              </div>
            </div>
            {/* Contact 2 */}
            <div className="flex items-center gap-4 group">
              <div className="bg-emerald-50 p-4 rounded-2xl group-hover:bg-emerald-100 transition-all border border-emerald-100">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Ustadz Lutfi</p>
                <p className="text-base font-black text-slate-800 tracking-tight">+62 812-5351-7456</p>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;