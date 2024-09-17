import TabShowCase from "./TabShowCase";
import TabBackground from "./TabBackground";
import TabSpecialties from "./TabSpecialties";
import TabSubject from "./TabSubject";
import TabPricing from "./TabPricing";
import TabAvailability from "./TabAvailability";

const tabsTitle = [
  {
    label: "Subject",
  },

  {
    label: "Specialties",
  },

  {
    label: "Background",
  },

  {
    label: "Showcase",
  },

  {
    label: "Pricing",
  },

  {
    label: "Availability",
  },
];

const Tabs = ({ activeTabIndex, setActiveTabIndex }) => {
  return (
    <div>
      <div className="flex justify-between space-x-3 mb-6">
        {/* Loop through tab data and render button for each. */}
        {tabsTitle.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 transition-colors duration-300 rounded-lg px-2 w-full ${
                idx > activeTabIndex && "bg-[#C7C7C7]"
              } font-bold text-white ${
                idx === activeTabIndex
                  ? "bg-[#1a47ff] text-white "
                  : "bg-[#BDCAFF]"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              <span className="sm:block hidden">{tab.label}</span>
              <span className="sm:hidden block">{idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Show active tab content. */}
      <div className="py-4">
        {activeTabIndex === 0 && <TabSubject />}
        {activeTabIndex === 1 && <TabSpecialties />}
        {activeTabIndex === 2 && <TabBackground />}
        {activeTabIndex === 3 && <TabShowCase />}
        {activeTabIndex === 4 && <TabPricing />}
        {activeTabIndex === 5 && <TabAvailability />}
      </div>
    </div>
  );
};

export default Tabs;
