import styled from 'styled-components';
import _default from '../../themes/default';


export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    //clip-path: polygon(0 0, 40% 0, 10% 50%, 80% 48%, 0 40%);

`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
   // max-height: 900px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 350px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 2px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 2px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 12px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 2px;
        font-size: 12px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


// export const CardContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     gap: 1px;
//     flex-wrap: wrap;
//     // display: grid;
//     // grid-template-columns: repeat(3, 1fr);
//     // grid-gap: 32px;
//     // grid-auto-rows: minmax(100px, auto);
//     // @media (max-width: 960px) {
//     //     grid-template-columns: repeat(2, 1fr);
//     // }
//     // @media (max-width: 640px) {
//     //     grid-template-columns: repeat(1, 1fr);
//     // }


//     /* Adjust the max-height and padding to make the cards smaller */
//     max-height: 200px; /* Adjust the maximum height as per your requirement */
//     padding: 12px; /* Adjust the padding as per your requirement */

//     /* Add background, border, border-radius, etc. if needed */
//     /* background-color: #ffffff; */
//     /* border: 1px solid #dddddd; */
//     /* border-radius: 8px; */

//     @media (max-width: 960px) {
//         /* Responsive styles for smaller screens if needed */
//         /* For example, you can adjust max-height and padding for smaller screens */
//         max-height: 150px;
//         padding: 8px;
//     }
    

// `;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1px;
    flex-wrap: wrap;
    padding: 12px; /* Adjust the padding as per your requirement */
    padding-bottom: 12px; /* Adjust the bottom padding to reduce empty space */

    /* Additional styles such as background, border, border-radius, etc. if needed */
    /* background-color: #ffffff; */
    /* border: 1px solid #dddddd; */
    /* border-radius: 8px; */

    /* Responsive design for smaller screens */
    @media (max-width: 768px) {
        padding-bottom: 6px; /* Adjust the bottom padding for smaller screens */
    }
`;



