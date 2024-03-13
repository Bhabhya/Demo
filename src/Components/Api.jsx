import  { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Api = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
            })
    }, []);


    return (
        <Section>
            <div className="container-fluid">
                <div className='heading text-center'>
                    <h1>Products</h1>
                </div>
                <div className='row'>
                    {data.map((item, index) => (

                        <div key={index} className='col-md-3'>
                            <div className='images'>
                                <img src={item.image} alt={item.title} />


                            </div>

                            <div className='title d-flex'>

                            <strong>{item.title}</strong>
                            <h6>${item.price}</h6>
                        
                            </div>
                           
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Api;

const Section = styled.div`

.heading{
    color: purple;
    margin-bottom: 40px;
    text-decoration: underline;
}

.images {
    display: flex;
    gap: 15px;
    justify-content: center;
    border: 1px solid black;
    margin-bottom: 20px;
    //background-color: pink;//
}

.images img {
    width: 200px;
    height: 200px;
    align-items: center;
    padding: 10px;
}

.title{
    margin-bottom: 30px;
    gap: 80px;
}

`;
