import Image from "next/image";
import Link from "next/link";
import { footerLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer>
      <Link href="/" className="footer-logo">
        <Image src="/logo.png" alt="" width={28} height={28} className="nav-mark" />
        {site.name}
      </Link>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="footer-copy">
        © {new Date().getFullYear()} {site.name} — {site.parent} · {site.location}
      </div>
    </footer>
  );
}
