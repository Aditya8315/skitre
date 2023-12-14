import React, { useState } from 'react';
import { ChakraProvider, CSSReset, Button, VStack } from '@chakra-ui/react';
import ModalComponent from './ModalComponent';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <VStack p="4">
        <Button colorScheme="teal" onClick={openModal}>
          Open Modal
        </Button>
        <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
