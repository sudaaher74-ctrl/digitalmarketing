"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { HiOutlineUsers, HiOutlineDocumentText, HiOutlineBriefcase, HiOutlineArrowUp } from "react-icons/hi";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return <div className="animate-pulse space-y-8">
      <div className="h-8 bg-white/10 rounded w-1/4"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-white/5 rounded-2xl"></div>)}
      </div>
    </div>;
  }

  const statCards = [
    { title: "Total Leads", value: stats?.leads?.total || 0, icon: HiOutlineUsers, color: "text-blue-400", bg: "bg-blue-400/10" },
    { title: "New Leads", value: stats?.leads?.new || 0, icon: HiOutlineArrowUp, color: "text-green-400", bg: "bg-green-400/10" },
    { title: "Blog Posts", value: stats?.posts || 0, icon: HiOutlineDocumentText, color: "text-purple-400", bg: "bg-purple-400/10" },
    { title: "Portfolio Items", value: stats?.portfolio || 0, icon: HiOutlineBriefcase, color: "text-orange-400", bg: "bg-orange-400/10" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-heading mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {statCards.map((card, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex items-center gap-5 border border-white/5">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${card.bg} ${card.color}`}>
              <card.icon size={28} />
            </div>
            <div>
              <div className="text-3xl font-bold font-heading mb-1">{card.value}</div>
              <div className="text-sm font-medium text-[var(--color-text-secondary)]">{card.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold font-heading">Recent Leads</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs uppercase text-[var(--color-text-secondary)]">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {stats?.recentLeads?.length > 0 ? (
                stats.recentLeads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{lead.name}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">{lead.email}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{lead.service}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        lead.status === 'new' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/20' :
                        lead.status === 'converted' ? 'bg-green-500/20 text-green-400 border border-green-500/20' :
                        'bg-white/10 text-white/70 border border-white/10'
                      }`}>
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-8 text-center text-[var(--color-text-muted)]">
                    No recent leads found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
