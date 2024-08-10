
import { BsInstagram } from 'react-icons/bs';
import { CgMore } from 'react-icons/cg';
import { Box, VStack, Flex, Text, Link, Avatar, Menu, MenuButton, MenuList, MenuItem, Portal, useToast } from '@chakra-ui/react'

const UserHeader = () => {
    const toast = useToast();
    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: 'Copied Link.',
                description: "Profile link Copied.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        });
    }
    return (
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={'2xl'} fontWeight={"bold"}> mark </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"}> markkzuckerberg</Text>
                        <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
                            threads.net
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar name="Mark ZuckerBerg" src='/zuck-avatar.png' size={{
                        base:'md',
                        md:"xl"
                    }} />
                </Box>
            </Flex>
            <Text>Co-founder executive chariran and CEO of Meta platforms.

            </Text>
            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}> 3.2k followers</Text>
                    <Box w={1} bg={"gray.light"} borderRadius={"full"} ></Box>
                    <Link color={"gray.light"}> instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className='icon-container'>
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>
                    <Box className='icon-container'>
                        <Menu>
                            <MenuButton>
                                <CgMore size={24} cursor={"pointer"} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gray.dark"}>
                                    <MenuItem bg={"gray.dark"} onClick={copyURL}>
                                        Copy Link
                                    </MenuItem>
                                </MenuList>
                            </Portal>

                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={"full"}>
                <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb={3} cursor={"pointer"}>
                    <Text fontWeight={"bold"}> Threads</Text>
                </Flex>
                <Flex flex={1} borderBottom={"1px solud gray"} justifyContent={"center"} color={"gray.light"} pb={3} cursor={'pointer'}>
                    <Text fontWeight={"bold"}> Replies</Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default UserHeader