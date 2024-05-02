import { error } from '@sveltejs/kit';
import { ALL_JOBS } from '$lib/jobs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
    const matching = ALL_JOBS.filter((job) => job.id === params.slug);
    if (matching.length === 0) {
        error(404, { message: 'Job not found' });
    }
    return matching[0];
};
