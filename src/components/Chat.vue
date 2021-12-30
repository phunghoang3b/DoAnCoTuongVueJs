<template>
    <div class="container-chat" style="background-image:url(assets/img/bg-img/test.png);background-size:inherit;">
        <h2>Cùng Hexa-Chess thỏa sức trò chuyện và bàn chiến thuật !</h2>
        <div class="body-chat">
        <!-- nơi chứa nội dung chat -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat'
}
</script>

<style>
    .container-chat{
        height: 663px;
        display: flex;
    }
    .container-chat h2{
        position: absolute;
        top: 13%;
        left: 20%;
        text-transform: uppercase;
        color: #111;
        font-family: cursive;
        border-radius: 10px;
        background-color: yellow;
    }
    .body-chat{
        width: 1620px;
        border-radius: 25px;
        background-color: rgba(0,0,0,0.8);
        box-shadow: 0 0 17px #333;
        margin: 5% auto;
        height: 560px;
    }
</style>