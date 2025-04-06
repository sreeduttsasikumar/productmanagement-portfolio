'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [tab, setTab] = useState('problem');

  const tabs = {
    problem: 'Maersk faced growing dissatisfaction due to inconsistent delivery timelines. Delivery Promise Success was at 65%, with 1% failure costing ~$1.5M.',
    goal: ['Improve Delivery Promise Success to 77.5%', 'Improve schedule reliability to 97%', 'Reduce operational costs by $26M USD', 'Drive CSAT from 6 to 7.5+', 'Reduce 15 FTEs via automation'],
    steps: ['Data Collection: Schedule Logs, PMPH vs SOC from 40+ terminals', 'Analysis: 20% of delivery failures tied to flawed vessel planning', 'Design: Wireframes and dashboards', 'Development: Real-time predictive analytics system', 'Adoption: Early engagement, KPI alignment, training sessions'],
    artifacts: ['Dashboards (Power BI)', 'Wireframes (Figma): Capacity Forecast View', 'Python Forecasting Model', 'Process Maps (As-Is vs To-Be)'],
    feedback: ['Maria Jensen (Rotterdam): Early warnings before bottlenecks.', 'Prakash Mehta (Mumbai): Planning time reduced by 40%.', 'Elisa Garcia (Panama): Dashboard reflects reality.'],
    results: ['Delivery Promise: 65% to 78%', 'Reliability: 85% to 97%', 'Cost Savings: $26M+', '50% fewer complaints', 'CSAT: 6 to 7.7', '15 FTEs saved'],
    dashboards: ['Real-Time PMPH vs SOC Gaps', 'CSAT Tracker and Weekly Trends', 'Incident Dashboard and Risk Alerts']
  };

  return (
    <main className="p-8 font-sans max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Improving Delivery Promise Reliability at Maersk</h1>
      <div className="mb-6 space-x-2">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm transition ${
              tab === key ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        {Array.isArray(tabs[tab]) ? (
          <ul className="list-disc pl-5 space-y-2">
            {tabs[tab].map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        ) : (
          <p>{tabs[tab]}</p>
        )}
      </div>
      {tab === 'artifacts' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Wireframe Preview</h2>
          <Image src="/wireframe.png" alt="Wireframe" width={800} height={500} />
        </div>
      )}
      {tab === 'dashboards' && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Monitoring Dashboard</h2>
          <Image src="/dashboard.png" alt="Monitoring Dashboard" width={800} height={500} />
        </div>
      )}
    </main>
  );
}
