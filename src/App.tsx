import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileQuestion, CheckCircle, XCircle, ArrowRight, ArrowLeft, Home, Trophy, Clock } from 'lucide-react';
import { AI_QUESTIONS, Question } from './data/questions';

interface ActiveQuestion extends Question {
  shuffledOptions: string[];
  shuffledCorrectAnswer: number;
}

type ViewState = 'selection' | 'setup_random' | 'quiz' | 'result';

export default function App() {
  const [view, setView] = useState<ViewState>('selection');
  const [currentRange, setCurrentRange] = useState<[number, number] | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<ActiveQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [finalTime, setFinalTime] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (view === 'quiz' && startTime) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [view, startTime]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const ranges = [
    { label: 'المجموعة الأولى', range: [1, 10], baseColor: 'emerald' },
    { label: 'المجموعة الثانية', range: [11, 20], baseColor: 'sky' },
    { label: 'المجموعة الثالثة', range: [21, 30], baseColor: 'orange' },
    { label: 'المجموعة الرابعة', range: [31, 40], baseColor: 'purple' },
    { label: 'المجموعة الخامسة', range: [41, 50], baseColor: 'rose' },
    { label: 'المجموعة السادسة', range: [51, 60], baseColor: 'amber' },
  ];

  const getColorClasses = (color: string) => {
    const map: Record<string, { border: string, hover: string, iconBg: string, text: string }> = {
      emerald: { border: 'border-emerald-500', hover: 'hover:bg-emerald-50', iconBg: 'bg-emerald-100', text: 'text-emerald-600' },
      sky: { border: 'border-sky-500', hover: 'hover:bg-sky-50', iconBg: 'bg-sky-100', text: 'text-sky-600' },
      orange: { border: 'border-orange-500', hover: 'hover:bg-orange-50', iconBg: 'bg-orange-100', text: 'text-orange-600' },
      purple: { border: 'border-purple-500', hover: 'hover:bg-purple-50', iconBg: 'bg-purple-100', text: 'text-purple-600' },
      rose: { border: 'border-rose-500', hover: 'hover:bg-rose-50', iconBg: 'bg-rose-100', text: 'text-rose-600' },
      amber: { border: 'border-amber-500', hover: 'hover:bg-amber-50', iconBg: 'bg-amber-100', text: 'text-amber-600' }
    };
    return map[color] || map.purple;
  };

  const prepareQuestions = (questions: Question[]) => {
    return questions.map(q => {
      const optionsWithCorrectness = q.options.map((opt, i) => ({
        text: opt,
        isCorrect: i === q.correctAnswer
      }));

      for (let i = optionsWithCorrectness.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithCorrectness[i], optionsWithCorrectness[j]] = [optionsWithCorrectness[j], optionsWithCorrectness[i]];
      }

      return {
        ...q,
        shuffledOptions: optionsWithCorrectness.map(o => o.text),
        shuffledCorrectAnswer: optionsWithCorrectness.findIndex(o => o.isCorrect)
      };
    });
  };

  const startQuizSession = (rawQuestions: Question[], range: [number, number] | null) => {
    setActiveQuestions(prepareQuestions(rawQuestions));
    setCurrentRange(range);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setStartTime(Date.now());
    setTimeElapsed(0);
    setView('quiz');
  };

  const handleStartQuiz = (range: [number, number]) => {
    const rawQuestions = AI_QUESTIONS.slice(range[0] - 1, range[1]);
    startQuizSession(rawQuestions, range);
  };

  const handleStartRandomQuiz = (count: number) => {
    const rawQuestions = [...AI_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    startQuizSession(rawQuestions, null);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    if (optionIndex === activeQuestions[currentIndex].shuffledCorrectAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setFinalTime(Math.floor((Date.now() - (startTime || 0)) / 1000));
      setView('result');
    }
  };

  const handleGoHome = () => {
    setView('selection');
    setCurrentRange(null);
  };

  return (
    <div className="min-h-screen w-full bg-[#FDF4FF] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-slate-900 flex flex-col items-center justify-center p-4 lg:p-8" dir="rtl">
      <AnimatePresence mode="wait">
        {/* VIEW: SELECTION */}
        {view === 'selection' && (
          <motion.div 
            key="selection"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-xl overflow-hidden p-8 md:p-12 border-4 border-dashed border-purple-200 text-center">
              <div className="mb-10 flex flex-col items-center justify-center">
                <div className="h-24 w-24 bg-yellow-400 text-yellow-900 rounded-2xl flex items-center justify-center text-5xl mb-6 shadow-lg border-b-4 border-yellow-600">
                  💡
                </div>
                <h1 className="text-4xl font-black tracking-tight text-purple-900">
                  تحدي المعرفة
                </h1>
                <p className="mt-3 text-purple-600 font-medium text-lg">
                  اختر مجموعة الأسئلة لتبدأ الاختبار
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ranges.map((item, i) => {
                  const colors = getColorClasses(item.baseColor);
                  return (
                    <button
                      key={i}
                      onClick={() => handleStartQuiz(item.range as [number, number])}
                      className={`h-40 bg-white border-b-8 border-r-4 ${colors.border} rounded-[2.5rem] flex flex-col items-center justify-center gap-3 hover:-translate-y-1 ${colors.hover} transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer`}
                    >
                      <span className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${colors.iconBg} ${colors.text}`}>
                        0{i + 1}
                      </span>
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-slate-800">{item.label}</h3>
                        <p className={`font-bold mt-1 ${colors.text}`}>الأسئلة ({item.range[0]} - {item.range[1]})</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-12 bg-white border-4 border-dashed border-purple-200 rounded-[3rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                <div className="flex flex-col gap-2 text-right md:w-2/3">
                  <h4 className="text-2xl font-bold text-purple-900">مستعد للتحدي النهائي؟</h4>
                  <p className="text-slate-500 font-medium">اختبار شامل يغطي أسئلة متنوعة بشكل عشوائي مع حساب الوقت والتصحيح الفوري للإجابات.</p>
                </div>
                <button 
                  onClick={() => setView('setup_random')} 
                  className="px-10 flex-shrink-0 py-5 bg-gradient-to-r from-[#F0ABFC] to-[#C084FC] text-white rounded-[2rem] font-black text-xl shadow-xl hover:shadow-2xl transition-all w-full md:w-auto hover:-translate-y-1 cursor-pointer"
                >
                  التحدي العشوائي 🚀
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW: SETUP RANDOM */}
        {view === 'setup_random' && (
          <motion.div 
            key="setup_random"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-[3rem] shadow-xl overflow-hidden p-8 md:p-12 border-4 border-dashed border-purple-200 text-center">
              <div className="mb-10 flex justify-center">
                <div className="h-24 w-24 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shadow-lg border-b-4 border-purple-300">
                  <FileQuestion className="w-12 h-12" />
                </div>
              </div>
              <h2 className="text-4xl font-black text-purple-900 mb-4">إعداد التحدي العشوائي</h2>
              <p className="text-purple-600 mb-10 text-lg font-medium">حدد عدد الأسئلة التي ترغب في الإجابة عليها. سيتم حساب الوقت الإجمالي وتصحيح الإجابات فوراً بعد التحديد.</p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[10, 20, 30, AI_QUESTIONS.length].map(count => (
                  <button
                    key={count}
                    onClick={() => handleStartRandomQuiz(count)}
                    className="p-6 h-36 bg-white border-b-8 border-r-4 border-purple-200 hover:border-purple-500 hover:bg-purple-50 rounded-[2.5rem] text-2xl font-black text-purple-700 hover:text-purple-900 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 flex flex-col justify-center items-center gap-3 cursor-pointer"
                  >
                    <span className="text-4xl">{count === AI_QUESTIONS.length ? '🔥' : '✨'}</span>
                    <span>{count === AI_QUESTIONS.length ? 'الكل' : `${count} سؤال`}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleGoHome}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm mx-auto cursor-pointer"
              >
                <Home className="w-5 h-5" />
                العودة للرئيسية
              </button>
            </div>
          </motion.div>
        )}

        {/* VIEW: QUIZ */}
        {view === 'quiz' && activeQuestions.length > 0 && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="w-full max-w-3xl"
          >
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-b-8 border-purple-500 flex flex-col min-h-[600px]">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#F0ABFC] to-[#C084FC] px-6 md:px-8 py-4 md:py-5 flex justify-between items-center text-white shadow-md z-10 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 px-3 md:px-4 py-2 rounded-full font-bold font-mono tracking-wider flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span dir="ltr">{formatTime(timeElapsed)}</span>
                  </div>
                  <div className="font-black text-lg md:text-xl drop-shadow-sm">
                    السؤال {currentIndex + 1} من {activeQuestions.length}
                  </div>
                </div>
                <button 
                  onClick={handleGoHome}
                  className="flex items-center gap-2 hover:bg-white/20 px-4 py-2 rounded-full transition-colors text-sm font-bold cursor-pointer"
                >
                  الرئيسية <Home className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-purple-100 h-2 shadow-inner">
                <motion.div 
                  className="bg-purple-600 h-2 rounded-e-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex) / activeQuestions.length) * 100}%` }}
                />
              </div>

              {/* Question Content - LTR for English */}
              <div className="p-8 md:p-10 flex-1 flex flex-col bg-white" dir="ltr">
                <h2 className="text-2xl md:text-3xl font-black mb-10 whitespace-pre-line leading-snug text-slate-800">
                  <span className="text-purple-600 font-black mr-3 bg-purple-100 px-3 py-1 rounded-2xl">{activeQuestions[currentIndex].id}.</span>
                  {activeQuestions[currentIndex].question}
                </h2>

                <div className="space-y-3 mt-auto">
                  {activeQuestions[currentIndex].shuffledOptions.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === activeQuestions[currentIndex].shuffledCorrectAnswer;
                    
                    let buttonClass = "w-full text-left p-5 rounded-[2rem] border-2 transition-all duration-200 flex items-start gap-4 shadow-sm cursor-pointer ";
                    let icon = null;

                    if (!isAnswered) {
                      buttonClass += "border-purple-100 bg-white hover:border-purple-400 hover:bg-purple-50 hover:shadow-md hover:-translate-y-1";
                    } else {
                      if (isCorrect) {
                        buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md";
                        icon = <CheckCircle className="w-7 h-7 text-emerald-600 shrink-0 mt-1" />;
                      } else if (isSelected && !isCorrect) {
                        buttonClass += "border-rose-500 bg-rose-50 text-rose-900 shadow-md";
                        icon = <XCircle className="w-7 h-7 text-rose-600 shrink-0 mt-1" />;
                      } else {
                        buttonClass += "border-slate-100 bg-white opacity-50";
                      }
                    }

                    const markerClass = isAnswered 
                      ? (isCorrect ? "bg-emerald-600 text-white border-emerald-600" : isSelected ? "bg-rose-600 text-white border-rose-600" : "border-slate-200 text-slate-400 bg-slate-50") 
                      : (isSelected ? "bg-purple-600 text-white border-purple-600" : "border-purple-200 bg-purple-50 text-purple-700");

                    const optionLetter = String.fromCharCode(65 + idx); // A, B, C, D

                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        disabled={isAnswered}
                        className={buttonClass}
                      >
                        <span className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0 text-lg font-black ${markerClass}`}>
                          {optionLetter}
                        </span>
                        <span className="flex-1 text-lg font-medium pt-1 pr-2 leading-relaxed">{option}</span>
                        {isAnswered && icon}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Footer */}
              <div className="bg-purple-50/50 px-8 py-6 border-t border-purple-100 flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className={`flex items-center gap-3 px-10 py-4 rounded-full font-black text-lg transition-all ${
                    isAnswered 
                      ? 'bg-gradient-to-r from-[#F0ABFC] to-[#C084FC] text-white hover:shadow-lg hover:-translate-y-1 cursor-pointer' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  dir="ltr"
                >
                  {currentIndex + 1 === activeQuestions.length ? (
                    <>Show Results <Trophy className="w-6 h-6 ml-2" /></>
                  ) : (
                    <>Next Question <ArrowRight className="w-6 h-6 ml-2" /></>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW: RESULT */}
        {view === 'result' && (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md"
          >
            <div className="bg-gradient-to-br from-[#F0ABFC] to-[#C084FC] rounded-[3rem] shadow-2xl p-10 text-center text-white relative overflow-hidden">
              <div className="mb-6 flex justify-center relative z-10">
                <div className="h-28 w-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-inner">
                  <span className="text-6xl pt-2">🏆</span>
                </div>
              </div>
              
              <h2 className="text-4xl font-black tracking-tight mb-2 relative z-10 drop-shadow-md">
                اكتمل الاختبار!
              </h2>
              <p className="font-bold opacity-90 mb-8 relative z-10">
                {currentRange 
                  ? `لقد انتهيت من أسئلة المجموعة (${currentRange[0]} - ${currentRange[1]})`
                  : `لقد أنهيت التحدي العشوائي المُكون من ${activeQuestions.length} سؤال`}
              </p>

              <div className="bg-white/20 backdrop-blur-md rounded-[2rem] p-6 md:p-8 mb-8 border border-white/30 relative z-10 shadow-sm grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">النتيجة النهائية</div>
                  <div className="text-5xl md:text-6xl font-black flex items-baseline justify-center gap-2 drop-shadow-lg" dir="ltr">
                    <span>{score}</span>
                    <span className="text-2xl md:text-3xl opacity-80 font-bold">/ {activeQuestions.length}</span>
                  </div>
                </div>
                <div className="border-r-2 border-white/20 pr-4">
                  <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">وقت الإجابة</div>
                  <div className="text-4xl md:text-5xl font-black flex items-center justify-center h-full drop-shadow-lg" dir="ltr">
                    {formatTime(finalTime)}
                  </div>
                </div>
              </div>

              <button
                onClick={handleGoHome}
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white text-purple-700 rounded-full font-black text-xl hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative z-10 cursor-pointer"
              >
                <Home className="w-6 h-6" />
                العودة للصفحة الرئيسية
              </button>

              {/* Decorative background elements */}
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-purple-900/10 blur-3xl rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
