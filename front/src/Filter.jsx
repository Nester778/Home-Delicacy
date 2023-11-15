import React, { useState, useEffect } from 'react'
import './Filter.css'


export default function Filter({ value, onFilter }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/")
            .then(res => res.json())
            .then(
                (result) => {
                    setData(result);
                },
                (error) => {

                }
            )
    }, []);

    const typeCounts = {};
    if (data !== null) {
        typeCounts[''] = data.length;
        data.forEach(item => {
            if (typeCounts[item.typeDish]) {
                typeCounts[item.typeDish] += 1;
            } else {
                typeCounts[item.typeDish] = 1;
            }
        });
    }
    const items = ["Все", "Первое", "Второе", "Салаты", "Закуски", "Выпечка", "Десерты", "Мясо", "Рыба", "Консерация", "Напитки",];
    const types = ['', 'FIRST_MEAL', 'MAIN_DISHES', 'SALAD', 'SNACKS', 'BAKERY', 'DESSERT', 'MEAT', 'FISH', 'CANNED', 'DRINKS'];
    const itemsList = [];
    for (let i = 0; i < items.length; i++) {
        let style = i === value ? "color-active p-2" : "filter-btn p-2";
        itemsList.push(
            <div onClick={() => onFilter(i, types[i])} className={style}>
                <p className="filter-item m-0">{items[i]}</p>
                <p className="filter-item text m-0">{!isNaN(typeCounts[types[i]]) ? typeCounts[types[i]] : 0}</p>
            </div>
        );
    }
    return (
        <div>
            {itemsList}
        </div>
    )
}