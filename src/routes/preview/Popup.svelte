<script lang="ts">
    let dialog: HTMLDialogElement;
    export function show(): void {
        dialog.showModal();
    }
    function close(): void {
        console.log('lol');
        dialog.close();
    }
</script>

<dialog bind:this={dialog}>
    <h1>Request access to Kevin</h1>
    <p class="larger padded">
        To start using Kevin at your company, please request access. If you already have access, login
        <a href="TODO">here</a>.
    </p>

    <p>Email</p>
    <div><input type="text" /></div>

    <p>What would you like to use Kevin for?</p>
    <div><input type="text" /></div>

    <p>Please share a bit more about yourself (LinkedIn, X, etc.)</p>
    <div><input type="text" /></div>

    <button on:click={close}>
        <p class="larger">Request Access</p>
    </button>
    <p>Already have access? Login <a href="TODO">here</a>.</p>
</dialog>

<style>
    dialog {
        width: 380px;
        background-color: var(--color-preview-dark);
        border-radius: var(--radius);
        border: none;
        padding: 1.5rem;
    }

    dialog::backdrop {
        background-color: #000000;
        opacity: 0.8;
    }

    input {
        width: 100%;
        background-color: #121212;
        border-radius: var(--radius);
        border: none;
        line-height: 2rem;
        color: #ffffff;
        padding-left: 0.5rem;
        margin-bottom: 1rem;
    }

    button {
        cursor: pointer;
        background-color: #60a5fa;
        border: none;
        border-radius: 9999px;
        width: 160px;
        margin-top: 0.5rem;
    }

    button p {
        margin: 5px;
    }

    h1 {
        color: #ffffff;
        font-size: 1.875rem;
    }

    p {
        color: #ffffff;
        font-size: 0.75rem;
        margin-bottom: 0px;
    }

    .larger {
        font-size: 0.875rem;
    }

    .padded {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    a {
        color: #ffffff;
    }
</style>
