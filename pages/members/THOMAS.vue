<template>
    <div class="content">
        <div class="card">
            <div class="card-nav">
                <h3>Stella</h3>
            </div>

            <div class="card-body">
                <img src="public/ourCats/Stella.jpg " alt="Stella">
                <p v-html="$t('cats.Stella')"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {background-color: #fff;}
p {text-align: center; margin-top: 30px;}
img {display: block; margin: 0 auto; width: 300px; border-radius: 25px; box-shadow: 5px 5px 15px;}
</style>