import uuidV4 from 'uuid/dist/v4';
const productList = [
    {
        id: uuidV4(),
        name: "ASUS ROG Strix GL503VD",
        price: 819.99,
        img: './img/laptop.jpg'
    },
    {
        id: uuidV4(),
        name: 'Monitor LG 34" UltraWide',
        price: 299.99,
        img: './img/monitor.jpg'
    },
    {
        id: uuidV4(),
        name: "ASUS ROG GLADIUS Mouse",
        price: 41.89,
        img: './img/mouse.jpg'
    },
    {
        id: uuidV4(),
        name: "MARVO Scorpion KG925G",
        price: 46.49,
        img: './img/keyboard.jpg'
    },
    {
        id: uuidV4(),
        name: 'MARVO Scorpion Mic-01',
        price: 18.99,
        img: './img/mic.jpg'
    },
    {
        id: uuidV4(),
        name: "RAZER KRAKEN PRO V2",
        price: 42.49,
        img: './img/headset.jpg'
    }
]
export default productList