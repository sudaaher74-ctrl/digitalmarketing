"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import { HiOutlineDownload, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await api.request(`/leads${statusFilter ? `?status=${statusFilter}` : ""}`, { auth: true });
      setLeads(res.leads);
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.adminUpdate("leads", id, JSON.stringify({ status: newStatus }));
      fetchLeads();
    } catch (error) {
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      await api.adminDelete("leads", id);
      fetchLeads();
    } catch (error) {
      alert("Failed to delete lead");
    }
  };

  const handleExport = () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL}/leads/export?token=${localStorage.getItem("token")}`, "_blank");
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold font-heading">Lead Management</h1>
        <div className="flex gap-4 w-full sm:w-auto">
          <select 
            className="form-input bg-white/5 border-white/10 w-full sm:w-auto"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="converted">Converted</option>
            <option value="lost">Lost</option>
          </select>
          <button 
            onClick={handleExport}
            className="btn-primary py-2 px-4 whitespace-nowrap"
          >
            <HiOutlineDownload size={18} className="mr-2 inline" />
            Export CSV
          </button>
        </div>
      </div>

      <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs uppercase text-[var(--color-text-secondary)] border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="px-6 py-4 font-medium">Message</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center">Loading...</td>
                </tr>
              ) : leads.length > 0 ? (
                leads.map((lead) => (
                  <tr key={lead._id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{lead.name}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">{lead.email}</div>
                      {lead.phone && <div className="text-xs text-[var(--color-text-muted)]">{lead.phone}</div>}
                    </td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{lead.service}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)] max-w-xs truncate">
                      {lead.message || "-"}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                        className={`text-xs font-medium rounded-full px-3 py-1.5 appearance-none cursor-pointer border focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                          lead.status === 'new' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                          lead.status === 'converted' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          lead.status === 'lost' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                          'bg-white/5 text-white/80 border-white/10'
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => handleDelete(lead._id)}
                        className="p-2 text-[var(--color-text-muted)] hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete Lead"
                      >
                        <HiOutlineTrash size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-[var(--color-text-muted)]">
                    No leads found matching your criteria.
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
