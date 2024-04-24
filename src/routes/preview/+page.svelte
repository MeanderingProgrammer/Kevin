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
        <div class="section-header">
            <p class="larger">Hey there!</p>
            <p class="smaller">
                My name is Kevin and I'm a project manager. Give me management tasks and I will try my best to solve
                them!
            </p>
        </div>
        <div class="empty"></div>
        <div class="input">
            <textarea rows="4" cols="50">
                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development
                technologies.
            </textarea>
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
        border-radius: 8px;
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
    }

    h1 {
        color: #ffffff;
        font-size: 20px;
    }

    p {
        margin: 0;
        color: #ffffff;
    }

    .larger {
        font-size: 18px;
    }

    .smaller {
        color: #9ca3af;
        font-size: 14px;
    }
</style>
