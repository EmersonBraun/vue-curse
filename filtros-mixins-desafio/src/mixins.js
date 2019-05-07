export default{
    data(){
		return {
			text: 'asdasd asdasd asdasd s s ssd'
		}
	},
	filters: {
		tsic(value){//turnSpaceInComma
			if(!value) return ''
			return value.replace(/\s/g, ',')
		}
	},
	computed: {
		tsic(){
			return this.text.replace(/\s/g, ',')
		},
		contWords(){
			return this.text.split(' ').map(word => `${word} (${word.length})`).join(' ')
		},
	},
}