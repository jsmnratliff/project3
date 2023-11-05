import moment from 'moment';
import './JournalEntry.css';

const JournalEntry = ({ list }) => {
    const journalsDisplay = list.map((journal, index) => {
        if (index > 7) {
            return;
        }
        const tags = journal.tags.map(tag => {
            return <li className='tag-item' key={`${index}-${tag}`}>
                {tag}
            </li>
        })

        const date = moment(journal.created).format('MMMM Do YYYY');
        return (
            <div className="journal-entry">
            <h2 className="journal-entry_title">{journal.title}</h2>
            <h3 className="journal-entry_date">Create: {date}</h3>
            <div>
                Tags:
                <ul className="journal-entry_tags">{tags}</ul>
              </div>
              <p className="journal-entry_body">{journal.body.substr(0,200) + '...'}...</p>
            </div>
        )
    })

    return journalsDisplay;

}

export default JournalEntry;