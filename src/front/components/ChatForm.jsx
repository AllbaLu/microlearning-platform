import { useState } from "react";
import axios from 'axios';

export const ChatForm = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse('');


        try {
            const res = await axios.post('http://localhost:3001/api/chat', {prompt})
            setResponse(res.data.reply);
        } catch (error) {
            console.log(error, "error response");
            setResponse('Error serves response');
            
        } finally {
            setLoading(false);
        }
    };


    return(
        <section>
            <div className="container mt-4">
                <form onSubmit={handleSubmit} >
                    <div>
                        <label className="form-label"> Time to learn </label>
                        <input type="text" 
                        className="form-control"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder=" New things! "
                        />
                    </div>
                    <button className="btn btn-warning" type="submit" disabled={loading}>
                        {loading ? 'sent...' : 'send'}
                    </button>
                </form>

                { response && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">AI Response </h5>
                            <p className="card-text"> {response} </p>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ChatForm;