"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, X } from "lucide-react";

type Project = {
  _id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
};

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    link: "",
    github: "",
    image: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch("/api/admin/projects");
    const data = await res.json();
    if (data.success) setProjects(data.data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingId ? `/api/admin/projects/${editingId}` : "/api/admin/projects";
    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsModalOpen(false);
    resetForm();
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  const openEditModal = (p: Project) => {
    setEditingId(p._id);
    setFormData({
      title: p.title,
      description: p.description,
      tech: p.tech.join(", "),
      link: p.link,
      github: p.github,
      image: p.image,
    });
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: "", description: "", tech: "", link: "", github: "", image: "" });
  };

  if (loading) return <div>Loading projects...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-orbitron font-bold">Projects</h1>
        <button
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-white/90"
        >
          <Plus size={20} />
          <span>Add Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p._id} className="bg-zinc-900 border border-white/10 p-6 rounded-xl relative group">
            <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => openEditModal(p)} className="p-2 bg-white/10 hover:bg-white/20 rounded-lg"><Edit2 size={16}/></button>
              <button onClick={() => handleDelete(p._id)} className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/40 rounded-lg"><Trash2 size={16}/></button>
            </div>
            <h3 className="text-xl font-bold font-orbitron mb-2 pr-16">{p.title}</h3>
            <p className="text-white/60 text-sm mb-4 line-clamp-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, i) => (
                <span key={i} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded-md">{t}</span>
              ))}
            </div>
          </div>
        ))}
        {projects.length === 0 && <div className="col-span-2 text-center text-white/50 py-10">No projects found. Add one!</div>}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold font-orbitron mb-6">{editingId ? "Edit Project" : "Add Project"}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Description</label>
                <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Technologies (comma separated)</label>
                <input required type="text" value={formData.tech} onChange={e => setFormData({...formData, tech: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Live URL</label>
                  <input required type="url" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">GitHub URL</label>
                  <input required type="url" value={formData.github} onChange={e => setFormData({...formData, github: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Image URL</label>
                <input required type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50" />
              </div>
              
              <div className="pt-4">
                <button type="submit" className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90">
                  {editingId ? "Save Changes" : "Create Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
