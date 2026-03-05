export default function InsightsMockup() {
  return (
    <div
      className="w-[300px] min-h-[400px] shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden p-5"
      style={{
        border: '2px solid #252B3B',
        borderRadius: '24px',
        backgroundColor: '#0D1525',
      }}
      aria-hidden="true"
    >
      <h3 className="text-white font-bold text-base">Your Insights</h3>
      <p className="text-[#8892A4] text-xs mt-1">This month</p>

      <div className="mt-4 flex flex-col gap-3">
        <div className="bg-[#0D1525] border border-white/[0.08] rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-[#00E676]/20 flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00E676"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 6l-9.5 9.5-5-5L1 18" />
              </svg>
            </div>
            <span className="text-[#8892A4] text-xs">Total Spent</span>
          </div>
          <p className="text-white font-extrabold text-xl">$342.50</p>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="w-[68%] h-full bg-[#00E676] rounded-full" />
          </div>
          <p className="text-[#8892A4] text-xs mt-1">68% of your budget</p>
        </div>

        <div className="bg-[#0D1525] border border-white/[0.08] rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-sm">
              📅
            </div>
            <span className="text-[#8892A4] text-xs">Top Category</span>
          </div>
          <p className="text-white font-bold text-base">Food & Dining</p>
          <p className="text-[#8892A4] text-xs">$145.00 • 42% of spending</p>
        </div>

        <div className="bg-[#0D1525] border border-white/[0.08] rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-sm">
              🐷
            </div>
            <span className="text-[#8892A4] text-xs">You&apos;re Saving</span>
          </div>
          <p className="text-white font-extrabold text-xl">$157.50</p>
          <p className="text-[#8892A4] text-xs">32% better than last month 🎉</p>
        </div>

        <div className="mt-3 border-l-2 border-[#00E676] bg-[#0D1525] rounded-r-xl pl-3 py-2 pr-2">
          <p className="text-white text-xs leading-relaxed">
            💪 You&apos;re on track! Keep it up and you&apos;ll hit your savings goal by next week.
          </p>
        </div>
      </div>
    </div>
  );
}
