const id = {
  // Navbar
  nav: {
    home: 'Beranda',
    services: 'Layanan',
    about: 'Tentang',
    portfolio: 'Portofolio',
    process: 'Proses',
    testimonials: 'Mengapa Kami',
    pricing: 'Harga',
    cta: 'Konsultasi Gratis',
  },

  // Hero
  hero: {
    badge: 'Agensi Baru, Komitmen Nyata',
    h1a: 'Kembangkan Bisnis Anda',
    h1b: 'Secara Digital',
    h1c: 'bersama',
    desc: 'Kami membantu bisnis mendominasi mesin pencari, membangun website profesional, menciptakan konten berkualitas, dan mengembangkan solusi software. Kesuksesan digital Anda dimulai di sini.',
    cta1: 'Mulai Project Anda',
    cta2: 'Jelajahi Layanan',
    stat1: 'Layanan Siap',
    stat2: 'Komitmen Penuh',
    stat3: 'Waktu Respons',
    cardTraffic: 'Pertumbuhan Traffic Organik',
    cardVisitors: 'Total Pengunjung',
    cardConversion: 'Tingkat Konversi',
    floatingCards: [
      { label: 'SEO Siap', value: 'On-Page & Off' },
      { label: 'Fokus Google', value: 'Naik Peringkat' },
      { label: 'Buka Project', value: 'Mulai Sekarang' },
    ],
  },

  // Services
  services: {
    badge: 'Apa yang Kami Lakukan',
    h2a: 'Layanan yang Menghasilkan',
    h2b: 'Hasil Nyata',
    desc: 'Dari SEO hingga software, kami menghadirkan solusi digital terintegrasi yang membuat bisnis Anda tumbuh secara online.',
    learnMore: 'Pelajari lebih lanjut',
    seoYkCtaTitle: 'Target utama: Jasa SEO Yogyakarta',
    seoYkCtaDesc: 'Lihat halaman layanan khusus untuk bisnis di Jogja.',
    seoYkCtaBtn: 'Lihat Layanan SEO',
    items: [
      {
        title: 'Web Engine',
        subtitle: 'Website Berperforma Tinggi',
        description: 'Kami membangun website yang cepat, responsif, dan menarik secara visual yang mengubah pengunjung menjadi pelanggan. Dari landing page hingga aplikasi web yang kompleks.',
        features: ['Desain UI/UX Custom', 'Mobile-First Development', 'Optimasi Kecepatan', 'Integrasi CMS'],
        badge: 'Paling Populer',
      },
      {
        title: 'SEO',
        subtitle: 'Optimasi Mesin Pencari',
        description: 'Dominasi hasil pencarian Google dengan strategi SEO berbasis data kami. Kami memastikan bisnis Anda ditemukan oleh orang yang tepat di waktu yang tepat.',
        features: ['Audit SEO Teknis', 'Optimasi On-Page', 'Link Building', 'SEO Lokal & Google Maps'],
        badge: null,
      },
      {
        title: 'Content Writing',
        subtitle: 'Strategi Konten Berkualitas',
        description: 'Libatkan audiens Anda dengan konten berkualitas tinggi dan teroptimasi SEO yang tampil di mesin pencari dan beresonansi dengan target pasar Anda.',
        features: ['Penulisan Blog & Artikel', 'Copywriting Website', 'Konten Media Sosial', 'Deskripsi Produk'],
        badge: null,
      },
      {
        title: 'Software Solution',
        subtitle: 'Pengembangan Software Custom',
        description: 'Dari aplikasi web hingga mobile dan software enterprise, kami membangun solusi digital yang disesuaikan untuk memperlancar operasional bisnis Anda.',
        features: ['Pengembangan Web App', 'Aplikasi Mobile (iOS & Android)', 'Integrasi API', 'Solusi Cloud & DevOps'],
        badge: null,
      },
    ],
  },

  seoYogyakartaPage: {
    breadcrumb: 'Jasa SEO Yogyakarta',
    seoTitle: 'Jasa SEO Yogyakarta — Naik Ranking & Leads | NataSEO',
    seoDesc: 'Jasa SEO Yogyakarta untuk bisnis lokal: audit teknis, optimasi on-page, local SEO/GBP, dan konten yang rank. Konsultasi gratis & report progress.',
    badge: 'Yogyakarta & Sekitarnya',
    h1a: 'Jasa SEO',
    h1b: 'Yogyakarta',
    lead: 'Kami bantu bisnis di Jogja tampil di halaman 1 Google lewat SEO teknis + konten + local SEO (Google Maps/GBP). Fokus ke leads yang masuk, bukan cuma traffic.',
    primaryCta: {
      label: 'Konsultasi Gratis via WhatsApp',
      href: 'https://wa.me/6285159966646?text=Halo%20NataSEO%2C%20saya%20mau%20konsultasi%20Jasa%20SEO%20Yogyakarta.%20Boleh%20dibantu%3F',
    },
    secondaryCta: 'Cek Free SEO Audit',
    highlights: [
      'Strategi keyword lokal (Yogyakarta/Jogja) + intent transaksi',
      'Optimasi on-page + technical SEO (speed, index, struktur)',
      'Local SEO & Google Business Profile untuk Maps ranking',
      'Laporan progress rutin dan rekomendasi action yang jelas',
    ],
    card: {
      title: 'Yang biasanya bikin ranking stuck',
      desc: 'Banyak bisnis sudah posting konten, tapi tidak tembus page 1 karena fondasi teknis & local signals belum kuat.',
      points: [
        { kicker: 'Masalah', title: 'Technical SEO', desc: 'Indexing, struktur heading, internal link, dan performance belum rapi.' },
        { kicker: 'Masalah', title: 'Konten tidak tepat intent', desc: 'Topik ada, tapi tidak menjawab “jasa/biaya/terdekat” yang dicari user.' },
        { kicker: 'Masalah', title: 'Local signals lemah', desc: 'GBP, NAP consistency, dan landing lokal kurang kuat.' },
        { kicker: 'Masalah', title: 'Tidak ada tracking', desc: 'Sulit tahu apa yang berhasil tanpa baseline & report rutin.' },
      ],
      ctaTitle: 'Mau kita audit cepat dulu?',
      ctaDesc: 'Kirim link website + layanan bisnis kamu. Kami kasih gambaran prioritasnya.',
      ctaBtn: 'Chat WhatsApp',
    },
    problemLabel: 'Tantangan',
    problems: [
      { title: 'Saingan ketat di keyword lokal', desc: 'Butuh kombinasi SEO teknis, konten yang tepat, dan local SEO yang konsisten.' },
      { title: 'Website ada tapi leads sepi', desc: 'Masalah sering ada di intent keyword, halaman layanan, dan CTA yang kurang jelas.' },
      { title: 'Ranking naik tapi tidak menghasilkan', desc: 'Traffic tanpa intent transaksi tidak akan jadi omzet. Kita fokus ke yang mendatangkan calon pembeli.' },
    ],
    deliver: {
      badge: 'Deliverables',
      h2: 'Apa yang Anda dapatkan dari layanan SEO',
      desc: 'Fokus pada eksekusi yang bisa diukur: perbaikan teknis, konten, dan local presence.',
      items: [
        { kicker: 'Audit', title: 'SEO Audit Teknis', desc: 'Indexability, speed, struktur halaman, schema, dan issue prioritas.' },
        { kicker: 'On-Page', title: 'Optimasi Halaman Layanan', desc: 'Struktur, copy, internal linking, dan CTA untuk konversi.' },
        { kicker: 'Local', title: 'Local SEO & GBP', desc: 'Optimasi profil, strategi review, dan sinyal lokal untuk Maps.' },
        { kicker: 'Konten', title: 'Content Plan', desc: 'Cluster artikel pendukung untuk menembak keyword turunan di Yogyakarta.' },
        { kicker: 'Tracking', title: 'Report & Monitoring', desc: 'Baseline, perubahan ranking, traffic, dan rekomendasi action berikutnya.' },
        { kicker: 'Support', title: 'Pendampingan', desc: 'Prioritas perbaikan yang jelas + komunikasi responsif.' },
      ],
    },
    pricing: {
      badge: 'Paket SEO',
      h2: 'Pilih paket yang sesuai kebutuhan',
      desc: 'Mulai dari fondasi SEO lokal sampai growth plan yang agresif. Bisa disesuaikan setelah audit.',
      note: '*Harga bisa menyesuaikan kompleksitas website & kompetisi keyword.',
      plans: [
        {
          name: 'Starter Local',
          price: 'Rp 1.9jt',
          unit: '/bulan',
          bestFor: 'Cocok untuk bisnis lokal yang baru mulai SEO di Jogja.',
          features: [
            'Technical SEO audit (prioritas)',
            'Optimasi 1 halaman layanan utama',
            'Setup/optimasi Google Business Profile',
            'Basic tracking + report bulanan',
          ],
          cta: 'Ambil Starter',
        },
        {
          name: 'Growth',
          price: 'Rp 3.9jt',
          unit: '/bulan',
          bestFor: 'Untuk bisnis yang ingin naik ranking + mulai membangun konten cluster.',
          highlight: true,
          features: [
            'Technical SEO audit + fixes prioritas',
            'Optimasi 3 halaman utama (service/landing)',
            'Local SEO + review strategy',
            '2 konten artikel/bulan (keyword turunan Jogja)',
            'Report + rekomendasi action',
          ],
          cta: 'Ambil Growth',
        },
        {
          name: 'Scale',
          price: 'Rp 6.9jt',
          unit: '/bulan',
          bestFor: 'Untuk kompetisi tinggi dan target leads yang lebih agresif.',
          features: [
            'Technical SEO roadmap + implementasi',
            'Optimasi 5+ halaman (termasuk conversion copy)',
            '4 konten artikel/bulan + internal linking',
            'Link acquisition/PR outreach (sesuai niche)',
            'Report mingguan + tracking KPI',
          ],
          cta: 'Ambil Scale',
        },
      ],
    },
    leadForm: {
      title: 'Minta Audit Cepat (Gratis)',
      desc: 'Isi 3 hal ini — kami balas dengan prioritas action yang paling ngaruh untuk “jasa seo yogyakarta”.',
      fields: {
        url: 'URL Website',
        niche: 'Bidang Usaha (niche)',
        whatsapp: 'Nomor WhatsApp',
      },
      placeholder: {
        url: 'https://bisnisanda.com',
        niche: 'Contoh: klinik gigi, kontraktor, rental mobil…',
        whatsapp: 'Contoh: 0812xxxxxxx',
      },
      submit: 'Kirim',
      successTitle: 'Terkirim!',
      successDesc: 'Kami akan balas via WhatsApp secepatnya.',
      waBtn: 'Chat WhatsApp Sekarang',
    },
    faq: {
      badge: 'FAQ',
      h2: 'Pertanyaan yang sering ditanyakan',
      desc: 'Jawaban singkat sebelum mulai.',
      items: [
        {
          q: 'Berapa lama SEO sampai kelihatan hasilnya?',
          a: 'Umumnya 3–6 bulan untuk melihat pergerakan yang stabil. Keyword lokal seperti “jasa SEO Yogyakarta” bisa lebih cepat jika fondasi teknis dan local signals rapi.',
        },
        {
          q: 'Apakah ada garansi ranking #1?',
          a: 'Tidak ada yang bisa menjamin #1 untuk semua keyword. Yang kami janjikan adalah proses yang benar, transparan, dan fokus pada KPI bisnis (leads/telepon/WA).',
        },
        {
          q: 'Apakah termasuk Google Maps/Google Business Profile?',
          a: 'Ya, local SEO dan optimasi Google Business Profile termasuk di paket, terutama untuk bisnis yang targetnya pelanggan area Jogja.',
        },
        {
          q: 'Kalau website saya belum siap SEO bagaimana?',
          a: 'Kita mulai dari audit. Biasanya perbaikan paling cepat ada di speed, struktur halaman layanan, dan tracking. Setelah itu baru scale konten & authority.',
        },
      ],
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'NataSEO',
      url: 'https://nataseo.asia/jasa-seo-yogyakarta',
      areaServed: [{ '@type': 'City', name: 'Yogyakarta' }],
      serviceType: 'SEO Service',
      address: { '@type': 'PostalAddress', addressLocality: 'Yogyakarta', addressCountry: 'ID' },
    },
  },

  // TechStack
  techStack: {
    badge: 'Technology Stack',
    h2: 'Tools & Teknologi',
    h2accent: 'yang Kami Gunakan',
    desc: 'Kami menggunakan teknologi modern dan terpercaya untuk membangun produk digital yang cepat, scalable, dan SEO-ready.',
  },

  // About
  about: {
    badge: 'Tentang NataSEO',
    h2a: 'Kami Hadir untuk',
    h2b: 'Menumbuhkan Bisnis Anda',
    p1: 'NataSEO adalah digital agency berbasis di Yogyakarta yang berfokus pada pertumbuhan bisnis online yang nyata dan terukur. Kami menggabungkan keahlian teknis dengan pemahaman mendalam tentang pasar Indonesia.',
    p2: 'Kami percaya bahwa setiap bisnis, besar maupun kecil, berhak mendapatkan kehadiran digital yang kuat. Itulah mengapa kami berkomitmen untuk memberikan layanan berkualitas tinggi dengan harga yang transparan dan komunikasi yang jelas.',
    cta: 'Mulai Konsultasi',
    strengths: [
      'Spesialis SEO yang fokus pada ranking nyata dan terukur',
      'Tim lengkap: desain, dev, konten & strategi',
      'Pendekatan berbasis data dengan laporan performa yang jelas',
      'Komunikasi langsung — tanpa perantara, tanpa basa-basi',
      'Client awal mendapat prioritas akses dan harga eksklusif',
    ],
    stats: [
      { label: 'Layanan Tersedia', value: '4' },
      { label: 'Slot Tersedia', value: 'Terbuka' },
      { label: 'Komitmen Penuh', value: '100%' },
      { label: 'Waktu Respons', value: '<24j' },
    ],
  },

  // Portfolio
  portfolio: {
    badge: 'Hasil Nyata',
    h2a: 'Project yang',
    h2b: 'Sudah Kami Bangun',
    desc: 'Bukan sekadar portofolio — ini adalah bukti cara kami berpikir, memecahkan masalah, dan mengeksekusi solusi digital untuk klien nyata.',
    liveBtn: 'Lihat Website',
    challengeLabel: 'Tantangan',
    solutionLabel: 'Solusi',
    resultLabel: 'Hasil',
    stackLabel: 'Tech Stack',
    cta: 'Diskusikan Project Anda',
    ctaDesc: 'Punya project serupa atau berbeda? Mari bicara — konsultasi pertama gratis.',
    cases: [
      {
        client: 'Brothers Trans',
        url: 'https://beta.brotherstrans.id',
        industry: 'Transportasi',
        service: 'Web Engine',
        color: 'blue',
        tagline: 'Dari Bisnis WA-Only ke Kehadiran Digital Profesional',
        challenge: 'Brothers Trans adalah perusahaan transportasi yang seluruh operasionalnya bergantung pada referral mulut ke mulut dan WhatsApp. Tidak ada cara bagi calon klien korporat untuk menemukan atau memverifikasi kredibilitas mereka secara online.',
        solution: 'Kami membangun website company profile profesional yang menampilkan layanan, armada, dan area operasional secara jelas — dirancang untuk membangun kepercayaan klien bisnis sejak pandangan pertama.',
        results: [
          'Kehadiran online profesional yang bisa dishare ke calon klien',
          'Halaman layanan & armada yang mendetail meningkatkan kredibilitas',
          'Form inquiry langsung mengurangi friction pemesanan',
          'Tampil lebih unggul dari kompetitor yang belum punya website',
        ],
        stack: ['React', 'Tailwind CSS', 'Vercel'],
      },
      {
        client: 'Eazy Trip Yogyakarta',
        url: 'https://eazytripyogyakarta.com',
        industry: 'Pariwisata & Travel',
        service: 'Web Engine',
        color: 'teal',
        tagline: 'Platform Travel Lengkap untuk Menghadapi OTA Besar',
        challenge: 'Travel agent lokal Yogyakarta dengan layanan premium — sewa kendaraan 7–19 seat, paket tour, dan airport shuttle — tapi tidak memiliki platform digital yang sepadan. Booking masih manual via WhatsApp tanpa sistem terpusat, membuat mereka kalah bersaing dengan OTA seperti Traveloka.',
        solution: 'Website travel lengkap dengan katalog armada interaktif, paket tour siap-pilih, galeri destinasi, dan integrasi booking. Dibangun bilingual (Indonesia & Inggris) untuk menjangkau wisatawan domestik maupun mancanegara.',
        results: [
          'Katalog armada lengkap dari city car hingga minibus 19 seat',
          'Paket tour UNESCO, petualangan vulkanik, dan budaya tersaji rapi',
          'Bilingual ID/EN membuka akses ke wisatawan asing',
          'Testimoni pelanggan terintegrasi membangun social proof',
        ],
        stack: ['React', 'Tailwind CSS', 'Vercel', 'WhatsApp API'],
      },
      {
        client: 'Japan Tourged',
        url: 'https://japantourgedid.vercel.app/',
        industry: 'Pariwisata Internasional',
        service: 'Web Engine',
        color: 'rose',
        tagline: 'Landing Page yang Mengkonversi Traffic Sosmed Jadi Booking',
        challenge: 'Tour operator spesialis Japan dengan 500+ traveler yang puas, namun seluruh leads bergantung pada rekomendasi mulut ke mulut. Traffic dari Instagram dan TikTok tidak terkonversi karena tidak ada landing page yang kuat untuk menangkap dan meyakinkan calon travelers.',
        solution: 'Landing page Japan tour yang clean dan immersive — menampilkan 4 jenis paket (Private, One Day, Company Trip, Honeymoon) dengan social proof kuat, blog destinasi, dan CTA WhatsApp yang strategis untuk convert traffic sosmed.',
        results: [
          '4 paket tour tersaji jelas dengan deskripsi dan CTA per paket',
          'Social proof 500+ traveler & rating 5.0★ ditampilkan prominently',
          'Blog travel membangun otoritas dan traffic organik jangka panjang',
          'Mobile-optimized — mayoritas traffic dari Instagram Stories',
        ],
        stack: ['React', 'Vercel', 'Blog System'],
      },
    ],
  },

  // Process
  process: {
    badge: 'Cara Kerja Kami',
    h2a: 'Proses Sederhana,',
    h2b: 'Hasil Luar Biasa',
    desc: 'Kami percaya transparansi dan komunikasi adalah kunci keberhasilan setiap proyek. Inilah alur kerja kami yang telah terbukti.',
    ctaTitle: 'Siap Memulai Perjalanan Digital Anda?',
    ctaDesc: 'Konsultasi pertama gratis — mari diskusikan bagaimana kami dapat membantu bisnis Anda tumbuh secara online.',
    ctaBtn: 'Jadwalkan Konsultasi Gratis',
    steps: [
      {
        title: 'Penemuan & Konsultasi',
        description: 'Kami memulai dengan memahami tujuan bisnis, target audiens, dan jejak digital Anda saat ini. Konsultasi gratis ini menjadi fondasi untuk semua yang kami bangun bersama.',
      },
      {
        title: 'Strategi & Perencanaan',
        description: 'Tim kami membuat strategi digital custom yang disesuaikan dengan tujuan spesifik Anda — dari penargetan keyword dan kalender konten hingga tech stack dan arah desain.',
      },
      {
        title: 'Eksekusi & Peluncuran',
        description: 'Kami membangun, menulis, dan mengoptimasi dengan presisi. Baik itu meluncurkan website, menerbitkan konten, atau men-deploy aplikasi, kami mengeksekusi dengan kualitas dan kecepatan.',
      },
      {
        title: 'Monitor & Tumbuh',
        description: 'Kami melacak metrik performa, melapor secara transparan, dan terus mengoptimasi kampanye Anda. Pertumbuhan adalah proses berkelanjutan — dan kami menemani setiap langkahnya.',
      },
    ],
  },

  // Why NataSEO (Testimonials)
  whyUs: {
    badge: 'Mengapa NataSEO',
    h2a: 'Dibangun untuk Deliver.',
    h2b: 'Committed to Results.',
    desc: 'Kami tidak sekadar menjual layanan — kami menjadi partner pertumbuhan bisnis kamu. Ini yang membedakan cara kami bekerja.',
    cardLabel: 'Komitmen Kami',
    cardTitle: 'Setiap project kami tangani',
    cardTitleAccent: 'seserius bisnis kami sendiri.',
    cardDesc: 'Kepercayaan kamu adalah aset paling berharga bagi kami. Karena itu setiap detail, setiap deadline, dan setiap laporan kami jaga dengan standar tertinggi.',
    cardCta: 'Mulai Konsultasi Gratis',
    commitments: [
      'Konsultasi awal gratis, tanpa tekanan',
      'Proposal detail sebelum kontrak apapun',
      'Laporan progress setiap minggu',
      'Revisi tidak dibatasi hingga kamu puas',
      'Respon maksimal 24 jam di hari kerja',
    ],
    pillars: [
      { title: 'Langsung ke Ahlinya', desc: 'Kamu ngobrol dan kerja langsung dengan founder — bukan account manager junior atau staf outsource.' },
      { title: 'Transparan 100%', desc: 'Laporan rutin setiap minggu. Kamu tahu persis apa yang sedang dikerjakan, dan kenapa.' },
      { title: 'Berorientasi Hasil', desc: 'KPI ditetapkan sejak hari pertama. Kami tidak bicara soal proses — kami bicara soal angka.' },
      { title: 'Cepat & Responsif', desc: 'Tim kecil yang fokus = tidak ada birokrasi. Keputusan cepat, eksekusi lebih cepat.' },
    ],
    nudge: 'Konsultasi gratis · Tanpa kewajiban · Respon dalam 24 jam',
  },

  // FAQ
  faq: {
    badge: 'FAQ',
    h2a: 'Pertanyaan yang',
    h2b: 'Sering Ditanyakan',
    desc: 'Semua yang perlu Anda tahu sebelum memulai. Tidak ada pertanyaan yang terlalu kecil.',
    stillQuestion: 'Masih ada pertanyaan?',
    stillDesc: 'Konsultasi langsung lebih cepat dari membaca FAQ. Kami balas dalam 24 jam.',
    stillBtn: 'Tanya Langsung',
    items: [
      {
        q: 'Berapa lama proses pembuatan website?',
        a: 'Tergantung kompleksitas project. Landing page sederhana bisa selesai dalam 3–5 hari kerja. Company profile 5–10 halaman biasanya 1–2 minggu. Website dengan fitur custom (e-commerce, booking system) berkisar 3–6 minggu. Kami selalu sepakati timeline di awal sebelum mulai.',
      },
      {
        q: 'Apakah ada garansi atau revisi setelah selesai?',
        a: 'Ya. Setiap project termasuk revisi unlimited selama proses pengerjaan sampai Anda puas. Setelah launch, kami memberikan masa garansi bug-fix tanpa biaya. Perubahan besar di luar scope original akan didiskusikan dan dihitung terpisah.',
      },
      {
        q: 'Berapa lama SEO mulai terlihat hasilnya?',
        a: 'Jujur: SEO butuh waktu. Pergerakan ranking biasanya mulai terlihat di bulan ke-2 hingga ke-3. Hasil signifikan (masuk halaman 1 untuk keyword target) umumnya dicapai dalam 4–6 bulan untuk keyword medium-competition. Itulah kenapa kami minta minimal kontrak 3 bulan.',
      },
      {
        q: 'Apakah ada jaminan ranking halaman 1 Google?',
        a: 'Tidak ada yang bisa menjamin ranking — siapapun yang bilang bisa jamin ranking halaman 1 dalam waktu singkat, itu tanda bahaya. Yang kami jamin adalah proses yang benar: riset keyword akurat, teknikal SEO solid, konten berkualitas, dan laporan performa transparan setiap minggu.',
      },
      {
        q: 'Bagaimana sistem pembayarannya?',
        a: 'Untuk Web Engine dan Software: 50% di awal sebagai tanda jadi, 50% setelah project selesai dan disetujui. Untuk SEO dan Content Writing: dibayar di awal setiap bulan. Kami menerima transfer bank, dan bisa dinegosiasikan untuk project besar.',
      },
      {
        q: 'Apakah ada kontrak? Seberapa mengikat?',
        a: 'Ya, kami menggunakan perjanjian kerja sederhana (bukan kontrak tebal). Isinya: scope pekerjaan, timeline, harga, dan hak masing-masing pihak. Ini melindungi Anda dan kami. Sebelum kontrak ditandatangani, ada proposal detail yang bisa Anda review dulu.',
      },
      {
        q: 'Website saya akan di-hosting di mana?',
        a: 'Kami menggunakan hosting modern yang cepat dan andal — Vercel untuk website statis/React, dan VPS atau shared hosting untuk website WordPress/PHP. Domain dan hosting bisa atas nama Anda sendiri sehingga Anda memiliki penuh setelah project selesai.',
      },
      {
        q: 'Apakah NataSEO bisa handle semua layanan sekaligus?',
        a: 'Bisa. Bahkan ini yang kami rekomendasikan — website yang bagus + konten SEO + strategi SEO yang terintegrasi jauh lebih efektif daripada dikerjakan terpisah oleh vendor berbeda. Kami bisa buat paket bundling yang lebih efisien untuk multi-layanan.',
      },
      {
        q: 'Bagaimana cara mulai bekerja sama dengan NataSEO?',
        a: 'Mudah. Hubungi kami via form di bawah atau WhatsApp — kami akan jadwalkan sesi konsultasi 30 menit (gratis, tanpa kewajiban). Di sesi itu kami pelajari kebutuhan Anda, lalu kirimkan proposal dalam 1–2 hari kerja. Tidak ada pressure untuk langsung deal.',
      },
    ],
  },

  // Blog
  blog: {
    badge: 'Insight & Tips',
    h2a: 'Artikel',
    h2b: 'Terbaru',
    desc: 'Temukan tips SEO, web development, dan strategi digital marketing yang bisa langsung Anda terapkan untuk bisnis Anda.',
    readMore: 'Baca artikel',
    cta: 'Lihat Semua Artikel',
  },

  // Contact
  contact: {
    badge: 'Hubungi Kami',
    h2a: 'Mulai Percakapan,',
    h2b: 'Mulai Bertumbuh',
    desc: 'Punya project dalam pikiran? Atau sekadar ingin bertanya? Kami siap mendengarkan dan membantu bisnis Anda berkembang secara digital.',
    namePlaceholder: 'Nama lengkap Anda',
    emailPlaceholder: 'Alamat email Anda',
    servicePlaceholder: 'Pilih layanan',
    msgPlaceholder: 'Ceritakan tentang bisnis dan kebutuhan Anda...',
    submitBtn: 'Kirim Pesan',
    sending: 'Mengirim...',
    successTitle: 'Pesan terkirim!',
    successDesc: 'Terima kasih telah menghubungi kami. Kami akan membalas dalam 24 jam.',
    whatsappLabel: 'Atau langsung chat via WhatsApp',
    whatsappBtn: 'Chat di WhatsApp',
    infoTitle: 'Informasi Kontak',
    freeLabel: 'Konsultasi Gratis',
    freeDesc: 'Sesi konsultasi 30 menit untuk mendiskusikan kebutuhan digital bisnis Anda — tanpa biaya, tanpa kewajiban.',
    serviceOptions: ['Web Engine', 'SEO', 'Content Writing', 'Software Solution', 'Lainnya'],
    officeLabel: 'Kantor',
  },

  // Pricing
  pricing: {
    badge: 'Investasi Digital',
    h2a: 'Harga Transparan,',
    h2b: 'Tanpa Kejutan',
    desc: 'Semua harga adalah estimasi awal. Setiap project dikonsultasikan terlebih dahulu dan disesuaikan dengan kebutuhan spesifik bisnis Anda.',
    startingFrom: 'Mulai dari',
    perMonth: '/ bulan',
    perArticle: '/ artikel',
    oneTime: 'satu kali bayar',
    retainer: 'retainer bulanan',
    minContract: 'Min. 3 bulan',
    ctaLabel: 'Butuh estimasi lebih akurat?',
    ctaDesc: 'Hubungi kami untuk konsultasi gratis — kami akan buat proposal sesuai scope project Anda.',
    ctaBtn: 'Dapatkan Estimasi Gratis',
    customLabel: 'Custom',
    customNote: 'Harga disesuaikan setelah konsultasi',
    services: [
      {
        name: 'Web Engine',
        tagline: 'Website Profesional',
        startPrice: 'Rp 3 juta',
        unit: 'satu kali bayar',
        range: 'Rp 3 juta – Rp 60 juta',
        highlight: false,
        features: [
          'Landing Page mulai Rp 3–7 juta',
          'Company Profile Rp 7–15 juta',
          'Website + CMS Rp 12–25 juta',
          'E-commerce / Web App Rp 25–60 juta',
        ],
        note: 'Harga tergantung jumlah halaman, fitur, dan kompleksitas desain',
      },
      {
        name: 'SEO',
        tagline: 'Optimasi Mesin Pencari',
        startPrice: 'Rp 1,5 juta',
        unit: '/ bulan',
        range: 'Rp 1,5 juta – Rp 12 juta/bulan',
        highlight: true,
        features: [
          'Basic (1–3 keyword) Rp 1,5–3 juta/bln',
          'Standard (5–10 keyword) Rp 3–6 juta/bln',
          'Full / E-commerce Rp 6–12 juta/bln',
          'Laporan performa setiap minggu',
        ],
        note: 'Minimal kontrak 3 bulan untuk hasil yang terukur',
      },
      {
        name: 'Content Writing',
        tagline: 'Konten Berkualitas',
        startPrice: 'Rp 200 ribu',
        unit: '/ artikel',
        range: 'Rp 200 ribu – Rp 5 juta/paket',
        highlight: false,
        features: [
          'Artikel SEO 800–1500 kata Rp 200–400 rb',
          'Artikel panjang 2000+ kata Rp 400–700 rb',
          'Paket 8 artikel/bulan Rp 1,5–3 juta',
          'Paket 16 artikel/bulan Rp 2,5–5 juta',
        ],
        note: 'Termasuk riset keyword dan optimasi on-page',
      },
      {
        name: 'Software Solution',
        tagline: 'Pengembangan Custom',
        startPrice: 'Rp 8 juta',
        unit: 'satu kali bayar',
        range: 'Rp 8 juta – Rp 150 juta+',
        highlight: false,
        features: [
          'Internal tools / Dashboard Rp 8–20 juta',
          'Web app lengkap Rp 20–50 juta',
          'Sistem manajemen / ERP Rp 50–150 juta',
          'Mobile App (iOS & Android) Rp 30–80 juta',
        ],
        note: 'Harga final setelah analisis kebutuhan dan scope project',
      },
    ],
  },

  // Footer
  footer: {
    desc: 'Digital agency berbasis di Yogyakarta yang membantu bisnis Indonesia tumbuh secara online melalui SEO, web development, konten, dan software.',
    servicesTitle: 'Layanan',
    companyTitle: 'Perusahaan',
    resourcesTitle: 'Sumber Daya',
    company: [
      { label: 'Tentang Kami', href: '#about' },
      { label: 'Hasil Kerja', href: '#portfolio' },
      { label: 'Proses', href: '#process' },
      { label: 'Mengapa Kami', href: '#testimonials' },
      { label: 'Harga', href: '#pricing' },
      { label: 'Kontak', href: '#contact' },
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Case Study', href: '#portfolio' },
      { label: 'Checklist SEO', href: '#' },
      { label: 'Audit Gratis', href: '#contact' },
    ],
    copyright: 'Hak cipta dilindungi.',
    madeWith: 'Dibuat dengan',
    forBusiness: 'untuk bisnis Indonesia',
  },

  // WhatsApp
  whatsapp: {
    tooltip: 'Chat WhatsApp',
    message: 'Halo%20NataSEO%2C%20saya%20ingin%20konsultasi%20project%20saya',
  },

  // Breadcrumb
  breadcrumb: {
    home: 'Beranda',
  },

  // RelatedArticles
  related: {
    title: 'Artikel Terkait',
    readMore: 'Baca artikel',
  },

  // Article back button
  article: {
    backBtn: 'Kembali ke Beranda',
  },

  // SEO Audit Page
  audit: {
    title: 'Quick Audit SEO Gratis',
    subtitle: 'Cek kesehatan website Anda dalam hitungan detik',
    desc: 'Masukkan URL website Anda dan dapatkan gambaran singkat tentang performa SEO, kecepatan, dan keamanan website Anda.',
    urlPlaceholder: 'https://website-anda.com',
    namePlaceholder: 'Nama Anda',
    whatsappPlaceholder: 'Nomor WhatsApp Anda',
    submitBtn: 'Mulai Audit Sekarang',
    scanning: 'Sedang Menganalisis Website...',
    scanSteps: ['Memeriksa Kecepatan...', 'Mengecek Meta Tags...', 'Menganalisis Mobile Responsiveness...', 'Menyusun Laporan...'],
    resultTitle: 'Hasil Quick Audit',
    resultDesc: 'Ini adalah hasil ringkas dari performa website Anda. Untuk laporan mendetail dan langkah perbaikan strategis, hubungi tim kami.',
    metrics: {
      performance: 'Performa & Kecepatan',
      seo: 'SEO Dasar',
      mobile: 'Mobile Friendly',
      security: 'Keamanan (SSL)',
    },
    ctaTitle: 'Ingin Laporan Mendetail & Strategi Perbaikan?',
    ctaDesc: 'Tim ahli kami siap membedah website Anda lebih dalam dan menyusun strategi SEO yang terbukti meningkatkan traffic.',
    ctaBtn: 'Ambil Layanan Kami',
  },

  // Audit Landing Page Extra Sections
  auditLanding: {
    problemTitle: 'Mengapa Anda Membutuhkan Audit Ini?',
    problemDesc: 'Banyak pemilik bisnis merasa websitenya sudah bagus, tapi bingung kenapa tidak ada konversi atau pengunjung.',
    problems: [
      { title: 'Website Lambat', desc: '53% pengunjung meninggalkan website yang loadingnya lebih dari 3 detik.' },
      { title: 'SEO Tidak Optimal', desc: 'Jika Anda tidak di halaman pertama Google, Anda kehilangan 90% potensi traffic.' },
      { title: 'Tidak Mobile Friendly', desc: 'Sebagian besar pengunjung datang dari HP. UI yang buruk membunuh penjualan.' },
    ],
    faqTitle: 'Pertanyaan Seputar Audit',
    faqs: [
      { q: 'Apakah ini benar-benar gratis?', a: 'Ya, 100% gratis. Anda akan mendapatkan skor performa awal tanpa biaya sepeserpun.' },
      { q: 'Bagaimana jika skor saya merah/buruk?', a: 'Jangan khawatir! Kami akan memberikan rekomendasi perbaikan, atau Anda bisa menyewa tim NataSEO untuk memperbaikinya.' },
      { q: 'Apa yang terjadi setelah saya mengisi form?', a: 'Anda akan langsung melihat skor singkat. Tim kami juga akan menghubungi Anda via WhatsApp untuk mengirimkan analisa lebih mendalam jika Anda mau.' },
    ]
  },
}

export default id
