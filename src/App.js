import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  
    axios.get('https://localhost:7051/WeatherForecast')
                        .then(function(response){
                          console.log(response.data);
                        }
                      );
                        return (
                            <>
                            <div>Test</div>
                            </>    
                        );


}

export default App;
