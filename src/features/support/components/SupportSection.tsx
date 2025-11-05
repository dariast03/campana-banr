import { SupportBenefits } from './SupportBenefits';
import { SupportCampaign } from './SupportCampaign';
import type { SupportSectionProps } from '../types';

export const SupportSection = ({
  benefits,
  benefitsTitle,
  campaignTitle,
  campaignDescription,
  campaignCta,
  layout = 'stacked',
  className = ''
}: SupportSectionProps) => {
  return (
    <section
      className={`${className} ${layout === 'side-by-side' ? 'grid grid-cols-1 gap-6 md:grid-cols-2' : 'space-y-6'} max-w-8xl mx-auto px-4 md:px-8 lg:px-12`}
    >
      <SupportBenefits benefits={benefits} title={benefitsTitle} />
      <SupportCampaign
        title={campaignTitle}
        description={campaignDescription}
        ctaText={campaignCta}
      />
    </section>
  );
};
