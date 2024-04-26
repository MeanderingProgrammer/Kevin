<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/assets/logo.png';
</script>

<header>
    <a href="/"><img src={logo} alt="Intellection logo" class="logo" /></a>

    <nav>
        <ul>
            <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                <a href="/">About Us</a>
            </li>
            <li aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
                <a href="/blog">Blog</a>
            </li>
            <li aria-current={$page.url.pathname === '/preview' ? 'page' : undefined}>
                <a href="/preview">Preview</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        width: 100px;
        height: 100px;
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 35px;
    }

    li a {
        color: var(--color-text);
        font-size: 1.25rem;
        padding: 0 1rem;
        text-decoration: none;
    }

    li[aria-current='page'] a {
        text-decoration: underline;
    }
</style>
