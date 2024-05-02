<script lang="ts">
    import './styles.css';
    import Banner from './Banner.svelte';
    import Header from './Header.svelte';
    import JobHeader from './JobHeader.svelte';
    import JobFooter from './JobFooter.svelte';
    import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/preview'}
    <slot />
{:else if $page.url.pathname.startsWith('/jobs')}
    <div class="jobs-app">
        <JobHeader />
        <slot />
        <JobFooter />
    </div>
{:else}
    <Banner />
    <div class="default-app">
        <Header />
        <main>
            <slot />
        </main>
    </div>
{/if}

<style>
    .jobs-app {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        padding-top: 20px;
    }

    .default-app {
        max-width: 940px;
        width: 100%;
        margin: 0 auto;
        padding-top: 20px;
    }

    main {
        padding: 70px;
    }
</style>
