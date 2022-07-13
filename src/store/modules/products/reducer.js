const productStorage = [
  {
    id: 10001,
    name: "Moto G10",
    price: 879.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/10/11170751/ar/800/Motorola-G10-1024x576.png",
    description:
      "Tela 6.5” HD+, Processador Snapdragon 460, RAM 4GB, Armazenamento 64 GB, Câmeras 48 MP e 8MP, Bateria 5.000 mAh",
  },
  {
    id: 10002,
    name: "Galaxy A12",
    price: 870.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/07/16170246/ar/800/A12-5-1024x576.jpg",
    description:
      "Tela 6.5” HD+, Processador Mediatek Helio P35, RAM 4GB, Armazenamento 64 GB, Câmeras 48 MP e 8MP, Bateria 5.000 mAh",
  },
  {
    id: 10003,
    name: "Galaxy M21s",
    price: 1080.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/03/24165813/ar/800/m21s-1024x595.jpg",
    description:
      "Tela Super Amoled 6,4” Full HD+ 60hz, Processador SAMSUNG Exynos 9611, RAM 4GB, Armazenamento 64 GB, Câmeras 48 MP e 32MP, Bateria 6.000 mAh",
  },
  {
    id: 10004,
    name: "Realme C25",
    price: 989.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/06/24124054/ar/800/C25-1024x595.jpg",
    description:
      "Tela Super IPS 6,5” HD+ 60Hz, Processador Mediatek Helio G70, RAM 4GB, Armazenamento 64 GB, Câmeras 48 MP e 8MP, Bateria 6.000 mAh",
  },
  {
    id: 10005,
    name: "Poco M3",
    price: 875.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/02/04183148/ar/800/poco-m3-3-1024x595.jpg",
    description:
      "Tela IPS 6,53” Full HD+, Processador Snapdragon 662, RAM 4GB, Armazenamento 128 GB, Câmeras 48 MP e 8MP, Bateria 6.000 mAh",
  },
  {
    id: 10006,
    name: "Redmi Note 10",
    price: 1600.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/04/01164103/ar/800/Redmi-Note-10-3-1024x595.jpg",
    description:
      "Tela 6,5’ Super Amoled Full HD+, Processador Snapdragon 678, RAM 6GB, Armazenamento 128 GB, Câmeras 48 MP e 13MP, Bateria 5.000 mAh",
  },
  {
    id: 10007,
    name: "Poco X3 NFC",
    price: 1855.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/01/28174941/ar/800/poco-x3-3-1024x595.jpg",
    description:
      "Tela LCD IPS 6,67” Full HD+ 120Hz, Processador Snapdragon 732G, RAM 6GB, Armazenamento 128 GB, Câmeras 48 MP e 20MP, Bateria 6.000 mAh",
  },
  {
    id: 10008,
    name: "Motorola Edge 20",
    price: 2999.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/10/21211242/ar/800/Edge-20--1024x576.jpg",
    description:
      "Tela OLED 6,7” Full HD+ 144Hz, Processador Snapdragon 778G, RAM 8GB, Armazenamento 128 GB, Câmeras 108 MP e 32MP, Bateria 5.000 mAh",
  },
  {
    id: 10009,
    name: "iPhone 12 Pro",
    price: 4600.0,
    image:
      "https://www.promobit.com.br/blog/wp-content/uploads/2021/10/21212047/ar/800/iphone-12-pro--1024x576.jpg",
    description:
      "Tela OLED 6,1” Full HD+, Processador Apple A14 Bionic, RAM 6GB, Armazenamento 128 GB, Câmeras 12 MP e 12MP, Bateria 2815 mAh",
  },
];

const productReducer = (state = productStorage, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
