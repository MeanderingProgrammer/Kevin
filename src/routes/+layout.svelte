<script>
    import './styles.css';
    import Header from './Header.svelte';
</script>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        max-width: 940px;
        margin: 0 auto;
    }

    main {
        padding: 70px;
    }
</style>
