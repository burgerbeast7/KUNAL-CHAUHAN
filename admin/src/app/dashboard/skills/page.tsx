"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";

type Skill = {
  _id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
};

export default function AdminSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    level: 80,
    icon: "",
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    const res = await fetch("/api/skills");
    const data = await res.json();
    if (data.success) setSkills(data.data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `/api/skills/${editingId}` : "/api/skills";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsModalOpen(false);
    resetForm();
    fetchSkills();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;
    await fetch(`/api/skills/${id}`, { method: "DELETE" });
    fetchSkills();
  };

  const openEditModal = (s: Skill) => {
    setEditingId(s._id);
    setFormData({
      name: s.name,
      category: s.category,
      level: s.level,
      icon: s.icon,
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ name: "", category: "", level: 80, icon: "" });
  };

  if (loading) return <div>Loading skills...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Skills</h1>
        <button
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-white/90"
        >
          <Plus size={20} />
          <span>Add Skill</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s._id} className="bg-zinc-900 border border-white/10 p-6 rounded-xl relative group">
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => openEditModal(s)} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg"><Edit2 size={16}/></button>
              <button onClick={() => handleDelete(s._id)} className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/40 rounded-lg"><Trash2 size={16}/></button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{s.icon}</div>
              <div>
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="text-white/50 text-sm">{s.category}</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-white/50 mb-1">
                <span>Proficiency</span>
                <span>{s.level}%</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-white h-full" style={{ width: `${s.level}%` }}></div>
              </div>
            </div>
          </div>
        ))}
        {skills.length === 0 && <div className="col-span-full text-center text-white/50 py-10">No skills found. Add one!</div>}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl w-full max-w-lg relative text-white">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-6">{editingId ? "Edit Skill" : "Add Skill"}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Skill Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Category</label>
                <input required type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" placeholder="e.g. Frontend, Backend, Tools" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Proficiency Level ({formData.level}%)</label>
                <input required type="range" min="0" max="100" value={formData.level} onChange={e => setFormData({...formData, level: parseInt(e.target.value)})} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Icon (Emoji or URL)</label>
                <input required type="text" value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90">
                  {editingId ? "Save Changes" : "Create Skill"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
