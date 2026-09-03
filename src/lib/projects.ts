import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'pepsi-tanta-factory',
    title: 'Pepsi Tanta Factory',
    titleAr: 'مصنع بيبسي طنطا',
    location: 'Tanta, Egypt',
    locationAr: 'طنطا، مصر',
    category: 'Industrial Flooring & Structures',
    categoryAr: 'أرضيات صناعية وهياكل',
    year: '2023',
    status: 'completed',
    scope: [
      'Production Floor Epoxy Flooring',
      'Sandwich Panel Installation',
      'MEP Systems Integration',
      'Quality Control Infrastructure',
    ],
    scopeAr: [
      'أرضيات إيبوكسي لقاعات الإنتاج',
      'تركيب الألواح المركبة',
      'دمج أنظمة MEP',
      'البنية التحتية لمراقبة الجودة',
    ],
    metrics: [
      { label: 'Floor Area', labelAr: 'مساحة الأرضية', value: '8,500 m²' },
      { label: 'Completion Time', labelAr: 'وقت الإنجاز', value: '14 months' },
      { label: 'Quality Rating', labelAr: 'تقييم الجودة', value: '99.8%' },
    ],
    images: [
      '/images/projects/pepsi-tanta-1.webp',
      '/images/projects/pepsi-tanta-2.webp',
      '/images/projects/pepsi-tanta-3.webp',
    ],
    description: 'State-of-the-art beverage manufacturing facility with precision flooring and structural systems.',
    descriptionAr: 'منشأة تصنيع مشروبات حديثة مع أنظمة أرضية وهيكلية دقيقة.',
  },
  {
    slug: '10th-of-ramadan',
    title: '10th of Ramadan Facilities',
    titleAr: 'مرافق العاشر من رمضان',
    location: '10th of Ramadan City, Egypt',
    locationAr: 'مدينة العاشر من رمضان، مصر',
    category: 'Industrial Complex',
    categoryAr: 'مجمع صناعي',
    year: '2023',
    status: 'completed',
    scope: [
      'Explosion-Proof Battery Rooms',
      'Acrylic Roofing System (18,000 m²)',
      'Lifeline Systems Installation',
      'Safety Infrastructure',
    ],
    scopeAr: [
      'غرف بطاريات مقاومة للانفجار',
      'نظام أسقف أكريليك (18000 متر مربع)',
      'تركيب أنظمة الحياة',
      'البنية التحتية الأمنية',
    ],
    metrics: [
      { label: 'Roof Coverage', labelAr: 'تغطية السقف', value: '18,000 m²' },
      { label: 'Safety Certification', labelAr: 'شهادة الأمان', value: 'ISO 45001' },
      { label: 'Operational Status', labelAr: 'حالة التشغيل', value: 'Fully Functional' },
    ],
    images: [
      '/images/projects/ramadan-1.webp',
      '/images/projects/ramadan-2.webp',
      '/images/projects/ramadan-3.webp',
    ],
    description: 'Advanced industrial facility with specialized safety systems and climate control.',
    descriptionAr: 'منشأة صناعية متقدمة مع أنظمة سلامة متخصصة والتحكم المناخي.',
  },
  {
    slug: 'p-and-j-sadat',
    title: 'P&J Factory - Sadat City',
    titleAr: 'مصنع P&J - مدينة السادات',
    location: 'Sadat City, Egypt',
    locationAr: 'مدينة السادات، مصر',
    category: 'Heavy Manufacturing',
    categoryAr: 'التصنيع الثقيل',
    year: '2022',
    status: 'completed',
    scope: [
      '1,000-Ton Production Line Installation',
      'Industrial Epoxy Flooring',
      'Equipment Integration',
      'Operational Training',
    ],
    scopeAr: [
      'تركيب خط إنتاج 1000 طن',
      'أرضيات إيبوكسي صناعية',
      'دمج المعدات',
      'التدريب التشغيلي',
    ],
    metrics: [
      { label: 'Production Capacity', labelAr: 'السعة الإنتاجية', value: '1,000 tons/day' },
      { label: 'Uptime', labelAr: 'وقت التشغيل', value: '99.5%' },
      { label: 'Implementation Period', labelAr: 'فترة التنفيذ', value: '8 months' },
    ],
    images: [
      '/images/projects/pj-sadat-1.webp',
      '/images/projects/pj-sadat-2.webp',
      '/images/projects/pj-sadat-3.webp',
    ],
    description: 'Massive manufacturing installation with precision-engineered production lines.',
    descriptionAr: 'منشأة تصنيع ضخمة مع خطوط إنتاج مُصممة بدقة.',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};