import { getCollection, CollectionEntry, getEntryBySlug } from 'astro:content';

export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
    return await getCollection('project');
}

export async function getOngoingProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "ongoing");
}
export async function getAbandonedProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "abandoned");
}
export async function getCompletedProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "completed");
}