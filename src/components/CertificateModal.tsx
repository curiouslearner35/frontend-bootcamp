import React from 'react';
import { HomeworkCertificate } from '../services/homeworkService';
import { Language } from '../types';
import { Award, CheckCircle2, Download, Printer, X, ShieldCheck, Sparkles } from 'lucide-react';

interface CertificateModalProps {
  certificate: HomeworkCertificate;
  language: Language;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  language,
  onClose
}) => {
  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(certificate.issuedAt).toLocaleDateString(
    language === 'bn' ? 'bn-BD' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6 overflow-hidden">
        {/* Background Decorative Seals */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors print:hidden cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Action Header for Screen Display */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-400" />
            <span className="font-mono font-bold text-xs uppercase tracking-wider text-amber-400">
              {language === 'bn' ? 'অফিসিয়াল সার্টিফাইড সার্টিফিকেট' : 'Official Verified Certificate'}
            </span>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Printer className="h-4 w-4" />
            <span>{language === 'bn' ? 'প্রিন্ট / ডাউনলোড করুন' : 'Print / Download PDF'}</span>
          </button>
        </div>

        {/* Printable Certificate Frame */}
        <div className="p-8 sm:p-12 rounded-2xl border-4 border-double border-amber-500/60 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-center space-y-6 shadow-inner relative">
          {/* Top Seal Badge */}
          <div className="mx-auto h-16 w-16 rounded-full bg-amber-500/10 border-2 border-amber-500/50 flex items-center justify-center text-amber-400 shadow-md">
            <Award className="h-9 w-9" />
          </div>

          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
              CURIOUS LEARNERS ACADEMY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100 tracking-tight">
              {language === 'bn' ? 'কৃতিত্ব সনদের সনদ' : 'Certificate of Achievement'}
            </h2>
            <p className="text-xs font-mono text-slate-400">
              {language === 'bn' ? 'যাচাইকৃত মেন্টর মূল্যায়ন ও কৃতিত্ব' : 'Verified Mentor Assessment & Excellence'}
            </p>
          </div>

          <div className="space-y-2 py-2">
            <p className="text-xs text-slate-400 font-sans">
              {language === 'bn' ? 'এই মর্মে প্রত্যায়ন করা যাচ্ছে যে' : 'This is to certify that'}
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-300 underline underline-offset-8 decoration-amber-500/40">
              {certificate.studentName}
            </h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed pt-2 max-w-lg mx-auto">
              {language === 'bn'
                ? `সফলভাবে লার্নিং হোমওয়ার্ক সম্পন্ন করে মেন্টর মূল্যায়নে উত্তীর্ণ হয়েছেন:`
                : `has successfully submitted the practical homework assignment and passed mentor evaluation for:`}
            </p>
            <p className="text-sm font-extrabold text-indigo-300 font-mono">
              "{certificate.lessonTitle}"
            </p>
          </div>

          {/* Marks & Grade Score Banner */}
          <div className="inline-flex items-center gap-6 px-6 py-2.5 rounded-2xl bg-slate-900 border border-amber-500/30 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px]">{language === 'bn' ? 'অর্জিত মার্কস' : 'Achieved Marks'}</span>
              <span className="text-base font-extrabold text-emerald-400">{certificate.marks} / 100</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div>
              <span className="text-slate-400 block text-[10px]">{language === 'bn' ? 'গ্রেড' : 'Grade'}</span>
              <span className="text-base font-extrabold text-amber-400">{certificate.grade}</span>
            </div>
          </div>

          {/* Certificate Footer Signatures */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="text-left space-y-0.5">
              <span className="text-slate-500 block text-[10px]">{language === 'bn' ? 'পরীক্ষক / মেন্টর' : 'Reviewed & Signed By'}</span>
              <span className="font-bold text-slate-200 block">{certificate.mentorName}</span>
              <span className="text-[10px] text-amber-400 flex items-center gap-1">
                <ShieldCheck className="h-3 w-3" /> Senior Mentor
              </span>
            </div>

            <div className="text-right space-y-0.5">
              <span className="text-slate-500 block text-[10px]">{language === 'bn' ? 'ইস্যুর তারিখ' : 'Date of Issue'}</span>
              <span className="font-bold text-slate-200 block">{formattedDate}</span>
              <span className="text-[10px] text-slate-500 block">Hash: {certificate.certificateHash}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
