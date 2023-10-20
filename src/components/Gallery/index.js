import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './GalleryStyle'
import GalleryCard from '../Cards/GalleryCards'
import { gallery } from '../../data/constants'


const Gallery = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
//   return (
//     <Container id="gallery">
//       <Wrapper>
//         <Title>Gallery</Title>
//         <Desc>
//         Explore cherished moments captured in pixels within our personal photo gallery – where memories come to life through the lens.
//         </Desc>
       
//         <CardContainer>
//           {toggle === 'all' && gallery
//             .map((gallery) => (
//               <ProjectCard gallery={gallery} openModal={openModal} setOpenModal={setOpenModal}/>
//             ))}
          
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   )
// }


return (
  <Container id="gallery">
    <Wrapper>
      <Title>Gallery</Title>
      <Desc>
      Explore cherished moments captured in pixels within our personal photo gallery – where memories come to life through the lens.
      </Desc>
      {/* <ToggleButtonGroup >
        {toggle === 'all' ?
          <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          :
          <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
        }
        <Divider />
         {toggle === 'Thesis' ?
          <ToggleButton active value="Thesis" onClick={() => setToggle('Thesis')}>Thesis</ToggleButton>
          :
          <ToggleButton value="Thesis" onClick={() => setToggle('Thesis')}>Thesis</ToggleButton>
        }
        <Divider />
        {toggle === 'Security' ?
          <ToggleButton active value="Security" onClick={() => setToggle('Security')}>Security'S</ToggleButton>
          :
          <ToggleButton value="Security" onClick={() => setToggle('Security')}>Security'S</ToggleButton>
        }
        <Divider />
        {toggle === 'Remote Control' ?
          <ToggleButton active value="Remote Control" onClick={() => setToggle('Remote Control')}>Remote Control'S</ToggleButton>
          :
          <ToggleButton value="Remote Control" onClick={() => setToggle('Remote Control')}>Remote Control'S</ToggleButton>
        }
         
        <Divider />
        {toggle === 'Arduino' ?
          <ToggleButton active value="Arduino" onClick={() => setToggle('Arduino')}>Arduino</ToggleButton>
          :
          <ToggleButton value="Arduino" onClick={() => setToggle('Arduino')}>Arduino</ToggleButton>
        }
      </ToggleButtonGroup> */}
      <CardContainer>
        {toggle === 'all' && gallery
          .map((gallery) => (
            <GalleryCard gallery={gallery} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
        {gallery
          .filter((item) => item.category == toggle)
          .map((gallery) => (
            <GalleryCard gallery={gallery} openModal={openModal} setOpenModal={setOpenModal}/>
          ))}
      </CardContainer>
    </Wrapper>
  </Container>
)
}

export default Gallery