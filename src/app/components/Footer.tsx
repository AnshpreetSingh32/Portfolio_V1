import { MotionDiv } from "../lib/motion";

import { CopyrightIcon } from "lucide-react";

const iconSize = { width: 28, height: 28 };

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-10 sm:px-6">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="flex justify-center mx-auto w-full max-w-5xl border-t hover:border-target py-4 text-lg"
      >
        <p className="flex sm:flex-col item-center gap-1">
          <span className="flex flex-row gap-1">
            <span className="mt-0.5">
              <CopyrightIcon />
            </span>
            {new Date().getFullYear()}
            <span className="text-target">Anshpreet Singh.</span>
          </span>
          <span className="text-center">
            All rights reserved.
            </span>
        </p>
      </MotionDiv>
    </footer>
  );
};
