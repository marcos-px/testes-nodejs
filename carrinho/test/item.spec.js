import Item from "../item.js";

describe("testes dos itens", () => {
    it('Deve ter três campos: nome, valor e quantidade', () => {
    
        const item = new Item('Beterraba', 2.5, 10)

    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
    });

    it('Deve ter o preço calculado de acordo com a quantidade', () =>{

        const item = new Item('Batata', 0.1, 3)
    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);

    })
})