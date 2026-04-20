"use client";

import { useState, useEffect } from "react";
import { User, Save, Loader2 } from "lucide-react";
import { USER_INFO } from "@/lib/data";
import ImageCropper from "@/components/ui/ImageCropper";

export default function AdminProfile() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: USER_INFO.name,
    title1: USER_INFO.title1,
    title2: USER_INFO.title2,
    title3: USER_INFO.title3,
    subtitle: USER_INFO.subtitle,
    tagline: USER_INFO.tagline,
    about: USER_INFO.about,
    email: USER_INFO.email,
    github: USER_INFO.github,
    linkedin: USER_INFO.linkedin,
    instagram: USER_INFO.instagram,
    location: USER_INFO.location,
    resumeUrl: USER_INFO.resumeUrl,
    profileImage: "/images/profile-headshot.jpeg",
    aboutImage: "/images/profile-cinematic.jpeg",
    spotifyTracks: ["6I9VzXbGqGWE1bf052nO48", "0VjIjW4GlUZAMYd2vXMi3b", "2ZRo7axmMPeSVUvDbGkJah", "", ""] as string[]
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/admin/profile");
      const data = await res.json();
      if (data.success && data.data) {
        
        let loadedTracks = data.data.spotifyTracks || ["6I9VzXbGqGWE1bf052nO48", "0VjIjW4GlUZAMYd2vXMi3b", "2ZRo7axmMPeSVUvDbGkJah"];
        // Ensure there are exactly 5 slots minimum
        while (loadedTracks.length < 5) { loadedTracks.push(""); }
        
        setFormData({
          ...data.data,
          spotifyTracks: loadedTracks
        });
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const parsedTracks = formData.spotifyTracks.map(str => {
        if (!str) return "";
        const match = str.match(/track\/([a-zA-Z0-9]+)/);
        return match ? match[1] : str.trim();
      }).filter(Boolean);

      const payload = {
        ...formData,
        spotifyTracks: parsedTracks
      };
      await fetch("/api/admin/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-white">Loading profile settings...</div>;

  return (
    <div className="max-w-4xl">
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
          <User size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold font-orbitron text-white">Profile Settings</h1>
          <p className="text-white/50 text-sm">Manage your personal information and social links.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-zinc-900 border border-white/10 p-8 rounded-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Display Name</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Primary Email</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Title 1 (e.g. Software Engineer)</label>
              <input required type="text" value={formData.title1} onChange={e => setFormData({...formData, title1: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Title 2 (e.g. AI | Full-Stack)</label>
              <input required type="text" value={formData.title2} onChange={e => setFormData({...formData, title2: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Title 3 (e.g. AWS Certified)</label>
              <input required type="text" value={formData.title3} onChange={e => setFormData({...formData, title3: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Subtitle (Mini-bio)</label>
            <input required type="text" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Tagline (Hero Statement)</label>
            <textarea required rows={2} value={formData.tagline} onChange={e => setFormData({...formData, tagline: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">About (Detailed Bio)</label>
            <textarea required rows={5} value={formData.about} onChange={e => setFormData({...formData, about: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">GitHub URL</label>
              <input required type="text" value={formData.github} onChange={e => setFormData({...formData, github: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">LinkedIn URL</label>
              <input required type="text" value={formData.linkedin} onChange={e => setFormData({...formData, linkedin: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">Instagram URL</label>
              <input required type="text" value={formData.instagram} onChange={e => setFormData({...formData, instagram: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-2">Location</label>
              <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-white/5">
            <div className="space-y-4">
              <label className="block text-sm font-orbitron text-white/70">Main Profile Photo (Hero)</label>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 bg-black mb-4 flex-shrink-0">
                <img src={formData.profileImage} alt="Profile Preview" className="w-full h-full object-cover" />
              </div>
              <ImageCropper 
                label="Upload & Crop Headshot" 
                aspectRatio={1} 
                onCropComplete={(base64) => setFormData({...formData, profileImage: base64})} 
              />
              <div className="pt-2">
                <p className="text-white/30 text-xs mb-1">Or provide URL:</p>
                <input required type="text" value={formData.profileImage} onChange={e => setFormData({...formData, profileImage: e.target.value})} placeholder="Image URL (e.g. /images/profile.jpg)" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white text-xs" />
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-orbitron text-white/70">About Page Cinematic Photo</label>
              <div className="relative w-full h-32 rounded-xl overflow-hidden border border-white/10 bg-black mb-4">
                <img src={formData.aboutImage} alt="About Preview" className="w-full h-full object-cover" />
              </div>
              <ImageCropper 
                label="Upload & Crop Cinematic" 
                aspectRatio={16/9} 
                onCropComplete={(base64) => setFormData({...formData, aboutImage: base64})} 
              />
              <div className="pt-2">
                <p className="text-white/30 text-xs mb-1">Or provide URL:</p>
                <input required type="text" value={formData.aboutImage} onChange={e => setFormData({...formData, aboutImage: e.target.value})} placeholder="Image URL (e.g. /images/about.jpg)" className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white text-xs" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-white/70 mb-2">Resume URL / Path</label>
            <input required type="text" value={formData.resumeUrl} onChange={e => setFormData({...formData, resumeUrl: e.target.value})} className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-white/90 mb-1">Spotify Top Tracks (Paste Full Links)</label>
              <p className="text-white/40 text-xs mb-3">Just paste the full Spotify URL (e.g. open.spotify.com/track/...) and the system will automatically extract the ID!</p>
            </div>
            {formData.spotifyTracks && formData.spotifyTracks.map((track, i) => (
              <input 
                key={i} 
                type="text" 
                value={track} 
                onChange={e => {
                  const newArray = [...formData.spotifyTracks];
                  newArray[i] = e.target.value;
                  setFormData({...formData, spotifyTracks: newArray});
                }} 
                placeholder={`Spotify Song Link #${i + 1}`} 
                className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg outline-none focus:border-white/50 text-white" 
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <Save size={20} />
            )}
            <span>{saving ? "Saving Changes..." : "Save Profile Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
