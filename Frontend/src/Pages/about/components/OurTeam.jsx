import { Card, CardBody, Image, Divider, Stack, Heading, Text } from '@chakra-ui/react';

export function OurTeam({teammate}) {
    const {name, rol, imageUrl, linkedIn} = teammate;

    return (
        <>
            <Card maxW='sm' colorScheme='yellow' className='transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                <CardBody>
                    <a href={linkedIn} target='_blank' className='flex justify-center align-center m-2 p-2'>
                    <Image
                        src={imageUrl}
                        alt={`Foto de perfil de ${name}`}
                        borderRadius='full'
                        boxSize="150px"
                        align="center"
                    />
                    </a>
                    <Divider />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{name}</Heading>
                        <Text color="yellow.600">{rol}</Text>
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}