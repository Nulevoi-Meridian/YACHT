import React, { useContext, useState, useEffect } from 'react';
import { productsContext } from '../../../contexts/ProductsContext';
import './ModalForEdtit.css';

const ModalForEdtit = () => {
    const { editProduct, editedProductData } = useContext(productsContext);
    const [editedProduct, setEditedProduct] = useState(editProduct);

    console.log(editedProduct)

    useEffect(() => {
        setEditedProduct(editProduct);
    }, [editProduct]);

    const getInpValue = (e) => {
        const newValue = {
            ...editedProduct,
            [e.target.name]: e.target.value
        }
        setEditedProduct(newValue);
    }


    return (
        <div className="edit-modal">
            <div className="admin-product">
                    <div className="admin-product__title">
                        <span>Редактирование товара</span>
                        <div className="admin-product__item">
                            <input type="text" className="admin-item-title"
                                value={editedProduct?.title || ''}
                                   name="title"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-item-year"
                                 value={editedProduct?.year || ''}
                                name="year"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-item-price"
                                value={editedProduct?.price || ''}
                          name="price"
                                onChange={getInpValue}
                            />
                            <input type="text" className="item-img"
                                value={editedProduct?.image || ''}
                                 name="image"
                                onChange={getInpValue}
                            />
                            <input type="text" className="admin-speed"
                                value={editedProduct?.speed || ''}
                              name="speed"
                                onChange={getInpValue}
                            />


                            <div className="admin-product__item-details">
                                <p>Для деталей</p>
                                <input type="text" className="img-detail"
                                    value={editedProduct?.imageDetail || ''}
                
                                       name="imageDetail"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="admin-detail-length"
                                    value={editedProduct?.detailLength || ''}
                                        name="detailLength"
                                    onChange={getInpValue}
                                />
                                <input type="text" className="admin-detail-guest"
                                    value={editedProduct?.detailGuest || ''}
                                        name="detailGuest"
                                    onChange={getInpValue}
                                />
                            </div>
                            <div className="select-inputs">
                                <span>новинка?</span>
                                <select className="new-item"
                                    name="latest"
                                    value={editedProduct?.latest || ''}
                                    onChange={getInpValue}
                                >
                                    <option>---</option>
                                    <option value="yes">Нет</option>
                                    <option value="">Нет</option>
                                    
                                </select>
                                <input type="text" className="img-latest"
                                    value={editedProduct?.imageLatest || ''}
                                    name="imageLatest"
                                    onChange={getInpValue}
                                />
                            </div>
                            <div className="add-product__btn"
                                onClick={() => {editedProductData(editedProduct)}}
                            >Сохранить
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ModalForEdtit;