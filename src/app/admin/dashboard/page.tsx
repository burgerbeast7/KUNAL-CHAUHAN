export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-orbitron font-bold mb-6">Welcome to Admin Dashboard</h1>
      <p className="text-white/70 mb-8 max-w-2xl">
        This is your control center. From here, you can manage your portfolio content dynamically.
        Using the sidebar on the left, you can navigate to different sections to add, update, or remove:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-sm text-white/50 mb-4">Manage your portfolio projects, links, and details.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <p className="text-sm text-white/50 mb-4">Update your technical skills and proficiency levels.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p className="text-sm text-white/50 mb-4">Add new job roles, internships, or achievements.</p>
        </div>
      </div>
    </div>
  );
}
