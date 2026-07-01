import React, { useState } from 'react';
import { Snail } from 'lucide-react';

export default function RightBar(){
    const [activeTab, setActiveTab] = useState('New Posts');
    const [step, setStep] = useState(0);

    const posts = [
        {
            id: 1,
            title: "How often do you wear ear plugs?",
            time: "replied 56 min ago",
        },
        {
            id: 2,
            author: "Monstera Adem",
            title: "Coping with fluctuating tinnitus ",
        },
        {
            id: 3,
            author: "Feyza Gana",
            title: "XEN1101 - Phase III Trial",
        }
    ];

    return (
        <aside className="hidden w-[320px] lg:flex lg:flex-col gap-6 p-4 h-full text-white">

            <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-[#D4F467] to-[#E8FF8E] text-[#1a1a1a]">
                <div className="relative z-10">
                    <h3 className="font-black text-lg leading-tight mb-2">
                        Tinnitus & The Body
                    </h3>
                    <p className="text-[13px] font-medium opacity-80 mb-4">
                        Help us support research by participating in our latest study!
                    </p>
                    <button className="bg-[#111214] text-white text-[11px] font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                        Take our survey
                    </button>
                </div>
                <Snail size={120} className="absolute -bottom-10 -right-10 opacity-20" />
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex gap-4 border-b border-gray-800">
                    {['New Posts', 'New Threads'].map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab)
                                setStep(i)
                            }}
                            className={`pb-3 text-sm font-bold transition-all ${
                                activeTab === tab 
                                ? 'text-[#4ADE80] border-b-2 border-[#4ADE80]' 
                                : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Liste des items */}
                <div className="flex flex-col gap-6">

                    {
                        step == 0 ? posts.map((post) => (
                            <div key={post.id} className="flex gap-3 group cursor-pointer">
                                {/* Infos */}
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-[13px] font-bold leading-tight line-clamp-2 group-hover:text-[#4ADE80] transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-[11px] text-gray-500 mt-1">
                                        <span className="font-bold text-gray-400">{post.author}</span> {post.time}
                                    </p>
                                </div>
                            </div>
                        )) : (
                            <h1>hello world</h1>
                        )
                    }
                </div>
            </div>
        </aside>
    );
};