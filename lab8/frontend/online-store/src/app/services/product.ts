import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
    { id: 5, name: 'favourites' },
  ];

  // 20 products total (4x5). likes must start 0.
  private readonly products: Product[] = [
    // Smartphones (1)
    {
      id: 101, categoryId: 1, likes: 0,
      name: 'Apple iPhone 13 128GB',
      description: 'Популярный iPhone с отличной камерой и производительностью.',
      price: 299990, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p45/6562462.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p5e/p45/6562462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/p45/6562464.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf0/p45/6562466.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 102, categoryId: 1, likes: 0,
      name: 'Samsung Galaxy A54 5G',
      description: 'Смартфон среднего класса с ярким AMOLED и хорошей автономностью.',
      price: 189990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb2/pf1/7962460.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb2/pf1/7962460.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p15/pf1/7962461.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/pf1/7962462.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-256gb-chernyi-110437287/'
    },
    {
      id: 103, categoryId: 1, likes: 0,
      name: 'Xiaomi Redmi Note 13',
      description: 'Хороший экран, быстрый интерфейс и отличный вариант за свои деньги.',
      price: 109990, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p22/p2f/8453177.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p22/p2f/8453177.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0d/p2f/8453178.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/p2f/8453179.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-8-256gb-chernyi-116915377/'
    },
    {
      id: 104, categoryId: 1, likes: 0,
      name: 'realme C55',
      description: 'Бюджетный смартфон с большим экраном и хорошей батареей.',
      price: 79990, rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p2a/7957956.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p2a/7957956.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1a/p2a/7957957.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p88/p2a/7957958.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/realme-c55-8-256gb-chernyi-110293846/'
    },
    {
      id: 105, categoryId: 1, likes: 0,
      name: 'Google Pixel 7',
      description: 'Камера Pixel и чистый Android — отличный опыт использования.',
      price: 239990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p30/6900874.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p30/6900874.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p30/6900876.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p30/6900878.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-8-128gb-chernyi-107733955/'
    },

    // Laptops (2)
    {
      id: 201, categoryId: 2, likes: 0,
      name: 'Apple MacBook Air M1',
      description: 'Лёгкий ноутбук с отличной автономностью и быстрым чипом M1.',
      price: 399990, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p31/6394058.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p31/6394058.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p31/6394060.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p21/p31/6394062.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-8-256gb-seryi-100397408/'
    },
    {
      id: 202, categoryId: 2, likes: 0,
      name: 'Lenovo IdeaPad 3',
      description: 'Универсальный ноутбук для учёбы и офиса.',
      price: 229990, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/p70/6820617.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p70/6820617.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1a/p70/6820619.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p70/6820621.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15ada6-82ku00cbrk-15-6-8-gb-256-gb-seryi-102245070/'
    },
    {
      id: 203, categoryId: 2, likes: 0,
      name: 'ASUS TUF Gaming',
      description: 'Игровая линейка: мощность, охлаждение, хорошая клавиатура.',
      price: 499990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p23/7560743.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pfe/p23/7560743.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6f/p23/7560744.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/p23/7560745.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-15-6-16-gb-512-gb-chernyi-109896871/'
    },
    {
      id: 204, categoryId: 2, likes: 0,
      name: 'HP 15',
      description: 'Классический ноутбук: офис, браузер, обучение.',
      price: 259990, rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p49/p2f/7763923.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p49/p2f/7763923.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p2f/7763924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p2f/7763925.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/hp-15s-15-6-8-gb-256-gb-serebristyi-109701902/'
    },
    {
      id: 205, categoryId: 2, likes: 0,
      name: 'Acer Aspire 5',
      description: 'Сбалансированная модель с хорошим экраном и SSD.',
      price: 289990, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p20/p6c/6901808.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p20/p6c/6901808.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p6c/6901810.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p05/p6c/6901812.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-5-a515-57-15-6-8-gb-512-gb-serebristyi-105232357/'
    },

    // Headphones (3)
    {
      id: 301, categoryId: 3, likes: 0,
      name: 'Apple AirPods 2',
      description: 'Удобные беспроводные наушники для iPhone и не только.',
      price: 69990, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd2/p3d/6389570.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pd2/p3d/6389570.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/p3d/6389572.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2c/p3d/6389574.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-2-2019-belyi-100318849/'
    },
    {
      id: 302, categoryId: 3, likes: 0,
      name: 'Sony WH-1000XM4',
      description: 'Топовое шумоподавление и очень комфортная посадка.',
      price: 179990, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/p0d/6402627.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p0d/6402627.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p0d/6402629.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/p0d/6402631.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100392546/'
    },
    {
      id: 303, categoryId: 3, likes: 0,
      name: 'JBL Tune 510BT',
      description: 'Доступные накладные Bluetooth-наушники для повседневного использования.',
      price: 19990, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbd/p86/6533675.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p86/6533675.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3e/p86/6533677.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbf/p86/6533679.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101059378/'
    },
    {
      id: 304, categoryId: 3, likes: 0,
      name: 'Samsung Galaxy Buds2',
      description: 'Компактные TWS-наушники с шумоподавлением.',
      price: 59990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p51/p62/6764418.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p51/p62/6764418.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p62/6764420.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf1/p62/6764422.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-belyi-102176055/'
    },
    {
      id: 305, categoryId: 3, likes: 0,
      name: 'Xiaomi Redmi Buds 4',
      description: 'Хорошее соотношение цены и возможностей, удобный кейс.',
      price: 24990, rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/pff/7078990.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/pff/7078990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/pff/7078991.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/pff/7078992.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-buds-4-belyi-107759570/'
    },

    // Tablets (4)
    {
      id: 401, categoryId: 4, likes: 0,
      name: 'Apple iPad 10.2',
      description: 'Универсальный iPad для учёбы, сериалов и заметок.',
      price: 179990, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/pb5/6561880.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/pb5/6561880.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/pb5/6561882.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/pb5/6561884.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-64gb-seryi-102482112/'
    },
    {
      id: 402, categoryId: 4, likes: 0,
      name: 'Samsung Galaxy Tab A8',
      description: 'Большой экран, удобен для видео и базовых задач.',
      price: 99990, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p39/p60/6715896.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p39/p60/6715896.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9e/p60/6715897.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p13/p60/6715898.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-10-5-4-64gb-seryi-102826686/'
    },
    {
      id: 403, categoryId: 4, likes: 0,
      name: 'Xiaomi Pad 6',
      description: 'Мощный планшет с хорошим экраном, подходит для работы и игр.',
      price: 169990, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p61/pd5/8041246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pd5/8041246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdd/pd5/8041247.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p58/pd5/8041248.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-8-256gb-seryi-111390428/'
    },
    {
      id: 404, categoryId: 4, likes: 0,
      name: 'Huawei MatePad 11',
      description: 'Планшет с хорошим экраном и стилус-сценариями.',
      price: 179990, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb6/p05/6653329.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p05/6653329.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p23/p05/6653331.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/p05/6653333.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-6-128gb-seryi-101793594/'
    },
    {
      id: 405, categoryId: 4, likes: 0,
      name: 'Lenovo Tab P11',
      description: 'Хороший выбор для мультимедиа и домашнего использования.',
      price: 119990, rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd9/6598226.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd9/6598226.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pd9/6598228.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/pd9/6598230.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-4-128gb-seryi-101320077/'
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getAllProducts(): Product[] {
    // return copy to avoid accidental mutation of original list
    return this.products.map(p => ({ ...p, images: [...p.images] }));
  }
}