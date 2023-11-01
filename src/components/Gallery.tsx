import { data } from '../../data';
import Card from './Card';
const img1 = data.find(d => d.id == '11');
const rest=data.filter(d=>parseInt(d.id)!=1);
const first = data.filter(d => parseInt(d.id) > 1 && parseInt(d.id) < 5);
const second = data.filter(d => parseInt(d.id) > 4 && parseInt(d.id) < 8);
const last = data.filter(d => parseInt(d.id) > 7);
function Gallery() {
    return (
        <div className="grid ">
            <div className="grid grid-cols-5 grid-rows-3">
                <div className="col-span-2 row-span-2">
                    <Card type='large' src={img1?.image}/>
                </div>
                {
                    rest.map(d=>(
                        <Card src={d.image}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Gallery;