import Image from "next/image";
import { PLAY_STORE_URL } from "@/lib/links";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md bg-[#080D1A]/80 w-full"
      style={{ padding: "10px 32px" }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Image
            src="/images/Finni_Logo_White_Text_1.png"
            alt="Finni AI"
            width={80}
            height={24}
            style={{ objectFit: "contain", mixBlendMode: "screen" }}
            priority
          />
        </div>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-download px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base"
        >
          Get the App
        </a>
      </div>
    </nav>
  );
}
