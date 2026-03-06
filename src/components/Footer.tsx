import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 border-t border-white/5 bg-[#080D1A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#00E676]" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="#00E676">
                <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
              </svg>
            </span>
            <span className="font-semibold text-white">Finni AI</span>
            <span className="text-[#8892A4] text-sm ml-2">© 2025 Finni AI</span>
          </div>
          <div className="flex items-center">
            <Link
              href="/privacy-policy"
              style={{ color: "#8892A4", fontSize: "14px", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/data-deletion"
              style={{ color: "#8892A4", fontSize: "14px", textDecoration: "none", marginLeft: "24px" }}
            >
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
