import React from "react";

// =============================================================================
// PROJECT TEMPLATE
// =============================================================================
// How to use:
// 1. Copy this file and rename it to your project name (e.g., MyProject.jsx)
// 2. Replace all placeholder values marked with "REPLACE:" comments
// 3. Add your images to /public/images/projects/[YourProjectFolder]/
// 4. Import and add a route for this component in your router/App file
// =============================================================================

const ProjectTemplate = () => {
  return (
    <div className="px-0 lg:px-0">
      <div className="max-w-[1286px] mx-auto">
        {/* ===================== HERO SECTION ===================== */}
        <div className="flex flex-col gap-6 mt-[58px] max-w-[1242px] mx-auto">
          {/* REPLACE: Project title */}
          <h1 className="lg:text-[40px] text-3xl font-bold ">Project Title</h1>

          {/* REPLACE: Short project description / tagline */}
          <h2 className="lg:text-[36px] text-2xl font-semibold">
            A brief tagline describing the project in one or two lines
          </h2>

          {/* REPLACE: Tags — add or remove tag divs as needed */}
          <div className="flex gap-1.75 flex-wrap">
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Tag1</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Tag2</h3>
            </div>
            <div className="px-3 py-1 bg-[#403F3F] w-fit text-[#FFFFFF] rounded-[5px]">
              <h3>#Tag3</h3>
            </div>
            {/* Add more tags by copying the div above */}
          </div>
        </div>

        {/* ===================== COVER IMAGE ===================== */}
        {/* REPLACE: Update the image path to your project's cover image */}
        <section className="mt-10 max-w-[1284px] mx-auto">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/projects/YourProjectFolder/cover.png"
              alt="Project cover image"
            />
          </div>
        </section>

        {/* ===================== ABOUT THE PROJECT ===================== */}
        <section className="mt-[90px] max-w-[1284px] mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="lg:text-[36px] text-3xl font-semibold">
              About the Project
            </h1>

            {/* REPLACE: Write a paragraph about the project background and goals */}
            <h2 className="lg:text-[24px] font-medium text-xl tracking-[2%] text-justify">
              Describe the project here. Who is the client? What was the goal?
              What problem does the project solve? Keep it concise but
              informative — 3 to 5 sentences work well.
            </h2>
          </div>

          {/* REPLACE: Update image paths — you can add or remove images */}
          <div className="flex flex-col md:flex-row gap-10 lg:gap-0 mt-[90px] md:items-start xl:justify-evenly items-center justify-center">
            <img
              src="/images/projects/YourProjectFolder/about/image1.png"
              alt="About image 1"
              className="w-90 xl:w-auto"
            />
            <img
              src="/images/projects/YourProjectFolder/about/image2.png"
              alt="About image 2"
              className="max-h-[728px] w-90 xl:w-auto"
            />
          </div>
        </section>

        {/* ===================== CHALLENGES & GOALS ===================== */}
        <section className="mt-[90px] max-w-[1284px] mx-auto">
          <div className="flex flex-col gap-6 max-w-[1223px]">
            <h1 className="lg:text-[36px] text-3xl font-semibold">
              Challenges & Goals
            </h1>

            {/* REPLACE: Describe the main challenges and goals of the project */}
            <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl xl:h-[211px]">
              What were the biggest challenges? What were the key goals the
              client wanted to achieve? Explain the constraints, technical
              hurdles, or design decisions that shaped the project.
            </h2>
          </div>
        </section>

        {/* ===================== SHOWCASE IMAGE ===================== */}
        {/* REPLACE: Update the image path — this is a large showcase/gallery image */}
        <section className="max-w-[1284px] mx-auto mt-[90px]">
          <div className="mt-[90px] flex items-center justify-center">
            <img
              src="/images/projects/YourProjectFolder/showcase/gallery.png"
              alt="Project showcase"
            />
          </div>

          {/* ===================== WHAT WE DID ===================== */}
          <div className="flex flex-col gap-6 mt-[90px]">
            <h1 className="lg:text-[36px] text-3xl font-semibold">
              What We Did
            </h1>

            {/* REPLACE: Brief intro sentence for the bullet points below */}
            <h2 className="lg:text-[24px] tracking-[2%] text-justify font-medium text-xl">
              We designed and developed a solution that included:
            </h2>

            {/* REPLACE: Update each bullet point — add or remove items as needed */}
            <div className="flex flex-col lg:text-[24px] gap-[14.4px]">
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">First key deliverable or feature</p>
              </div>
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">Second key deliverable or feature</p>
              </div>
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">Third key deliverable or feature</p>
              </div>
              <div className="flex items-center gap-[20.5px]">
                <img src="/images/services/Cube.png" alt="cube-icon" />
                <p className="font-normal">Fourth key deliverable or feature</p>
              </div>
              {/* Add more bullet points by copying the div above */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// REPLACE: Rename this export to match your component name
export default ProjectTemplate;
