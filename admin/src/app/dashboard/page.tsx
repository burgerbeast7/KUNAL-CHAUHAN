export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>
      <p className="text-white/70 mb-8 max-w-2xl">
        Manage your portfolio content dynamically from here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-sm text-white/50">Manage your showcase projects.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <p className="text-sm text-white/50">Update your technical proficiency.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Experience</h3>
          <p className="text-sm text-white/50">Edit your professional journey.</p>
        </div>
      </div>
    </div>
  );
}
