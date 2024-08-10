import { Flex, Avatar, Text, Image, Box, Divider, Button } from "@chakra-ui/react";
import { BsThreads } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comment from "../components/Comment";
const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markkzuckerberg
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}> 1d</Text>
          <BsThreads />
        </Flex>
      </Flex>
      <Text my={3}>Let's talk about threads</Text>
      <Box borderRadius={6} overflow={"hidden"} border={"1px solid "} borderColor={"gray.light"}>
        <Image src={"/post1.png"} w={"full"} />

      </Box>
      <Flex>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"} >
          234 replies
        </Text>

        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}>  </Box>
        <Text color={"gray.light"} fontSize={"sm"} >
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>🖐️</Text>
          <Text color={"gray.light"}>Get the app to line reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment comment="Looks really good" createAt="2d" likes={361} username="johndeo" userAvatar="https://bit.ly/code-beast" />
      <Comment comment="Hey this is great!" createAt="1d" likes={46} username="sallydoe" userAvatar="https://bit.ly/sage-adebayo" />
      <Comment comment="nice" createAt="3d" likes={87} username='Ryan Florence' userAvatar="https://bit.ly/ryan-florence" />
    </>
  )
}

export default PostPage