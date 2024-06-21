import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchFeedback();
    }, [])

    //Fetch feedback array
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await response.json();
        setTimeout(() => {
            setFeedback(data);
            setIsLoading(false);
        }, 2000)
    }

    const [feedbackEdit, setFeedbackEdit] = useState(
        {
            item: {},
            edit: false
        }
    )

    const addFeedback = async (newFeedback) => {
        const response = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });
        const data = await response.json();
        setFeedback([data, ...feedback]);
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
        isLoading,
        feedbackEdit,
        deleteFeedback,
        addFeedback, 
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;