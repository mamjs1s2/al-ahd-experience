import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/projects';
import { SITE_URL } from '@/lib/constants';

interface ProjectPageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProjectPageParams): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: `${project.title} | Al Ahd General Contracting`,
    description: project.description || `${project.title} - ${project.location}`,
    openGraph: {
      title: `${project.title} | Al Ahd General Contracting`,
      description: project.description || `${project.title} - ${project.location}`,
      url: `${SITE_URL}/projects/${project.slug}`,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return [
    { slug: 'pepsi-tanta-factory' },
    { slug: '10th-of-ramadan' },
    { slug: 'p-and-j-sadat' },
  ];
}
