import Card from "./card"


export default function CardLine(prop) {
    const recips = prop.recips;
    const itemsList = [];

    for (let i = 0; i < recips.length; i += 3) {
        const item = [];
        if (recips.length - i > 1) {
            item.push(recips[i]);
            item.push(recips[i + 1]);
            item.push(recips[i + 2]);
        }
        else {
            for (let j = 0; j < recips.length - i; j++)
                item.push(recips[j]);
        }
        itemsList.push(item);
    }


    return (
        <div className="container py-3">

            <div className="row">
                {recips.map((recipe) => (
                    <Card recip={recipe} />
                ))}
            </div>
        </div>
    )
}