import { styled } from 'styled-components';

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play game</h2>
            <div className="text">
                <p>Select any Number</p>
                <p>Click onn dice image</p>
                <p>after click on dice if selected number is equal to dice you will get the same point as dice {" "} </p>
                <p>if you get wrong guess 2 point will be deducted</p>
            </div>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;

h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}`