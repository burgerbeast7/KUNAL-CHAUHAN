"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";

type Experience = {
  _id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

export default function AdminExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    period: "",
    description: "",
    achievements: "",
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    const res = await fetch("/api/experiences");
    const data = await res.json();
    if (data.success) setExperiences(data.data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `/api/experiences/${editingId}` : "/api/experiences";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsModalOpen(false);
    resetForm();
    fetchExperiences();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this experience?")) return;
    await fetch(`/api/experiences/${id}`, { method: "DELETE" });
    fetchExperiences();
  };

  const openEditModal = (exp: Experience) => {
    setEditingId(exp._id);
    setFormData({
      company: exp.company,
      role: exp.role,
      period: exp.period,
      description: exp.description,
      achievements: exp.achievements.join("\n"),
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ company: "", role: "", period: "", description: "", achievements: "" });
  };

  if (loading) return <div>Loading experiences...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Experience</h1>
        <button
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-white/90"
        >
          <Plus size={20} />
          <span>Add Experience</span>
        </button>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp._id} className="bg-zinc-900 border border-white/10 p-6 rounded-xl relative group">
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => openEditModal(exp)} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg"><Edit2 size={16}/></button>
              <button onClick={() => handleDelete(exp._id)} className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/40 rounded-lg"><Trash2 size={16}/></button>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-white/70">{exp.company}</p>
              </div>
              <p className="text-white/50 text-sm mt-1 md:mt-0">{exp.period}</p>
            </div>
            
            <p className="text-white/60 text-sm mb-4">{exp.description}</p>
            
            <ul className="list-disc list-inside space-y-1 text-sm text-white/50">
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        {experiences.length === 0 && <div className="text-center text-white/50 py-10">No experiences found. Add one!</div>}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative text-white">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">{editingId ? "Edit Experience" : "Add Experience"}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Company</label>
                  <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Role</label>
                  <input required type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Period</label>
                <input required type="text" value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" placeholder="e.g. 2021 - Present" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Description</label>
                <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Achievements (one per line)</label>
                <textarea required rows={5} value={formData.achievements} onChange={e => setFormData({...formData, achievements: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90">
                  {editingId ? "Save Changes" : "Create Experience"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
