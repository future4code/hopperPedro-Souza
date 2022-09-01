type produto = {
    id: string,
    name: string,
    price: number
}

export let produtos: produto[] = [
    {
        id: '1',
        name: 'banana',
        price: 3
    },
    {
        id: '2',
        name: 'mamão',
        price: 8
    },
    {
        id: '3',
        name: 'maçã',
        price: 1
    }
]

export const addProduto = (item: produto) => {
    let novoId = produtos.length + 1
    item = {... item, id: `${novoId}`}
    produtos = [...produtos, item]
    return produtos
}

export const rmProduto = (Id: string) => {
    let novaLista = produtos.filter((item) => {
        return item.id !== Id
    })
    produtos = novaLista
    return produtos
}

export const putPrice = (Id: string, novoPreco: string) => {
    let novaLista = produtos.map((item) => {
        if(item.id === Id){
            return {...item, price: Number(novoPreco)}
        }else{
            return item
        }
    })
    produtos = novaLista
    return produtos
}