<script lang="ts">
    import './styles.css';
    import Banner from './Banner.svelte';
    import Header from './Header.svelte';
    import { page } from '$app/stores';

    const customPages: string[] = ['/preview', '/jobs'];
</script>

{#if customPages.includes($page.url.pathname)}
    <slot />
{:else}
    <Banner />
    <div class="app">
        <Header />
        <main>
            <slot />
        </main>
    </div>
{/if}

<style>
    .app {
        width: 100%;
        max-width: 940px;
        margin: 0 auto;
        padding-top: 20px;
    }

    main {
        padding: 70px;
    }
</style>
