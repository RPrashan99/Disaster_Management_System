import React from "react";
import { Tabs } from "flowbite-react";
import PastEvents from "./past_event_slider";

const overview_pastevent = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-grey py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-primary font-semibold mb-4">
              How you can contribute to our donating campaigns
            </h2>
            <p className="text-sm text-NeutralGrey mb-8">
              It is very easy. You just need to press donate now and fill the
              form displaying there. We will reach you soon after you complete
              the donation form.
            </p>
          </div>

          <div className="md:w-1/2 mx-auto  sm:item-center justify-around gap-12">
            <Tabs aria-label="Tabs with icons" style="underline">
              <Tabs.Item active title="Overview" >
                This is{" "}               
                Welcome to the Disaster Management System Donation Section, 
                where your generosity can make a real impact in times of crisis. By contributing, 
                you become a vital part of our mission to respond swiftly and effectively to disasters, 
                providing relief and support to those in need.
              </Tabs.Item>
              <Tabs.Item title="Impact" >
                This is{" "}
                
                Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              <Tabs.Item title="What You get">
                This is{" "}
                
                Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </Tabs.Item>
              
              
            </Tabs>
          </div>
        </div>
        <PastEvents/>
        
      </div>
      

    </div>
  );
};

export default overview_pastevent;
