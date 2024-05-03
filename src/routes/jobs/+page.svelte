<script lang="ts">
    import type { Job } from '$lib/jobs';

    import type { PageData } from './$types';
    import JobListing from './JobListing.svelte';

    export let data: PageData;

    const groups: Record<string, Job[]> = {};
    for (const job of data.jobs) {
        if (!groups[job.department]) {
            groups[job.department] = [];
        }
        groups[job.department].push(job);
    }
</script>

<div class="body">
    <h1>Open Positions ({data.jobs.length})</h1>

    {#each Object.entries(groups) as [department, jobs]}
        <h2>{department}</h2>
        {#each jobs as job}
            <JobListing {job} />
        {/each}
    {/each}
</div>

<style>
    .body {
        max-width: 720px;
        margin: 0 auto;
    }

    h1 {
        font-size: 1.25rem;
    }

    h2 {
        font-size: 1.125rem;
    }
</style>
