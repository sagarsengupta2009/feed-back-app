import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {    
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit?.edit) {
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
            setBtnDisabled(false);
        }
    }, [feedbackEdit])
    
    const handleTextChange = (event) => {
        setText(event.target.value);
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters.');
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }            
            setText('');
            setBtnDisabled(true);
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            {/* @todo - rating select component */}
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input 
                    type="text" 
                    onChange={handleTextChange}
                    value={text} 
                    placeholder='Write a review'/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
