import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './AdminPanel.css';
import ModalForEdtit from './ModalForEdtit/ModalForEdtit';

const AdminPanel = () => {
    const { 
        products, 
        setProductData, 
        getProductData,
        deleteProduct,
        editModalFormStatus,
        openEditFormModal,
        getEditId
    } = useContext(productsContext);

    const [item, setItem] = useState({
        title: '',
        year: '',
        price: '',
        image: '',
        speed: '',
        imageDetail: '',
        detailLength: '',
        detailGuest: '',
        latest: '',
        imageLatest: ''
    });

    useEffect(() => {
        getProductData();
    }, []);

    const getInpValue = (e) => {
        const newProduct = {
            ...item,
            [e.target.name]: e.target.value
        }
        setItem(newProduct);
    }

    function addProduct() {
        setProductData(item);
        setItem({
            title: '',
            year: '',
            price: '',
            image: '',
            speed: '',
            imageDetail: '',
            detailLength: '',
            detailGuest: '',
            latest: '',
            imageLatest: ''
        });
    }

    return (
        <div className="admin-section">
            <div className="container">
                <div className="admin-product">
                    <div className="admin-product__title">
                        <span>Добавление товара</span>
                        <h5>Для главной страницы</h5>
                        <div className="admin-product__item">
                            <input type="text" className="admin-item-title"
                                value={item.title}
                                placeholder="Название яхты"
                                name="title"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-item-year"
                                placeholder="Год выпуска"
                                value={item.year}
                                name="year"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-item-price"
                                value={item.price}
                                placeholder="Цена"
                                name="price"
                                onChange={getInpValue}
                            />
                            <input type="text" className="item-img"
                                value={item.image}
                                placeholder="Изображение"
                                name="image"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-speed"
                                value={item.speed}
                                placeholder="Скорость"
                                name="speed"
                                onChange={getInpValue}
                            />


                            <div className="admin-product__item-details">
                                <p>Для деталей</p>
                                <input type="text" className="img-detail"
                                    value={item.imageDetail}
                                    placeholder="Изображение для details"
                                    name="imageDetail"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="admin-detail-length"
                                    value={item.detailLength}
                                    placeholder="Длина яхты"
                                    name="detailLength"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="admin-detail-guest"
                                    value={item.detailGuest}
                                    placeholder="Кол-во гостевых кабин"
                                    name="detailGuest"
                                    onChange={getInpValue}
                                />
                            </div>
                            <div className="select-inputs">
                                <span>новинка?</span>
                                <select className="new-item"
                                    name="latest"
                                    value={item.latest}
                                    onChange={getInpValue}
                                >
                                    <option>---</option>
                                    <option value="yes">Да</option>
                                </select>
                                <input type="text" className="img-latest"
                                    value={item.imageLatest}
                                    placeholder="Изображение для новинок"
                                    name="imageLatest"
                                    onChange={getInpValue}
                                />
                            </div>
                            <div className="add-product__btn"
                                onClick={addProduct}
                            >Добавить
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="product-section">
                <div className="container">
                    <div className="product-section__inner">
                        {products.map(item => (
                            <div key={item.id} className="product-section__item">
                                <div className="item-image">
                                    <img src={item.image} alt="" width="100%" height="auto" />
                                </div>
                                <div className="item-description">
                                    <div className="item-title">{item.title}</div>
                                    <div className="item-year">Year: {item.year}</div>
                                    <div className="item-speed">Max speed: {item.speed}</div>
                                    <div className="item-price">{item.price} €</div>
                                    <div className="item-details">More Info</div>
                                </div>
                                <div className="item-end">
                                    <div
                                        onClick={() => {
                                            openEditFormModal()
                                            getEditId(item.id)
                                        }} 
                                        className="item-cart"
                                        >Edit</div>
                                    <div 
                                        onClick={() => deleteProduct(item.id)}
                                        className="item-wishlist"
                                    >Delete</div>
                                </div>
                                {editModalFormStatus ? <ModalForEdtit /> : null }
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;