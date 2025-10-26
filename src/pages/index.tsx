import { DecentralizeSection } from "@/components/sections/decentralize";
import { EconomicTrustSection } from "@/components/sections/economic-trust";
import { FeaturesSection } from "@/components/sections/features";
import { InsightsSection } from "@/components/sections/insights";
import { PhoneVidSection } from "@/components/sections/phone-vid-section";
import { VerificationSection } from "@/components/sections/verification";

const IndexPage = () => {
  return (
    <div>
      <DecentralizeSection />
      <FeaturesSection />
      <InsightsSection />
      <VerificationSection />
      <PhoneVidSection />
      <EconomicTrustSection />
    </div>
  );
};

export default IndexPage;
