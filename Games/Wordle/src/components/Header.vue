<template>
    <header>
        <nav>
            <div id="border"></div>
            <svg @click='onClickQuestion' id='question' xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
            <div id="flex">
            <div id='instructions'>
            <h2>BY LEON TRUONG</h2>
            <p>This is <strong>WORDLE</strong>.</p>
            <p>Except the words won't refresh daily.</p>
            <p>Instead, every time you refresh this page or complete a game, a new word gets selected as the <strong>WORDLE</strong>!</p>
            <svg @click='onClickX' id='x' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg>
        </div>
        </div>
            <h1>Wordle</h1>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        onClickQuestion() {
            const instructions = document.getElementById('flex');
            instructions.style.display = 'flex';
        },
        onClickX() {
            const instructions = document.getElementById('flex');
            instructions.style.display = 'none';
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@800&display=swap');
$white: #fafafa;
$black: rgb(17, 17, 17);
h1 {
    text-align: center;
    font-size: 2em;
    color: $white;
    margin-top: 10px;
    font-weight: bold;
    font-family: 'Roboto Serif', sans-serif;
    user-select: none;
}

#border {
    position: absolute;
    margin-left: -6.5px;
    margin-top: 20px;
    width: 100vw;
    height: 20px;
    border-bottom: 1px solid rgb(60, 60, 60);
}

#question {
    position: absolute;
    margin-top: 3.5px;
    margin-left: 50px;
}

#instructions {
    width: 400px;
    height: 200px;
    position: absolute;
    color: $white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background: $black;
    user-select: none;
}

#flex {
    transition: .4s;
    display: flex;
    justify-content: center;
    display: none;
}

h2 {
    text-align: center;
    font-size: 1em;
}

#x {
    position: absolute;
    margin-left: 350px;
    margin-top: -180px;
}

p {
    line-height: 1.4;
}

@media (max-width: 500px) {
    #instructions {
        width: 300px;
        font-size: .8em;
    }

    #x {
        position: absolute;
        margin-left: 250px;
        margin-top: -160px;
        width: 17px;
        height: 17px;
    }
}

@media (max-width: 355px) {
    h1 {
        font-size: 2em;
    }

    #instructions {
        width: 260px;
        font-size: .8em;
    }

    #x {
        position: absolute;
        margin-left: 220px;
        margin-top: -160px;
    }

    #question {
        width: 22px;
        height: 22px;
        margin-top: 2px;
    }
}

@media (max-width: 315px) {
    h1 {
        font-size: 2em;
    }

    #instructions {
        width: 220px;
        font-size: .6em;
        height: 130px;
    }

    #x {
        position: absolute;
        margin-left: 180px;
        margin-top: -120px;
        width: 15px;
        height: 15px;
    }

    #question {
        width: 19px;
        height: 19px;
    }
}

@media (max-width: 270px) {
    h1 {
        font-size: 1.6em;
    }

    #instructions {
        width: 220px;
        font-size: .6em;
        height: 130px;
    }

    #x {
        position: absolute;
        margin-left: 190px;
        margin-top: -120px;
    }

    #question {
        width: 16px;
        height: 16px;
        margin-top: 2px;
    }
}
    

</style>