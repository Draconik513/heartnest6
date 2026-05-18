export default function LoveNotes() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-300 drop-shadow-md mb-6 neon-text">
        My Love Letter to You
      </h1>

      <div className="bg-pink-900 bg-opacity-60 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-pink-500/30 relative overflow-hidden">
        <div className="prose prose-pink prose-lg text-pink-100 max-w-none">
          <p className="text-2xl font-semibold mb-6 neon-text">My Dearest Love,</p>

          <p>
            Selamat ulang tahun, Sayang.
          </p>

          <p>
            Mungkin aku jarang bilang ini, tapi aku benar-benar menghargai setiap detik dari 523 hari yang sudah kita lewati.
            Hubungan kita ini bukan hubungan yang sempurna yang tanpa masalah, kita tahu itu.
          </p>

          <p>
            Kita pernah ada di titik sulit yang bikin lelah, tapi kamu selalu milih buat tetap tinggal dan memperbaiki semuanya bareng aku.
            Itu yang bikin hubungan ini begitu berarti buatku sekarang.
          </p>

          <p>
            Kamu selalu punya cara buat bikin aku ngerasa aman, seaman warna biru yang kamu suka.
            Semoga di usia barumu ini, langkahmu selalu dipermudah.
          </p>

          <p>
            Tetaplah jadi manusia unik yang doyan ceker, pencinta kopi pahit, dan penidur yang berisik.
            Aku menyayangi seluruh paket lengkap yang ada di dalam dirimu.
          </p>

          <p>
            Selamat bertambah usia, doa terbaikku selalu memelukmu.
          </p>

          <p className="text-2xl font-semibold mt-8 neon-text">Dari calon istrimu,</p>
          <p className="text-xl">Cendrayu</p>
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