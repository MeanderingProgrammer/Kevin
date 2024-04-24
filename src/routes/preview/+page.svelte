<div class="wrapper">
    <div class="side-bar">
        <div class="section-header">
            <h1>Kevin</h1>
        </div>
        <div class="empty"></div>
        <div class="section-footer">
            <p>Request access</p>
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
            <textarea placeholder="Give Kevin a task to work on..."></textarea>
        </div>
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        height: 100vh;
        background-color: #242424;
    }

    .side-bar {
        width: 270px;
        background-color: var(--color-preview);
        padding: 16px;
        display: flex;
        flex-direction: column;
    }

    .prompt-panel {
        flex-grow: 1;
        background-color: var(--color-preview);
        margin: 16px;
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
        padding-top: 20px;
        padding-bottom: 20px;
    }

    textarea {
        resize: none;
        width: 100%;
        height: 50px;
        background-color: var(--color-text);
        border-radius: var(--radius);
        border: none;
        font-family: inherit;
        color: #ffffff;
        font-size: 16px;
        padding: 14px;
    }

    textarea::placeholder {
        color: #9ca3af;
    }

    h1 {
        color: #ffffff;
        font-size: 20px;
    }

    p {
        margin: 0;
        color: #ffffff;
    }

    .inner {
        padding: 30px;
    }

    .larger {
        font-size: 18px;
    }

    .smaller {
        color: #9ca3af;
        font-size: 14px;
    }
</style>
