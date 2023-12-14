import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Progress,
    HStack,
    Text,
    VStack,
    Button,
    Menu,
    MenuButton,

    Collapse
} from '@chakra-ui/react';
import { ChevronDownIcon, CheckIcon } from '@chakra-ui/icons'



const ModalComponent = ({ isOpen, onClose }) => {
    const [isOpenCollapse, setIsOpenCollapse] = useState([]);

    const toggleCollapse = (index) => {
        setIsOpenCollapse((prev) => {
            const updatedState = [...prev];
            updatedState[index] = !updatedState[index];
            return updatedState;
        });
    };
    const itemsData = [
        {
            title: 'Create an Account',
            progress:0,
        },
        {
            title: 'Download Loom',
            collapseText: 'Install the chrome Extension to record from your browser and to unlock integrations like Gmail and Jira. ',
            borderedText: 'Install Chrome Extension',
            progress:20,

        },
        {
            title: 'Record a Video',
            collapseText: 'Record a Short Video to share with your teammates. Try Introducing yourself or replacing a meeting',
            borderedText: 'Start recording',
            progress:40,
        },
        {
            title: 'Share Your Video',
            collapseText: 'Now its time to get some videos. Try sharing your last video',
            borderedText: 'Copy last video link',
            progress:60,
        },
        {
            title: 'Get a View',
            collapseText: 'Slack,message or email your viewers to remind them about your Loom',
            borderedText: 'Understand Video engagement',
            progress:80,
        },
        {
            title: 'Invite a Teammate',
            collapseText: 'Invite your team to collaborate and share videos more easily',
            borderedText: 'Invite Teammates',
            progress:100,
        }

    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Getting Started Checklist</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Progress value={60}size="xs" mb="4" />
                    <VStack align="start" spacing="4" w="100%">
                        {itemsData.map((item, index) => (
                            <VStack key={index} w="100%" spacing="0">
                                
                                <HStack
                                    justifyContent="space-between"
                                    w="100%"
                                >
                                    <HStack>
                                        <CheckIcon boxSize={5} color="green.500" />
                                        <Text fontSize="lg">
                                            {item.title}
                                        </Text>
                                    </HStack>
                                    {item.collapseText && (
                                        <Menu>
                                            <MenuButton
                                                as={Button}
                                                rightIcon={<ChevronDownIcon />}
                                                variant="ghost"
                                                onClick={() => toggleCollapse(index)}
                                                cursor="pointer"
                                            />
                                        </Menu>
                                    )}
                                </HStack>
                                <Collapse in={isOpenCollapse[index]} animateOpacity>
                                    <Text w="100%" py="2">
                                    {item.collapseText}
                                    </Text>
                                    {item.borderedText && (
                                        <Text border="2px solid" borderRadius="30px" p="2" mt="2" w="auto"display="inline-block">
                                            {item.borderedText}
                                        </Text>
                                    )}

                                </Collapse>

                            </VStack>
                        ))}
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

    );
};

export default ModalComponent;
