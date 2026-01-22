export default function Stats({ data }) {
    const { patients, dentists, experience } = data || {
        patients: "5k+",
        dentists: "15+",
        experience: "10+"
    };

    const stats = [
        { label: "Happy Patients", value: patients, icon: "fa-users", color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Expert Dentists", value: dentists, icon: "fa-user-doctor", color: "text-secondary", bg: "bg-secondary-light/20" },
        { label: "Years Experience", value: experience, icon: "fa-award", color: "text-green-500", bg: "bg-green-50" },
        { label: "Success Rate", value: "99.9%", icon: "fa-chart-line", color: "text-purple-500", bg: "bg-purple-50" },
    ];

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                                <i className={`fa-solid ${stat.icon}`}></i>
                            </div>
                            <h3 className="text-3xl font-bold text-dark mb-2 font-outfit">{stat.value}</h3>
                            <p className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
