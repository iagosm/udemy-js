//uma factory returna um novo objeto
module.exports = () =>{
    return {
        valor:1,
        inc(){
            this.valor++
        }
    }
}