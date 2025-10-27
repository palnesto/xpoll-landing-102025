import { ContactUs } from "@/components/sections/contact-us";
import { DecentralizeSection } from "@/components/sections/decentralize";
import { EconomicTrustSection } from "@/components/sections/economic-trust";
import { FeaturesSection } from "@/components/sections/features";
import { FutureOfIntelligence } from "@/components/sections/future-of-intelligence";
import { InsightsSection } from "@/components/sections/insights";
import { LLMQuerySection } from "@/components/sections/llm-query";
import { PhoneVidSection } from "@/components/sections/phone-vid-section";
import { StructuredIntelligence } from "@/components/sections/structured-intelligence";
import { VerificationSection } from "@/components/sections/verification";

const IndexPage = () => {
  return (
    <div>
      <DecentralizeSection />
      <FeaturesSection />
      <ContactUs />
      <FutureOfIntelligence />
      <StructuredIntelligence />
      <LLMQuerySection />
      <InsightsSection />
      <VerificationSection />
      <PhoneVidSection />
      <EconomicTrustSection />
    </div>
  );
};

export default IndexPage;
