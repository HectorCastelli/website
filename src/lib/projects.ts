import { getCollection, type CollectionEntry } from 'astro:content';

export async function getAllProjects(): Promise<CollectionEntry<"project">[]> {
    return await getCollection('project');
}

export async function getOngoingProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "ongoing").then(p => p.sort());
}
export async function getAbandonedProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "abandoned").then(p => p.sort());
}
export async function getCompletedProjects(): Promise<CollectionEntry<'project'>[]> {
    return await getCollection('project', ({ data }) => data.status == "completed").then(p => p.sort());
}