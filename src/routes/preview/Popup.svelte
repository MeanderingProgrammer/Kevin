<script lang="ts">
    let dialog: HTMLDialogElement;
    export function show(): void {
        dialog.showModal();
    }
    function close(): void {
        dialog.close();
    }
</script>

<dialog bind:this={dialog}>
    <p>Request access to Kevin</p>
    <p>
        To start using Kevin at your company, please request access. If you already have access, login
        <a href="TODO">here</a>.
    </p>
    <p>Email</p>
    <p>What would you like to use Kevin for?</p>
    <p>Please share a bit more about yourself (LinkedIn, X, etc.)</p>
    <button on:click={close}>
        <p>Request Access</p>
    </button>
    <p>Already have access? Login <a href="TODO">here</a>.</p>
</dialog>
