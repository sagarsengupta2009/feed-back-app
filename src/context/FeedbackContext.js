import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //To update existing edited feedback
    const updateFeedback = (id, updatedItem) => {
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updatedItem} : item));
    }

    const deleteFeedback = (id) => {
        if (window.confirm("Areyou sure you want to delete?")) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback, 
        editFeedback,
        updateFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;