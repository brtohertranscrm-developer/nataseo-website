const categories = [
  {
    group: 'Web Technologies',
    cols: 'lg:col-span-2',
    sections: [
      {
        label: 'Frontend',
        items: [
          {
            name: 'React',
            bg: '#E8F8FD',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="3" fill="#61DAFB"/>
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8"/>
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 20 20)"/>
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 20 20)"/>
              </svg>
            ),
          },
          {
            name: 'Next.js',
            bg: '#F0F0F0',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="28" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900" fill="#000">N</text>
                <polygon points="28,10 36,10 28,30" fill="#000" opacity="0.85"/>
              </svg>
            ),
          },
          {
            name: 'Vue.js',
            bg: '#E8F5EE',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="20,33 4,8 10,8 20,25 30,8 36,8" fill="#42B883"/>
                <polygon points="20,23 11,8 16,8 20,15 24,8 29,8" fill="#35495E"/>
              </svg>
            ),
          },
          {
            name: 'TypeScript',
            bg: '#E8F0FC',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="32" height="32" rx="4" fill="#3178C6"/>
                <text x="7" y="27" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="white">TS</text>
              </svg>
            ),
          },
          {
            name: 'Tailwind',
            bg: '#E0F7FA',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.856 2.03C22.07 17.3 23.643 19 27 19c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.856-2.03C24.93 11.7 23.357 10 20 10zm-7.5 9c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.285 1.955 1.113 2.856 2.03C14.57 26.3 16.143 28 19.5 28c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.285-1.955-1.113-2.856-2.03C17.43 20.7 15.857 19 12.5 19z" fill="#06B6D4"/>
              </svg>
            ),
          },
          {
            name: 'WordPress',
            bg: '#E8F3FA',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="16" fill="#21759B"/>
                <path d="M6 20c0 5.3 3.1 9.9 7.6 12.1L7.2 14.5A14 14 0 006 20zm22.6-1.4c0-1.6-.6-2.8-1.1-3.7-.7-1.1-1.3-2-1.3-3.1 0-1.2.9-2.3 2.2-2.3h.2A14 14 0 0020 6a14 14 0 00-11.8 6.5h.9c1.4 0 3.6-.17 3.6-.17.7 0 .8 1 .1 1.1 0 0-.73.08-1.54.12l4.9 14.6 2.94-8.82-2.1-5.78c-.72-.04-1.4-.12-1.4-.12-.73-.04-.64-1.14.08-1.1 0 0 2.26.17 3.6.17 1.4 0 3.6-.17 3.6-.17.73-.04.82 1.06.1 1.1 0 0-.73.08-1.54.12l4.86 14.46 1.34-4.48c.58-1.86 1.02-3.2 1.02-4.35zm-8.84 1.85L16.2 31.6a14.1 14.1 0 004.3.67 14 14 0 001.9-.13l-.04-.07-4.54-12.62zm12.07-7.97a14 14 0 01.11 1.76 12.8 12.8 0 01-1.03 4.97l-4.14 11.97A14 14 0 0034 20a14 14 0 00-1.17-7.52z" fill="white"/>
              </svg>
            ),
          },
        ],
      },
      {
        label: 'Backend',
        items: [
          {
            name: 'Node.js',
            bg: '#E8F5E9',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4l14 8v16l-14 8L6 28V12z" fill="#339933" opacity="0.15"/>
                <path d="M20 6l12 7v14l-12 7-12-7V13z" stroke="#339933" strokeWidth="1.5"/>
                <text x="12" y="25" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="bold" fill="#339933">JS</text>
              </svg>
            ),
          },
          {
            name: 'Python',
            bg: '#FFF8E1',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5c-5 0-8 2.2-8 5v3h8v1H10c-3 0-6 1.8-6 6s2.5 6 5 6h2v-4c0-2.5 2-4 4-4h10c2 0 3-1 3-3V10c0-2.7-2.5-5-8-5zm-2 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#3776AB"/>
                <path d="M20 35c5 0 8-2.2 8-5v-3H20v-1h10c3 0 6-1.8 6-6s-2.5-6-5-6h-2v4c0 2.5-2 4-4 4H15c-2 0-3 1-3 3v6c0 2.7 2.5 5 8 5zm2-3.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#FFD43B"/>
              </svg>
            ),
          },
          {
            name: 'PHP',
            bg: '#F3EEFF',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="20" rx="17" ry="10" fill="#8892BE" opacity="0.15"/>
                <ellipse cx="20" cy="20" rx="17" ry="10" stroke="#8892BE" strokeWidth="1.5"/>
                <text x="9" y="25" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="#4F5B93">PHP</text>
              </svg>
            ),
          },
          {
            name: 'Laravel',
            bg: '#FDECEA',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34 8l-8 2-8-2-8 2v20l8 2 8-2 8 2V10z" fill="#FF2D20" opacity="0.1"/>
                <path d="M18 6l-10 3v22l10 3 10-3V9z" stroke="#FF2D20" strokeWidth="1.3" strokeLinejoin="round"/>
                <text x="12" y="25" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="#FF2D20">L</text>
                <circle cx="26" cy="12" r="5" fill="#FF2D20"/>
                <text x="23" y="16" fontFamily="Arial Black, sans-serif" fontSize="8" fontWeight="900" fill="white">L</text>
              </svg>
            ),
          },
          {
            name: 'MySQL',
            bg: '#E3F2FD',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="20" cy="12" rx="13" ry="5" fill="#00758F" opacity="0.2"/>
                <ellipse cx="20" cy="12" rx="13" ry="5" stroke="#00758F" strokeWidth="1.5"/>
                <path d="M7 12v8c0 2.76 5.82 5 13 5s13-2.24 13-5v-8" stroke="#00758F" strokeWidth="1.5"/>
                <path d="M7 20v6c0 2.76 5.82 5 13 5s13-2.24 13-5v-6" stroke="#F29111" strokeWidth="1.5"/>
              </svg>
            ),
          },
        ],
      },
    ],
  },
  {
    group: 'Mobile',
    cols: 'lg:col-span-1',
    sections: [
      {
        label: 'Cross Platform',
        items: [
          {
            name: 'React Native',
            bg: '#E8F8FD',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="3" fill="#61DAFB"/>
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8"/>
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 20 20)"/>
                <ellipse cx="20" cy="20" rx="17" ry="6.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 20 20)"/>
              </svg>
            ),
          },
          {
            name: 'Flutter',
            bg: '#E1F5FE',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,20 24,8 30,8 18,20" fill="#54C5F8"/>
                <polygon points="12,20 24,32 30,32 22,24" fill="#01579B"/>
                <polygon points="22,24 30,32 30,26 26,22" fill="#29B6F6"/>
              </svg>
            ),
          },
        ],
      },
    ],
  },
  {
    group: 'SEO & Analytics',
    cols: 'lg:col-span-1',
    sections: [
      {
        label: 'Tools',
        items: [
          {
            name: 'Google Analytics',
            bg: '#FFF3E0',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="22" width="7" height="12" rx="2" fill="#F9AB00"/>
                <rect x="17" y="14" width="7" height="20" rx="2" fill="#E37400"/>
                <rect x="28" y="6" width="7" height="28" rx="2" fill="#E37400" opacity="0.6"/>
              </svg>
            ),
          },
          {
            name: 'Search Console',
            bg: '#E8F5E9',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="17" cy="17" r="10" stroke="#34A853" strokeWidth="2.5"/>
                <line x1="24" y1="24" x2="34" y2="34" stroke="#34A853" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="17" cy="17" r="5" fill="#34A853" opacity="0.2"/>
              </svg>
            ),
          },
          {
            name: 'Google Ads',
            bg: '#E8F0FE',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 30l10-18" stroke="#FBBC04" strokeWidth="4" strokeLinecap="round"/>
                <path d="M18 12l10 18" stroke="#4285F4" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="32" cy="30" r="5" fill="#34A853"/>
              </svg>
            ),
          },
          {
            name: 'Semrush',
            bg: '#FFF8E1',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="32" height="32" rx="6" fill="#FF642D" opacity="0.12"/>
                <text x="5" y="27" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="#FF642D">SEM</text>
              </svg>
            ),
          },
          {
            name: 'Ahrefs',
            bg: '#F1F8E9',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="32" height="32" rx="6" fill="#FF7043" opacity="0.12"/>
                <text x="7" y="27" fontFamily="Arial Black, sans-serif" fontSize="12" fontWeight="900" fill="#FF7043">AHR</text>
              </svg>
            ),
          },
          {
            name: 'PageSpeed',
            bg: '#E8F5E9',
            icon: (
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8a12 12 0 100 24A12 12 0 0020 8z" stroke="#34A853" strokeWidth="2"/>
                <path d="M20 8a12 12 0 0112 12" stroke="#FBBC04" strokeWidth="2"/>
                <path d="M20 8a12 12 0 0112 12" stroke="#EA4335" strokeWidth="2" strokeDasharray="8 20" strokeDashoffset="-8"/>
                <circle cx="20" cy="20" r="2.5" fill="#4285F4"/>
                <line x1="20" y1="20" x2="28" y2="13" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ),
          },
        ],
      },
    ],
  },
]

function TechIcon({ name, bg, icon }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100"
        style={{ backgroundColor: bg }}
      >
        <div className="w-9 h-9">{icon}</div>
      </div>
      <span className="text-xs text-gray-500 font-medium text-center leading-tight">{name}</span>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            <span className="text-teal-600 text-sm font-semibold">Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-800 mb-4">
            Tools & Technologies{' '}
            <span className="text-gradient-teal">We Use</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We use modern and reliable technologies to build fast, scalable, and SEO-ready digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.group}
              className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ${cat.cols}`}
            >
              <h3 className="text-base font-bold text-dark-800 mb-1">{cat.group}</h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-200 rounded mb-5" />

              <div className="space-y-6">
                {cat.sections.map((sec) => (
                  <div key={sec.label}>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                      {sec.label}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {sec.items.map((item) => (
                        <TechIcon key={item.name} {...item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
