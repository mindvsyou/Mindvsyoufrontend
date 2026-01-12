import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

const SelectGoal = () => {
  const [goals, setGoals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch goals dynamically
  const fetchGoals = async (query = "") => {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:5000/record/goals?search=${query}`
    );
    setGoals(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  // Live search
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchGoals(value);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* Heading */}
      <p className="font-bold text-gray-700 text-3xl">
        Select your goal / exam
      </p>
      <p className="mt-2 text-sm text-gray-700 font-medium">
        <span className="text-green-600 font-semibold">Various</span> exams available
        for your preparation
      </p>

      {/* Search */}
      <div className="relative mt-6">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Type the goal / exam you’re preparing for"
          className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Popular goals */}
      <div className="mt-12">
      <p className="mt-12 mb-6 text-2xl font-bold text-gray-700">
        Popular goals
      </p>
      </div>
      <div className="mt-12">
      {loading ? (
        <p className="text-gray-500">Loading goals...</p>
      ) : goals.length === 0 ? (
        <p className="text-gray-500">No goals found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="group cursor-pointer rounded-xl border border-gray-200 p-8 text-center hover:bg-gray-100 transition"
            >
              <div className="text-5xl mb-4">{goal.icon}</div>
              <p className="font-semibold text-gray-800 group-hover:text-green-600">
                {goal.title}
              </p>
              <Link
                to={`/record/${goal.title}`}
                className="bg-orange-300 px-4 py-2 rounded !text-gray-800 !no-underline text-xs font-bold"
              >
                STUDY MATERIAL
              </Link>
            </div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};

export default SelectGoal;
