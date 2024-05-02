<script lang="ts">
    import type { Job } from '$lib/jobs';

    export let job: Job;
</script>

<a href="/jobs/{job.id}"><h3>{job.title}</h3></a>
<p>{job.department}</p>

<style>
    h3 {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }
</style>
