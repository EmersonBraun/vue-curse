new Vue({
	el: '#app',
	data: {
        playerLife: 100,
        monsterLife: 100,
        gameover: true,
        logs: []
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
            this.logs = []
            this.gameover = false
        },
        restart(){
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
            this.gameover = true 
        },
        attack(special){
            this.hurt('monsterLife',5, 10, special)
            if(this.monsterLife > 0){
                this.hurt('playerLife',7, 12, false)
            }
        },
        hurt(atr, min, max, special){
            const plus = special ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this[atr] - hurt, 0)
            
            let target = atr == 'monsterLife' ? 'Monstro' : 'Jogador'
            let source = target == 'Monstro' ? 'Jogador' : 'Monstro'
            let cls = atr == 'monsterLife' ? 'alert-danger' : 'alert-primary'
            this.registerLogs(`${source} atingiu ${target} com ${hurt}`, cls )
        },
        healAndHurt(){
            this.heal(10,15)
            this.hurt('playerLife',7,12, false)

        },
        heal(min, max){
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLogs(`O jogador se curou com ${heal}`, 'alert-success' )
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        registerLogs(text, cls){
            this.logs.unshift({ text, cls})
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