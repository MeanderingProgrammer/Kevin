<script lang="ts">
    import JobListing from './JobListing.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="body">
    {#each data.jobs as job}
        <JobListing {job} />
    {/each}
</div>

<style>
    .body {
        max-width: 720px;
        margin: 0 auto;
    }
</style>
