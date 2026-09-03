import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Civil & Concrete Works',
    titleAr: 'أعمال الحفر والخرسانة',
    description: 'Comprehensive structural engineering and concrete installation for industrial facilities.',
    descriptionAr: 'هندسة هيكلية شاملة وتركيب خرسانة لمنشآت صناعية.',
    category: 'Structural',
    categoryAr: 'هيكلي',
  },
  {
    id: 2,
    title: 'Steel Structures',
    titleAr: 'الهياكل الفولاذية',
    description: 'Design and installation of precision steel frameworks and industrial steel systems.',
    descriptionAr: 'تصميم وتركيب أطر العمل الفولاذية الدقيقة وأنظمة الفولاذ الصناعية.',
    category: 'Structural',
    categoryAr: 'هيكلي',
  },
  {
    id: 3,
    title: 'Industrial Flooring',
    titleAr: 'الأرضيات الصناعية',
    description: 'Advanced epoxy and Ucrete flooring systems for maximum durability and chemical resistance.',
    descriptionAr: 'أنظمة أرضيات إيبوكسي و Ucrete متقدمة للمتانة القصوى والمقاومة الكيميائية.',
    category: 'Flooring',
    categoryAr: 'أرضيات',
  },
  {
    id: 4,
    title: 'MEP Systems',
    titleAr: 'أنظمة MEP',
    description: 'Mechanical, Electrical, and Plumbing systems integration for industrial environments.',
    descriptionAr: 'تكامل أنظمة ميكانيكية وكهربائية وسباكة للبيئات الصناعية.',
    category: 'Systems',
    categoryAr: 'أنظمة',
  },
  {
    id: 5,
    title: 'Technical Office',
    titleAr: 'المكتب الفني',
    description: 'Engineering planning, design supervision, and technical project management.',
    descriptionAr: 'التخطيط الهندسي والإشراف على التصميم وإدارة المشاريع الفنية.',
    category: 'Engineering',
    categoryAr: 'هندسة',
  },
];

export const getServiceById = (id: number): Service | undefined => {
  return services.find((service) => service.id === id);
};