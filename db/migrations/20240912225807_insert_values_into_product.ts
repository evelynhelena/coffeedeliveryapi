import { randomUUID } from 'crypto'
import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex('product').insert([
    {
      id: randomUUID(),
      imageName: '01-Image-coffee',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.0,
    },
    {
      id: randomUUID(),
      imageName: '02-Image-coffee',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.0,
    },
    {
      id: randomUUID(),
      imageName: '03-Image-coffee',
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.0,
    },
    {
      id: randomUUID(),
      imageName: '04-Image-coffee',
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.0,
    },
    {
      id: randomUUID(),
      imageName: '05-Image-coffee',
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 14.0,
    },
    {
      id: randomUUID(),
      imageName: '06-Image-coffee',
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.0,
    },
    {
      id: randomUUID(),
      imageName: '07-Image-coffee',
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 14.0,
    },
    {
      id: randomUUID(),
      imageName: '08-Image-coffee',
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 14.0,
    },
    {
      id: randomUUID(),
      imageName: '09-Image-coffee',
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 14.0,
    },
    {
      id: randomUUID(),
      imageName: '10-Image-coffee',
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 14.0,
    },
    {
      id: randomUUID(),
      imageName: '11-Image-coffee',
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 15.5,
    },
  ])
}

export async function down(knex: Knex): Promise<void> {
  await knex('product').del()
}
