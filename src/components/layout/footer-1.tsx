import Link from "next/link";
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { cn } from "@/config/theme";

interface FooterProps {
  className?: string;
}

export function Footer1({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("bg-muted", className)}>
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold">CorporateX</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Modern kurumsal firmalar için tasarlanmış, yüksek performanslı ve kolay özelleştirilebilir bir website teması.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"
                aria-label="Facebook"
              >
                <FiFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"
                aria-label="Twitter"
              >
                <FiTwitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"
                aria-label="Instagram"
              >
                <FiInstagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full p-2 text-muted-foreground hover:bg-background hover:text-foreground"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Hizmetler</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services/web-design"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Web Tasarım
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-app"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Mobil Uygulama
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Dijital Pazarlama
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Marka Yönetimi
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consulting"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Danışmanlık
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">İletişim</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <FiMapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Atatürk Cad. No:123, 34000 İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+90 212 123 45 67</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">info@corporatex.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} CorporateX. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 