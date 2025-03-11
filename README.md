# CorporateX - Modern Kurumsal Web Çözümleri

CorporateX, modern kurumsal firmalar için tasarlanmış, Next.js ve TailwindCSS tabanlı, yüksek performanslı ve kolay özelleştirilebilir bir website temasıdır.

## Özellikler

- 🚀 Next.js 14 App Router
- 💅 TailwindCSS ile modern tasarım
- 🌙 Açık/Koyu tema desteği
- 📱 Tam responsive tasarım
- ⚡ Yüksek performans
- 🔍 SEO dostu yapı
- 🎨 Kolay özelleştirme
- 🛠️ TypeScript ile tip güvenliği
- 🎭 Framer Motion animasyonları
- 📦 Hazır UI bileşenleri (shadcn/ui)

## Başlangıç

Projeyi yerel ortamınızda çalıştırmak için:

```bash
# Repoyu klonlayın
git clone https://github.com/username/corporatex.git

# Proje dizinine gidin
cd corporatex

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak projeyi görüntüleyebilirsiniz.

## Teknoloji Yığını

- **Frontend Framework**: Next.js 14
- **CSS Framework**: TailwindCSS 3.x
- **Programlama Dili**: TypeScript 5.x
- **Animasyon**: Framer Motion
- **Form Yönetimi**: React Hook Form
- **Tema Değiştirme**: next-themes
- **SEO**: next-seo
- **İkonlar**: React Icons
- **UI Bileşenleri**: shadcn/ui

## Proje Yapısı

```
src/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Sayfa rotaları
│   ├── components/        # React bileşenleri
│   ├── lib/              # Yardımcı fonksiyonlar
│   └── styles/           # Global stiller
├── components/            # Paylaşılan bileşenler
│   ├── ui/               # UI bileşenleri
│   └── sections/         # Sayfa bölümleri
├── lib/                  # Yardımcı fonksiyonlar
└── types/                # TypeScript tipleri
```

## Özelleştirme

### Tema Renkleri

Tema renklerini `src/app/globals.css` dosyasında CSS değişkenlerini düzenleyerek özelleştirebilirsiniz:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... diğer renkler */
}
```

### Tipografi

Varsayılan fontu `src/app/layout.tsx` dosyasında değiştirebilirsiniz:

```typescript
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
```

### Bileşenler

UI bileşenlerini `src/components/ui` dizininde bulabilirsiniz. Her bileşen, shadcn/ui kullanılarak oluşturulmuştur ve kolayca özelleştirilebilir.

## Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## İletişim

- Website: [https://corporatex.com](https://corporatex.com)
- Twitter: [@corporatex](https://twitter.com/corporatex)
- E-posta: info@corporatex.com
