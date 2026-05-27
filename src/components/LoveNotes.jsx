export default function LoveNotes() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-300 drop-shadow-md mb-6 neon-text">
        My Love Letter to You
      </h1>

      <div className="bg-pink-900 bg-opacity-60 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-pink-500/30 relative overflow-hidden">
        <div className="prose prose-pink prose-lg text-pink-100 max-w-none">
          <p className="text-2xl font-semibold mb-6 neon-text">My Baby Huey Kesayangan,</p>

          <p>
            Happy Birthday My Baby Huey kesayangan aku.
          </p>

          <p>
            Di hari ulang tahun Sayang adalah hari dimana kita telah merayakan hal serupa berulang kali.
          </p>

          <p>
            Doaku selalu sama, semoga Sayang selalu dilimpahkan kebaikan, kesehatan, kebijaksanaan, kelembutan dan rejeki yang melimpah.!
          </p>

          <p>
            Love u more and more sayang.......
          </p>

          <p className="text-2xl font-semibold mt-8 neon-text">Dari yang selalu mencintaimu,</p>
          <p className="text-xl">❤️</p>
        </div>

        {/* Emoji Footer */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 text-3xl sm:text-4xl px-2 py-3 border-t border-pink-400/20">
          <span className="neon-emoji">❤️</span>
          <span className="neon-emoji">🥰</span>
          <span className="neon-emoji">😘</span>
          <span className="neon-emoji">💕</span>
          <span className="neon-emoji">💖</span>
          <span className="neon-emoji">💘</span>
        </div>
      </div>
    </div>
  );
}