import { referenceHeightInDVH } from "@/constants";
import { ResponsiveHeight } from "../responsive-height";

export const DecentralizeSection = () => {
  const baseHeight = referenceHeightInDVH * 1;
  const lgHeight = referenceHeightInDVH * 1;
  return (
    // <ResponsiveHeight baseDVH={baseHeight} lgDVH={lgHeight} className="w-full">
    <DecentralizeSectionContent />
    // </ResponsiveHeight>
  );
};

const DecentralizeSectionContent = () => {
  return (
    <div className="flex items-center justify-center h-full bg-red-500">
      DecentralizeSection
    </div>
  );
};
