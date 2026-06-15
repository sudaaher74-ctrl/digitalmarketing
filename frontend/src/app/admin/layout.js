"use client";

import { AuthProvider, useAuth } from "@/context/AuthContext";
import { HiOutlineChartPie, HiOutlineUsers, HiOutlineDocumentText, HiOutlineBriefcase, HiOutlineCog, HiLogout } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminSidebar() {
  const { logout } = useAuth();
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin", icon: HiOutlineChartPie },
    { name: "Leads", href: "/admin/leads", icon: HiOutlineUsers },
    { name: "Portfolio", href: "/admin/portfolio", icon: HiOutlineBriefcase },
    { name: "Blog", href: "/admin/blog", icon: HiOutlineDocumentText },
    { name: "Settings", href: "/admin/settings", icon: HiOutlineCog },
  ];

  if (pathname === "/admin/login") return null;

  return (
    <aside className="w-64 bg-[#0A0A0A] border-r border-white/10 h-screen fixed top-0 left-0 flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <span className="text-xl font-bold font-heading text-white">Agency<span className="text-[var(--color-primary)]">Admin</span></span>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
              pathname === link.href ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]" : "text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-white"
            }`}
          >
            <link.icon size={20} />
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 transition-colors font-medium"
        >
          <HiLogout size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

function AdminLayoutContent({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const isLogin = pathname === "/admin/login";

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {!isLogin && user && <AdminSidebar />}
      <main className={`${!isLogin && user ? "ml-64 p-8" : "p-0"}`}>
        {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}
