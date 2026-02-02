
import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Image as ImageIcon, 
  Loader2, 
  User, 
  Trash2, 
  GraduationCap, 
  FileText, 
  CheckCircle2,
  Info,
  ChevronDown,
  Lightbulb,
  Heart,
  MessageCircle,
  Calendar,
  Clock
} from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const SYSTEM_INSTRUCTION = `You are "IslamicEduBot", a warm and wise AI Study Mentor for students at IslamicEdu. 
Your tone is deeply encouraging, patient, and intellectually stimulating. You embody the IslamicEdu philosophy: integrating faith (iman), knowledge (ilm), and action (amal).

Philosophy Guidelines:
1. HOLISTIC GROWTH: Address the mind (academics), the soul (spiritual reflection), and the body (healthy habits).
2. KHALIFAH (Stewardship): Remind students that they are stewards of the earth. Encourage environmental care and sustainability.
3. KNOWLEDGE IS LIGHT: You MUST use the phrase "Knowledge is a lamp that guides the heart" whenever you are explaining a complex topic, when a student expresses confusion, or when they seem frustrated. It serves as a reminder that learning is a form of spiritual illumination.
4. ENCOURAGEMENT: Never just correct. Always praise the effort first. Use phrases like "Every mistake is a step toward mastery," "Your curiosity is a gift," or "I see the light of understanding growing in you."
5. HOMEWORK FEEDBACK: 
   - Praiseworthy effort (Tahmid).
   - Constructive clarity (Bayyan).
   - "Pro-Tip for Growth" (Ihsan).

Key Tasks:
- Help K-12 students with homework, study schedules, and organization tips.
- Explain Islamic concepts in a simple, age-appropriate way (Kindergarten to Grade 12).
- Encourage mindfulness and goal setting.
- STUDY PLANNER: Help students create personalized study schedules. Consider subjects, exam dates, and learning preferences. Recommend effective time management that balances study with prayer, family, and rest.
- If a student shows an image of their study space, give "Zen Organization" tips to reduce clutter and improve focus.

Motto: "IslamicEdu - Authentic Knowledge, Enlightened Minds."`;

const ZenChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeworkMode, setIsHomeworkMode] = useState(false);
  const [isPlannerMode, setIsPlannerMode] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [homeworkSubject, setHomeworkSubject] = useState('Mathematics');
  
  // Planner state
  const [examDate, setExamDate] = useState('');
  const [learningStyle, setLearningStyle] = useState('Balanced');
  const [studySubject, setStudySubject] = useState('');

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      parts: [{ text: "Assalamu Alaikum, dear student! 🌟 I am IslamicEduBot, your IslamicEdu mentor. Knowledge is a lamp that guides the heart. How can I assist your learning journey today? I can help with homework or even build a personalized study plan for you!" }],
      timestamp: Date.now()
    }
  ]);
  
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      finalPrompt = `[HOMEWORK SUBMISSION - Subject: ${homeworkSubject}]\n\nStudent's work: ${inputText}\n\nPlease provide feedback that aligns with the IslamicEdu philosophy as IslamicEduBot.`;
    } else if (isPlannerMode) {
      finalPrompt = `[STUDY PLAN REQUEST]\nSubject: ${studySubject}\nExam Date: ${examDate}\nLearning Preference: ${learningStyle}\nAdditional Context: ${inputText}\n\nPlease create a personalized, balanced study schedule for me.`;
    }

    if (inputText.trim() || isPlannerMode) {
      userMessage.parts.push({ text: (isHomeworkMode || isPlannerMode) ? finalPrompt : inputText });
    }

    if (selectedImage) {
      const base64Data = selectedImage.split(',')[1];
      userMessage.parts.push({ 
        inlineData: { 
          mimeType: "image/jpeg", 
          data: base64Data 
        } 
      });
    }

    setMessages(prev => [...prev, userMessage]);
    
    setInputText('');
    setSelectedImage(null);
    setIsHomeworkMode(false);
    setIsPlannerMode(false);
    setShowExamples(false);
    
    setIsLoading(true);
    try {
      const responseText = await getGeminiResponse([...messages, userMessage], SYSTEM_INSTRUCTION);
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: responseText }], timestamp: Date.now() }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', parts: [{ text: "Oh dear, let's try that again in a moment! Every effort counts." }], timestamp: Date.now() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleHomeworkMode = () => {
    setIsHomeworkMode(!isHomeworkMode);
    setIsPlannerMode(false);
    if (!isHomeworkMode) {
      setInputText(''); 
      setShowExamples(false);
    }
  };

  const togglePlannerMode = () => {
    setIsPlannerMode(!isPlannerMode);
    setIsHomeworkMode(false);
    if (!isPlannerMode) {
      setInputText('');
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#c5a075] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#b38f66] transition-all transform hover:scale-105 z-50 group"
      >
        <MessageCircle size={24} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#8d6e63] border-2 border-white rounded-full shadow-sm"></span>
      </button>

      {/* Increased z-index to [200] to ensure it covers the Header [100] */}
      <div className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl z-[200] transform transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-5 border-b flex items-center justify-between bg-[#fcf9f5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#c5a075] rounded-full flex items-center justify-center text-white">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm">IslamicEduBot</h3>
              <p className="text-[10px] text-[#c5a075] uppercase tracking-widest font-bold">IslamicEdu Mentor</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-all">
            <X size={20} />
          </button>
        </div>

        {isOpen && (
          <div className="px-5 py-3 bg-white border-b flex gap-2 overflow-x-auto no-scrollbar">
            <button 
              onClick={toggleHomeworkMode}
              className={`flex items-center gap-2 whitespace-nowrap border px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${isHomeworkMode ? 'bg-[#c5a075] text-white border-[#c5a075]' : 'bg-[#fcf9f5] text-[#c5a075] border-[#c5a075]/20 hover:border-[#c5a075]'}`}
            >
              <FileText size={14} />
              Homework
            </button>
            <button 
              onClick={togglePlannerMode}
              className={`flex items-center gap-2 whitespace-nowrap border px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${isPlannerMode ? 'bg-[#c5a075] text-white border-[#c5a075]' : 'bg-[#fcf9f5] text-[#c5a075] border-[#c5a075]/20 hover:border-[#c5a075]'}`}
            >
              <Calendar size={14} />
              Study Planner
            </button>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar bg-[#fafafa]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] ${msg.role === 'user' ? 'bg-[#c5a075] text-white rounded-2xl rounded-tr-none' : 'bg-white text-gray-700 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm'} p-3 text-sm shadow-sm`}>
                {msg.parts.map((part, pIdx) => (
                  <div key={pIdx}>
                    {part.text && <div className="whitespace-pre-wrap leading-relaxed">{part.text}</div>}
                    {part.inlineData && <img src={`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`} alt="Upload" className="mt-2 rounded-lg max-w-full" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {isLoading && <Loader2 className="animate-spin text-[#c5a075] mx-auto" size={20} />}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-5 border-t bg-white relative">
          {isHomeworkMode && (
            <div className="mb-4 p-4 bg-[#fcf9f5] border border-[#c5a075]/20 rounded-xl animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a075]">Homework Feedback Mode</span>
                <button onClick={toggleHomeworkMode} className="text-gray-400"><X size={14} /></button>
              </div>
              <select 
                value={homeworkSubject}
                onChange={(e) => setHomeworkSubject(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg text-xs p-2 outline-none mb-2"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Islamic Studies">Islamic Studies</option>
              </select>
            </div>
          )}

          {isPlannerMode && (
            <div className="mb-4 p-4 bg-[#fcf9f5] border border-[#c5a075]/20 rounded-xl animate-in fade-in slide-in-from-bottom-2 space-y-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#c5a075]">AI Study Planner</span>
                <button onClick={togglePlannerMode} className="text-gray-400"><X size={14} /></button>
              </div>
              
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Subject or Exam Goal"
                  value={studySubject}
                  onChange={(e) => setStudySubject(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg text-xs p-2 outline-none"
                />
                <div className="flex gap-2">
                   <div className="flex-1">
                    <label className="text-[9px] uppercase font-bold text-gray-400 block mb-1 ml-1">Exam Date</label>
                    <input 
                      type="date" 
                      value={examDate}
                      onChange={(e) => setExamDate(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg text-xs p-2 outline-none"
                    />
                   </div>
                   <div className="flex-1">
                    <label className="text-[9px] uppercase font-bold text-gray-400 block mb-1 ml-1">Learning Style</label>
                    <select 
                      value={learningStyle}
                      onChange={(e) => setLearningStyle(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-lg text-xs p-2 outline-none"
                    >
                      <option value="Visual">Visual</option>
                      <option value="Intense">Intense</option>
                      <option value="Balanced">Balanced</option>
                      <option value="Light">Light Pace</option>
                    </select>
                   </div>
                </div>
              </div>
              <p className="text-[9px] text-gray-400 italic">IslamicEduBot will calculate the best schedule for you.</p>
            </div>
          )}

          <div className="flex items-end gap-2">
            <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 p-2 flex flex-col transition-all focus-within:border-[#c5a075]/50">
              <textarea 
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage(); } }}
                placeholder={isPlannerMode ? "Any special requests for the plan?" : "Ask IslamicEduBot..."}
                className="bg-transparent border-none focus:ring-0 text-sm p-2 resize-none max-h-32"
              />
              <div className="flex gap-1 p-1">
                <button onClick={() => fileInputRef.current?.click()} className="p-1 text-gray-400 hover:text-[#c5a075] transition-colors"><ImageIcon size={18} /></button>
                <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
              </div>
            </div>
            <button 
              onClick={handleSendMessage} 
              className="bg-[#c5a075] text-white p-3 rounded-xl hover:bg-[#b38f66] transition-all shadow-md active:scale-95"
            >
              {isPlannerMode ? <Calendar size={18} /> : <Send size={18} />}
            </button>
          </div>
          <div className="mt-3 text-[9px] text-center text-gray-400 font-medium tracking-widest uppercase">
            IslamicEdu - Enlightened Learning
          </div>
        </div>
      </div>
      {/* Backdrop z-index also updated to cover the site content below the header */}
      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[190] transition-all" />}
    </>
  );
};

export default ZenChatbot;
