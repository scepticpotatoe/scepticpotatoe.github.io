export const reviewGenerator = {

    movie: [
        'Matrix','Total Recall','Titanic','Terminator','Heat'
    ],
    adjective: ['suspenseful','sentimental','wacky','satirical','picaresque'],

    firstGenerator(){
        const movieName = this.movie;
        const ranIndGen = Math.floor(Math.random()*movieName.length) //random index generator
        return movieName[ranIndGen]
    },
    
    secondGenerator(){
        const adjective = this.adjective;
        const ranIndGen = Math.floor(Math.random()*adjective.length) //random index generator
        return adjective[ranIndGen]
    },

    thirdGenerator(){
        return Math.floor(Math.random()*6) //random starnumber generator
    },

    stringGenerator(){
        return `I found ${this.firstGenerator()} to be ${this.secondGenerator()}. In general it deserves a review of ${this.thirdGenerator()}/5 stars`
    }

}
