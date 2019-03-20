new Vue({
	el: '#app',
	data: {
        playerLife: 100,
        monsterLife: 100,
        gameover: true
    },
    computed: {
        hasResult(){ 
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods: {
        newGame(){
            this.playerLife = 100
            this.monsterLife = 100
            this.gameover = false
        },
        restart(){
            this.playerLife = 100
            this.monsterLife = 100
            this.gameover = true 
        },
        attack(special){
            this.hurt('playerLife',7, 12, false)
            this.hurt('monsterLife',5, 10, special)
        },
        hurt(atr, min, max, special){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
        },
        healAndHurt(){
            this.heal(10,15)
            this.hurt('playerLife',7,12, false)

        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
       }
    },
    watch: {
        hasResult(value){
            if(value){
                this.gameover = true
            }
        }
    },
});