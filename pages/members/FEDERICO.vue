<template>
    <div class="content">
        <div class="card">
            <div class="card-nav">
                <h3>Trilly</h3>
            </div>

            <div class="card-body">
                <img src="public/ourCats/trilly.jpg " alt="Trilly">
                <p v-html="$t('cats.Trilly')"></p>
            </div>
        </div>

        <div class="card">
            <div class="card-nav">
                <h3>Gigi</h3>
            </div>

            <div class="card-body">
                <img src="public/ourCats/gigi.jpg " alt="Gigi">
                <p v-html="$t('cats.Gigi')"></p>
            </div>
        </div>

        <div class="card">
            <div class="card-nav">
                <h3>Luna</h3>
            </div>

            <div class="card-body">
                <img src="public/ourCats/luna.png " alt="Luna">
                <p v-html="$t('cats.Luna')"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {background-color: #fff;}
p {text-align: center; margin-top: 30px;}
img {display: block; margin: 0 auto; width: 300px; border-radius: 25px; box-shadow: 5px 5px 15px;}
</style>