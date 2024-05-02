import { ALL_JOBS } from '$lib/jobs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    return { jobs: ALL_JOBS };
};
