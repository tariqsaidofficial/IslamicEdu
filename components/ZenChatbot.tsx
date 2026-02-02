
import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Image as ImageIcon, 
  Loader2, 
  FileText, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const SYSTEM_INSTRUCTION = `You are "IslamicEduBot", a warm, wise, and highly encouraging AI Study Mentor. 
Your tone should be patient, intellectually stimulating, and deeply rooted in Islamic wisdom.

Rules for your responses:
1. Always start with a warm greeting like "Assalamu Alaikum, dear seeker of knowledge" or "Welcome, bright mind".
2. Provide structured, clear, and actionable advice. Use bullet points and bold text for key concepts.
3. Integrate the "Metropol Al-Waha" philosophy: Faith (Iman), Knowledge (Ilm), and Action (Amal).
4. When appropriate, share a relevant Quranic verse or Hadith that relates to the student's struggle or subject.
5. For academic topics, provide modern pedagogical tips (like HPL strategies) while maintaining a spiritual context.
6. Be concise yet profound.

Motto: "IslamicEdu - Authentic Knowledge, Enlightened Minds."`;

const ZenChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeworkMode, setIsHomeworkMode] = useState(false);
  const [isPlannerMode, setIsPlannerMode] = useState(false);
  const [homeworkSubject, setHomeworkSubject] = useState('Mathematics');
  
  const [examDate, setExamDate] = useState('');
  const [learningStyle, setLearningStyle] = useState('Balanced');
  const [studySubject, setStudySubject] = useState('');

  const logoUrl = "https://res.cloudinary.com/do5bwj81j/image/upload/v1770008761/Asset_3_gmnqey.webp";

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      parts: [{ text: "Assalamu Alaikum, dear student! 🌟 I am IslamicEduBot, your mentor. Knowledge is a lamp that guides the heart. How can I assist your learning journey today?" }],
      timestamp: Date.now()
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-resize textarea effect
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [inputText]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() && !selectedImage && !isPlannerMode) return;
    
    const userMessage: Message = { role: 'user', parts: [], timestamp: Date.now() };
    let finalPrompt = inputText;
    
    if (isHomeworkMode) {
      finalPrompt = `[HOMEWORK SUBMISSION - Subject: ${homeworkSubject}]\n\nStudent's work: ${inputText}`;
    } else if (isPlannerMode) {
      finalPrompt = `[STUDY PLAN REQUEST]\nSubject: ${studySubject}\nExam Date: ${examDate}\nLearning Preference: ${learningStyle}\nAdditional Context: ${inputText}`;
    }

    if (inputText.trim() || isPlannerMode) {
      userMessage.parts.push({ text: (isHomeworkMode || isPlannerMode) ? finalPrompt : inputText });
    }
    
    if (selectedImage) {
      const base64Data = selectedImage.split(',')[1];
      userMessage.parts.push({ inlineData: { mimeType: "image/jpeg", data: base64Data } });
    }

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setSelectedImage(null);
    setIsHomeworkMode(false);
    setIsPlannerMode(false);
    setIsLoading(true);

    try {
      const responseText = await getGeminiResponse([...messages, userMessage], SYSTEM_INSTRUCTION);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: responseText }], timestamp: Date.now() }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: "I encountered a minor spiritual block. Please try sending your message again!" }], timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 transition-all transform hover:scale-110 active:scale-95 group focus:outline-none"
        style={{ bottom: 'calc(1.5rem + var(--safe-bottom))' }}
      >
        <img 
          src={logoUrl} 
          alt="IslamicEdu Logo" 
          className="w-16 h-16 object-contain drop-shadow-lg" 
        />
        <span className="absolute top-1 right-1 w-4 h-4 bg-[#8d6e63] border-2 border-white rounded-full shadow-sm"></span>
      </button>

      <div className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-[200] transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b flex items-center justify-between bg-[#fcf9f5] pt-[calc(1.25rem+var(--safe-top))]">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="IslamicEdu Logo" className="w-10 h-10 object-contain" />
            <div>
              <h3 className="font-bold text-gray-800 text-sm">IslamicEduBot</h3>
              <p className="text-[10px] text-[#c5a075] uppercase tracking-widest font-bold">IslamicEdu Mentor</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-all p-2">
            <X size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="px-5 py-3 bg-white border-b flex gap-2 overflow-x-auto no-scrollbar">
            <button 
              onClick={() => {setIsHomeworkMode(!isHomeworkMode); setIsPlannerMode(false);}}
              className={`flex items-center gap-2 whitespace-nowrap border px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all min-h-[44px] ${isHomeworkMode ? 'bg-[#c5a075] text-white border-[#c5a075]' : 'bg-[#fcf9f5] text-[#c5a075] border-[#c5a075]/20'}`}
            >
              <FileText size={14} /> Homework
            </button>
            <button 
              onClick={() => {setIsPlannerMode(!isPlannerMode); setIsHomeworkMode(false);}}
              className={`flex items-center gap-2 whitespace-nowrap border px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all min-h-[44px] ${isPlannerMode ? 'bg-[#c5a075] text-white border-[#c5a075]' : 'bg-[#fcf9f5] text-[#c5a075] border-[#c5a075]/20'}`}
            >
              <Calendar size={14} /> Study Planner
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-[#fafafa]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-[#c5a075] text-white rounded-2xl rounded-tr-none' : 'bg-white text-gray-700 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm'} p-4 text-sm shadow-sm`}>
                {msg.parts.map((part, pIdx) => (
                  <div key={pIdx}>
                    {part.text && <div className="whitespace-pre-wrap leading-relaxed">{part.text}</div>}
                    {part.inlineData && <img src={`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`} alt="Upload" className="mt-2 rounded-lg max-w-full" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-center gap-2 text-[#c5a075] text-xs font-bold animate-pulse">
              <Loader2 className="animate-spin" size={16} />
              <span>Seeking wisdom...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-5 border-t bg-white relative pb-[calc(1.25rem+var(--safe-bottom))]">
          {isHomeworkMode && (
            <div className="mb-4 p-4 bg-[#fcf9f5] border border-[#c5a075]/20 rounded-xl">
              <label className="text-[10px] font-black uppercase text-[#c5a075] mb-2 block">Subject</label>
              <select value={homeworkSubject} onChange={(e) => setHomeworkSubject(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg text-xs p-3 outline-none">
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="Islamic Studies">Islamic Studies</option>
                <option value="English">English</option>
              </select>
            </div>
          )}
          {isPlannerMode && (
            <div className="mb-4 p-4 bg-[#fcf9f5] border border-[#c5a075]/20 rounded-xl space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-[#c5a075] block">What are we studying?</label>
                <input type="text" placeholder="e.g. Fiqh, Geometry" value={studySubject} onChange={(e) => setStudySubject(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg text-xs p-3 outline-none" />
              </div>
              <div className="flex gap-2">
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-black uppercase text-[#c5a075] block">Exam Date</label>
                  <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg text-xs p-3 outline-none" />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-black uppercase text-[#c5a075] block">Style</label>
                  <select value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg text-xs p-3 outline-none">
                    <option value="Balanced">Balanced</option>
                    <option value="Intense">Intense</option>
                    <option value="Steady">Steady</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex items-end gap-3">
            <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 p-2 flex flex-col">
              <textarea 
                ref={textareaRef}
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                placeholder="Ask IslamicEduBot..."
                className="bg-transparent border-none focus:ring-0 text-sm p-3 resize-none max-h-40 overflow-y-auto"
              />
              <div className="flex items-center justify-between p-2 border-t border-gray-100 mt-1">
                <div className="flex gap-1">
                  <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-400 hover:text-[#c5a075] transition-colors"><ImageIcon size={18} /></button>
                  <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                  <button className="p-2 text-gray-400 hover:text-[#c5a075] transition-colors"><Sparkles size={18} /></button>
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-2">Shift+Enter for new line</div>
              </div>
            </div>
            <button 
              onClick={handleSendMessage} 
              disabled={isLoading || (!inputText.trim() && !selectedImage && !isPlannerMode)}
              className="bg-[#c5a075] text-white p-5 rounded-2xl hover:bg-[#b38f66] shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed h-fit sticky bottom-0"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[190]" />}
    </>
  );
};

export default ZenChatbot;
