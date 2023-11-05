import { useEffect } from 'react';
import JournalEntry from '../Components/JournalEntry/JournalEntry';
import { useStore } from '../StoreContext';
import "./Home.css";


const Home = () => {
const { store, setStore, isStoreUpdated, setIsStoreUpdated } = useStore();
   
const fetchData = async () => {
        const test = await fetch('/get-journals', {
            methon: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .catch(error => console.error('Error: ', error));
        setStore([{ journalsList: journals.journals }])
         console.log(journals);
    }

    useEffect(() => {
        if (isStoreUpdated) {
          fetchData();
          setIsStoreUpdated(false);
        }
    }, []);

    if (!store) {
        return <div>Waiting...</div>
    }
     
    return (
        <section className='home'>
            <div className='home_journal-container'>
                <h1 className='home_header'>Welcome to your journal Jaz</h1>
                <div className='home_jounal-list'>
                  <JournalEntry list={store[0].journalsList} />
                </div>
            </div>
        </section>

    )
}

export default Home;