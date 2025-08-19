import React from "react";

import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <footer className="w-full bg-black-100 py-8 text-center text-white">
      <h3 className="text-xl font-bold mb-2">Contact Me</h3>

      <p className="text-gray-300">
        Please contact me directly at{" "}
        <a
          href="mailto:mohziaulhaq123@gmail.com"
          className="text-[#915EFF] hover:underline"
        >
          mohziaulhaq123@gmail.com
        </a>
      </p>

      <p className="text-gray-300 mt-2">
        Or call me at{" "}
        <a
          href="tel:+19132783560"
          className="text-[#915EFF] hover:underline"
        >
          +1 (913) 278 3560
        </a>
      </p>

      <p className="text-gray-500 text-sm mt-6">
        © 2025 Zia Ul Haq Mohammed. All rights reserved.
      </p>
    </footer>
  );
};

export default SectionWrapper(Contact, "contact");