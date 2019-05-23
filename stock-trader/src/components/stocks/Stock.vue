<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card :class="type == 'buy' ? 'green darken-3 white--text' : 'blue darken-3 white--text'">
            <v-card-title class="headline">
                <strong>
                    {{ stock.name }} 
                    <small>
                        (Preço: {{ stock.price | currency}})
                        <template v-if="type == 'sell'">
                            | Qtd: {{ stock.quantity }}
                        </template> 
                    </small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <template v-if="type == 'sell'">
                    <v-text-field label="Quantidade" type="number" 
                    v-model.number="quantity"
                    :error="quantity < 0 || quantity > stock.quantity ||!Number.isInteger(quantity)"></v-text-field>
                    <v-btn class="blue darken-3 white--text"
                    :disabled="quantity <= 0 || quantity > stock.quantity ||!Number.isInteger(quantity)"
                    @click="sellStock">{{ quantity > stock.quantity ? 'Insuficiente' : 'Vender' }}</v-btn>
                </template>
                <template v-else>
                    <v-text-field label="Quantidade" type="number" 
                    v-model.number="quantity"
                    :error="quantity < 0 || insufficientFunds || !Number.isInteger(quantity)"></v-text-field>
                    <v-btn class="green darken-3 white--text"
                    :disabled="quantity <= 0 || insufficientFunds || !Number.isInteger(quantity)"
                    @click="buyStock">{{ insufficientFunds ? 'Insuficiente' : 'Comprar' }}</v-btn>
                </template>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['stock','type'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('buyStock', order)
            this.quantity = 0
        },
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('sellStock', order)
            this.quantity = 0
        }
    }
}
</script>

<style scoped>

</style>