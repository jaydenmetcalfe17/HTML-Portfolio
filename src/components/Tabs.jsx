import {useState} from 'react';

const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState("tab1");


  return (
    <div className="flex items-center justify-center rounded-lg">

        <div className="w-full rounded-3xl bg-lightBlueBox p-8 mx-10 shadow-xl space-y-5">

            <div className="flex flex-wrap justify-center">
                {tabs.map((tab) => (
                    <button key={tab.id} className={`font-['Shrikhand'] px-4 py-2 font-semibold ${activeTab === tab.id ? "border-b-2 border-primaryBlue text-primaryBlue" : "text-gray-500 hover:text-primaryBlue"}`} onClick={() => setActiveTab(tab.id)}>
                        {tab.label}
                    </button>
                ))}
            </div>

            <div>{tabs.find(tab => tab.id === activeTab).content}</div>

        </div>

    </div>
  )
}

export default Tabs











    