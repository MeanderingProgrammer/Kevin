<script>
    import './styles.css';
</script>

<div class="app">
    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
    }

    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
