import useItems from '../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items,setItems]=useItems();
    const limitedItems=items.slice(0,6);

    return (
        <div>
            <h2 className='text-center text-warning fw-bold my-4'>Some Items</h2>
            <div className='items mx-2 my-4'>
            {
                limitedItems.map(item=><Item key={item._id} item={item}></Item>)
            }
            </div>
            
            
        </div>
    );
};

export default Items;