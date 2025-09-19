export interface BenefitItem {
  id: number;
  text: string;
}

export interface SupportSectionProps {
  benefits: BenefitItem[];
  benefitsTitle?: string;
  campaignTitle?: string;
  campaignDescription?: string;
  campaignCta?: string;
  layout?: 'stacked' | 'side-by-side';
  className?: string;
}
