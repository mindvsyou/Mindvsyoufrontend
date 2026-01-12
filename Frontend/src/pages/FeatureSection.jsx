const features = [
  {
    id: 1,
    title: "Daily live classes",
    description:
      "Chat with educators, ask questions, answer live polls, and get your doubts cleared – all while the class is going on",
    bg: "bg-[#76A9FF]",
    image: "/live-classes.png", // replace with your image/svg
  },
  {
    id: 2,
    title: "Practice and revise",
    description:
      "Learning isn’t just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision",
    bg: "bg-[#FF9E9E]",
    image: "/practice.png",
  },
  {
    id: 3,
    title: "Learn anytime, anywhere",
    description:
      "One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices",
    bg: "bg-[#FFC677]",
    image: "/learn-anywhere.png",
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature) => (
          <div key={feature.id}>
            {/* Illustration */}
            <div
              className={`rounded-2xl ${feature.bg} p-6 flex items-center justify-center`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="max-h-48 object-contain"
              />
            </div>

            {/* Text */}
            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
