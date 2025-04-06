
'use client';
import Image from 'next/image';

export default function ProblemTab() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">The Problem: Missed Delivery Promises Hurt Business</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 p-4 rounded shadow text-center">
          <p className="text-4xl font-bold text-red-700">65%</p>
          <p className="text-sm mt-2">Delivery Promise Success Rate</p>
        </div>
        <div className="bg-red-50 p-4 rounded shadow text-center">
          <p className="text-4xl font-bold text-red-700">$1.5M</p>
          <p className="text-sm mt-2">Loss per 1% failure</p>
        </div>
        <div className="bg-red-50 p-4 rounded shadow text-center">
          <p className="text-4xl font-bold text-red-700">20%</p>
          <p className="text-sm mt-2">Failures from terminal planning issues</p>
        </div>
      </div>

      <p className="mb-6">
        In 2024, Maersk’s Delivery Promise Success — defined as containers loaded within ±1 day and discharged within ±3 days — stood at just <strong>65%</strong>. 
        This significantly impacted large shipping clients like Amazon, H&M, and Kotahi, creating operational disruptions and reputational risk. Each percentage point of failure 
        resulted in <strong>$1.5M</strong> in costs due to penalties, terminal overstays, and inefficiencies.
      </p>

      <div className="text-center">
        <Image
          src="/problem-heatmap.png"
          alt="Delivery Variance Heatmap"
          width={800}
          height={400}
          className="rounded shadow mx-auto"
        />
        <p className="text-xs text-gray-500 mt-2">Figure: Weekly delivery promise variance across terminals</p>
      </div>
    </section>
  );
}
