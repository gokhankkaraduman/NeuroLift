mindpulse/
│
├── package.json
│   └─ Projenin bağımlılıklarını ve scriptlerini tutar.
├── README.md
│   └─ Projenin açıklaması ve kullanım bilgileri.
├── .gitignore
│   └─ Git ile takip edilmeyecek dosyalar (node_modules, .env vb.)
├── vite.config.js / webpack.config.js
│   └─ Proje bundler ayarları.
├── public/
│   ├── index.html
│   │   └─ React uygulamasının root HTML dosyası.
│   ├── favicon.ico
│   └── assets/
│       ├── logo.png
│       ├── icons/      # Menü ikonları, sosyal medya ikonları
│       └── images/     # Arka plan, ilüstrasyonlar
│
├── src/
│   ├── main.jsx / index.jsx
│   │   └─ React uygulamasının giriş noktası. App componentini render eder.
│   ├── App.jsx
│   │   └─ Tüm sayfaların ve routerın bulunduğu ana component.
│   ├── index.css / App.css
│   │   └─ Global stiller.
│   ├── assets/
│   │   └─ Resimler, ikonlar ve font dosyaları.
│
├── components/            # Tekrar kullanılabilir UI parçaları
│   ├── Header/
│   │   ├── Header.jsx
│   │   │ └─ Sayfanın üst kısmı (logo, navbar menüsü, tema switcher)
│   │   └── Header.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   │ └─ Alt kısım, telif hakkı ve linkler
│   │   └── Footer.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   │ └─ Sayfalar arası geçiş menüsü
│   │   └── Navbar.css
│   ├── Loader/
│   │   ├── Loader.jsx
│   │   │ └─ API çağrıları sırasında yükleniyor animasyonu
│   │   └── Loader.css
│   ├── Modal/
│   │   ├── Modal.jsx
│   │   │ └─ Kullanıcıya mesaj, giriş veya uyarı göstermek için
│   │   └── Modal.css
│   ├── Toast/
│   │   ├── Toast.jsx
│   │   │ └─ Kısa bildirimleri göstermek için
│   │   └── Toast.css
│   ├── Forms/
│   │   ├── DailyEntryForm.jsx
│   │   │ └─ Kullanıcının günlüğünü yazdığı form
│   │   ├── ProfileForm.jsx
│   │   │ └─ Kullanıcı bilgilerini güncelleme
│   │   └── PreferencesForm.jsx
│   │       └─ Kullanıcı tercihlerini ayarlama
│   ├── Charts/
│   │   ├── SentimentChart.jsx
│   │   │ └─ Kullanıcının duygu durumunun analiz grafiği
│   │   ├── MoodTimeline.jsx
│   │   │ └─ Günlük duygu değişim zaman çizelgesi
│   │   └── MoodSummaryChart.jsx
│   │       └─ Genel duygu analizi özeti
│   ├── Cards/
│   │   ├── EntryCard.jsx
│   │   │ └─ Günlük girişlerin kart görünümü
│   │   └── AdviceCard.jsx
│   │       └─ AI tarafından önerilen tavsiyelerin gösterimi
│   ├── Filters/
│   │   └── FilterBar.jsx
│   │       └─ Günlükleri ve analizleri filtrelemek için
│   └── Search/
│       └── SearchBar.jsx
│           └─ Eski günlükleri aramak için
│
├── pages/                  # Uygulamanın sayfaları
│   ├── Home/
│   │   ├── Home.jsx
│   │   │ └─ Ana sayfa: Günlük giriş formu, özet, hızlı tavsiyeler
│   │   └── Home.css
│   ├── Analysis/
│   │   ├── AnalysisPage.jsx
│   │   │ └─ Kullanıcının tüm duygu analizleri ve grafikler
│   │   └── AnalysisPage.css
│   ├── History/
│   │   ├── HistoryPage.jsx
│   │   │ └─ Eski günlüklerin listesi ve detayları
│   │   └── HistoryPage.css
│   ├── Profile/
│   │   ├── ProfilePage.jsx
│   │   │ └─ Kullanıcı profili ve ayarları
│   │   └── ProfilePage.css
│   ├── Insights/
│   │   ├── InsightsPage.jsx
│   │   │ └─ AI tavsiyeleri, duygu analiz özetleri ve trendler
│   │   └── InsightsPage.css
│   └── NotFound/
│       ├── NotFoundPage.jsx
│       │ └─ 404 sayfası, geçersiz rota
│       └── NotFoundPage.css
│
├── routes/
│   └── AppRoutes.jsx
│       └─ React Router konfigürasyonu, sayfalar arası geçiş
│
├── context/
│   ├── UserContext.jsx
│   │ └─ Kullanıcı bilgileri global state
│   ├── EntryContext.jsx
│   │ └─ Günlük girişleri global state
│   └── ThemeContext.jsx
│       └─ Karanlık / aydınlık tema global state
│
├── services/
│   ├── api.js
│   │ └─ Axios / fetch setup ve base URL
│   ├── entryService.js
│   │ └─ /api/daily-entry endpointleri
│   ├── analysisService.js
│   │ └─ /api/analyze endpointleri
│   └── userService.js
│       └─ /api/user endpointleri
│
├── utils/
│   ├── dateHelper.js
│   │ └─ Tarih formatlama fonksiyonları
│   ├── chartHelper.js
│   │ └─ Grafik verilerini işleme
│   └── aiHelper.js
│       └─ AI model entegrasyon fonksiyonları
│
└── server/                 # Backend (Node.js + Express)
    ├── index.js
    │   └─ Sunucu başlatma
    ├── app.js
    │   └─ Express setup, middleware, route bağlama
    ├── routes/
    │   ├── entryRoutes.js
    │   │ └─ /api/daily-entry
    │   ├── analysisRoutes.js
    │   │ └─ /api/analyze
    │   └── userRoutes.js
    │       └─ /api/user
    ├── controllers/
    │   ├── entryController.js
    │   │ └─ Günlük CRUD işlemleri
    │   ├── analysisController.js
    │   │ └─ AI analiz ve sonuçları döndürme
    │   └── userController.js
    │       └─ Kullanıcı CRUD ve ayarları
    ├── models/
    │   ├── Entry.js
    │   │ └─ Günlük veri modeli
    │   ├── User.js
    │   │ └─ Kullanıcı modeli
    │   └── Analysis.js
    │       └─ AI analiz sonucu modeli
    ├── services/
    │   └── aiService.js
    │       └─ Hugging Face veya OpenAI entegrasyonu
    └── utils/
        └── db.js
            └─ MongoDB / PostgreSQL bağlantısı ve konfigürasyonu
