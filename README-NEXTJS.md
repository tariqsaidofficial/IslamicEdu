# IslamicEdu - Next.js Platform

<div align="center">
<img src="/public/images/logo/logo.webp" alt="IslamicEdu Logo" width="200"/>

# IslamicEdu Learning Platform

**Authentic Islamic Knowledge & Spiritual Learning**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

</div>

---

## 🌟 Features

- ✨ **Modern Next.js 15** with App Router
- 🎨 **Beautiful UI** with Tailwind CSS
- 🤖 **AI Chatbot** powered by Google Gemini
- 📱 **Responsive Design** for all devices
- 🎯 **SEO Optimized** with Next.js Metadata API
- ⚡ **Lightning Fast** with Next.js Image Optimization
- 🔒 **Secure** environment variables handling
- 📖 **Islamic Services** (Mosque, Hajj, Ramadan, Quran Study)
- 📅 **Dynamic Ramadan Calendar**
- 🎓 **Educational Programs** and Resources

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A Gemini API key from [Google AI Studio](https://ai.google.dev/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tariqsaidofficial/IslamicEdu.git
   cd IslamicEdu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your actual Gemini API key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
islamic-edu/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── [other-pages]/     # Other routes
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── home/             # Home page components
│   ├── chatbot/          # AI Chatbot
│   └── shared/           # Shared components
├── lib/                  # Utility functions
│   └── geminiService.ts  # AI service
├── public/               # Static assets
│   └── images/          # Local images
├── types/               # TypeScript types
└── next.config.ts       # Next.js configuration
```

---

## 📦 Tech Stack

- **Framework:** Next.js 15.1.6
- **UI Library:** React 19
- **Language:** TypeScript 5.7.2
- **Styling:** Tailwind CSS 3.4.16
- **Icons:** Lucide React 0.463.0
- **AI:** Google Gemini API (@google/genai 1.3.0)

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add your `GEMINI_API_KEY` environment variable
4. Deploy!

---

## 📝 Environment Variables

Required environment variables:

```env
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 👨‍💻 Developer

**Tariq Said**
- Portfolio: [portfolio.dxbmark.com](https://portfolio.dxbmark.com/)
- GitHub: [@tariqsaidofficial](https://github.com/tariqsaidofficial)

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Islamic education resources
- Google Gemini AI
- Next.js team
- Tailwind CSS team
- Open source community

---

<div align="center">

**Built with ❤️ for the Muslim Community**

الْحَمْدُ لِلّهِ رَبِّ الْعَـالَمِينَ

</div>
