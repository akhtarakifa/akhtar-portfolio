export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a2218] py-10 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <p className="text-[#a09080] text-xs text-center">
          © {year} Akhtar Akifa Sakhi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
