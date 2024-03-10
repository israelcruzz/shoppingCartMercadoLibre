export const useCurrency = () => ({
    formatPTBR(value: number){
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
})