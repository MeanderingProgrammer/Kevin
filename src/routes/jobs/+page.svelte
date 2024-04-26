<script lang="ts">
    import logo from '$lib/assets/logo.png';
</script>

<div class="wrapper">
    <div class="header">
        <a href="/"><img src={logo} alt="Intellection logo" class="logo" /></a>
    </div>

    <div class="body">
        <p>Job 1</p>
        <p>Job 2</p>
    </div>

    <div class="footer">
        <p>TODO</p>
    </div>
</div>

<style>
    .wrapper {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
    }

    .header {
        display: flex;
        justify-content: center;
    }

    .logo {
        width: 100px;
        height: 100px;
    }

    .body {
        max-width: 720px;
        margin: 0 auto;
    }
</style>
