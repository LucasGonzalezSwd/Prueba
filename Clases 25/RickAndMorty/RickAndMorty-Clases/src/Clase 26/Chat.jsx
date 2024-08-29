import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Chat = () => {
    const [inputQuestion, setInputQuestion] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (inputQuestion.trim() === '') {
            alert('Ingresa una pregunta antes de enviarla.');
            return;
        }

        setLoading(true);

        try {
            const respuesta = await enviarPregunta(inputQuestion);
            setMessages([
                ...messages,
                { type: 'user', text: inputQuestion },
                { type: 'bot', text: respuesta }
            ]);
        } catch (error) {
            console.error('Error al enviar la pregunta:', error);
        } finally {
            setLoading(false);
            setInputQuestion('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();
        }
    };

    const handleQuestionChange = (event) => {
        setInputQuestion(event.target.value);
       // Ajustar altura
    };
    
  
    return (
        <div className="cointainerChat">
            <div className="row">
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {loading && (
                        <span id="barra">
                            ......
                        </span>
                    )}
                </div>
                <div className="container">
                    <div id="chat-container" className="textarea">
                        {messages.map((msg, index) => (
                            <p key={index} className='respuesta'>
                                <strong>{msg.type === 'user' ? '😎Tu:' : '🤖Respuesta:'}</strong> <span className='respuesta2'>{msg.text}</span> 
                            </p>
                        ))}
                    </div>
                    <div className="input">
                        <textarea
                        id="input-question"
                        className="form-control"
                        placeholder="Realiza una pregunta"
                        value={inputQuestion}
                        onChange={handleQuestionChange}
                        
                        onKeyPress={handleKeyPress}
                        />
                       <div className='centrarButton'>
                       <button id="submit-button" className="submitbutton" onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                       </div>
                        
                    </div>
                </div>
            </div>

            <Link to="/"><button>Ir a ApiWeather</button></Link>
            <Link to="/post"> <button>Ir a JsonPlaceHolder</button></Link>
        </div>
    );
};

async function enviarPregunta(pregunta) {
    const apiKey = "Tu Api Key, recordar configurar metodo de pago para que funcione";
    
    const temasPermitidos = ['economía', 'cripto', 'criptomonedas', 'finanzas', 'banca', 'mercado', 'bitcoin', 'blockchain', 'crypto', 'ethereum', 'inversiones', 'inversion','bolsa de valores', 'fondos de inversion', 'economia mundial', 'precio maximo'];
  
    const esRelacionadoAEconomia = temasPermitidos.some(tema => pregunta.toLowerCase().includes(tema));
  
    if (!esRelacionadoAEconomia) {
        return 'Buenas tardes, solo contesto temas relacionados a economía centralizada y descentralizada.';
    }
  
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',  
                messages: [
                    { role: 'system', content: 'Actúa como un experto en economía y criptomonedas.' },
                    { role: 'user', content: pregunta }
                ],
            }),
        });
  
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            return data.choices[0].message.content;
        } else {
            throw new Error('No se pudo obtener la respuesta del modelo.');
        }
    } catch (error) {
        console.error('Error al enviar la pregunta:', error);
        return 'Error en la solicitud.';
    }
  }
  
  




export default Chat;
