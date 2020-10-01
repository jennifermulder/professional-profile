import React, { useState } from 'react';
// import Modal from '../Modal';

const Project = ({ category }) => {

  const [projects] = useState([
    {
      name: 'Grocery aisle',
      category: 'portfolio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    //pass image and i in as props, update the current photo state
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  // pass current photo into prop
  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;