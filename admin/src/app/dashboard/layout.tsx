import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut, Code, Briefcase, Star } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row text-white">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-900 border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-wider">ADMIN PANEL</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-white/70 hover:text-white">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard/projects" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-white/70 hover:text-white">
            <Code size={20} />
            <span>Projects</span>
          </Link>
          <Link href="/dashboard/skills" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-white/70 hover:text-white">
            <Star size={20} />
            <span>Skills</span>
          </Link>
          <Link href="/dashboard/experience" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors text-white/70 hover:text-white">
            <Briefcase size={20} />
            <span>Experience</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/api/logout" className="flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-white/5 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-auto">
        {children}
      </main>
    </div>
  );
}
