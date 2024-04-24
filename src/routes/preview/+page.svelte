<script lang="ts">
    import Popup from './Popup.svelte';
    import Icon from '@iconify/svelte';

    let popup: Popup;

    function handleText(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            const element = event.target;
            if (element instanceof HTMLTextAreaElement && element.value.length > 0) {
                popup.show();
            } else {
                event.preventDefault();
            }
        }
    }
</script>

<Popup bind:this={popup} />

<div class="wrapper">
    <div class="side-bar">
        <div class="section-header">
            <h1>Kevin</h1>
        </div>
        <div class="empty"></div>
        <div class="section-footer">
            <button class="request" on:click={popup.show}>
                <Icon icon="radix-icons:enter" width="1.5rem" height="1.5rem" style="color: #6096ff;" />
                <p>Request access</p>
            </button>
        </div>
    </div>

    <div class="prompt-panel">
        <div class="section-header inner">
            <p class="larger">Hey there!</p>
            <p class="smaller">
                My name is Kevin and I'm a project manager. Give me management tasks and I will try my best to solve
                them!
            </p>
        </div>
        <div class="empty"></div>
        <div class="inner">
            <div class="relative">
                <textarea on:keydown={handleText} placeholder="Give Kevin a task to work on..."></textarea>
                <button class="submit" on:click={popup.show}>
                    <Icon icon="radix-icons:arrow-right" width="1.5rem" height="1.5rem" style="color: #ffffff" />
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        background-color: var(--color-preview-dark);
    }

    .side-bar {
        width: 270px;
        background-color: var(--color-preview);
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    .prompt-panel {
        flex-grow: 1;
        background-color: var(--color-preview);
        margin: 1rem;
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
    }

    .section-header {
        border-bottom: 1px solid var(--color-text);
    }

    .empty {
        flex-grow: 1;
    }

    .section-footer {
        border-top: 1px solid var(--color-text);
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
    }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }

    button:focus {
        outline: none;
    }

    textarea {
        resize: none;
        width: 100%;
        height: 3rem;
        background-color: var(--color-text);
        border-radius: var(--radius);
        border: none;
        color: #ffffff;
        padding-top: 0.875rem;
        padding-left: 1rem;
        padding-right: 3rem;
    }

    textarea::placeholder {
        color: #9ca3af;
    }

    .request {
        display: flex;
        gap: 1rem;
    }

    .inner {
        padding: 2rem;
    }

    .relative {
        position: relative;
    }

    .submit {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }

    h1 {
        color: #ffffff;
        font-size: 1.25rem;
    }

    p {
        margin: 0;
        color: #ffffff;
    }

    .larger {
        font-size: 1.125rem;
    }

    .smaller {
        color: #9ca3af;
        font-size: 0.875rem;
    }
</style>
