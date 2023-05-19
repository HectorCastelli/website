import { getCollection, CollectionEntry, getEntryBySlug } from 'astro:content';

export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
    return await getCollection('project');
}

export async function getOngoingProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "ongoing");
}