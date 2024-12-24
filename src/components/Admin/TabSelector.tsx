import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabSelectorProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export function TabSelector({ tabs, activeTab, onChange }: TabSelectorProps) {
  return (
    <div className="flex border-b border-gray-800">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 transition-colors duration-200 ${
            activeTab === tab.id
              ? 'text-red-500 border-b-2 border-red-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}