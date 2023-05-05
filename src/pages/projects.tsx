import {Badge, Button, Card, Center, Group, Image, Text} from "@mantine/core";
import Link from "next/link";

const projects = () =>{
    return(
        <>
            <Center>
                <Card shadow="sm" padding="lg" radius="md" withBorder w={360}>
                    <Card.Section>
                        <Image
                            src="/modules.png"
                            height={180}
                            width={360}
                            alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>Modular 3D Progress Bar</Text>
                    </Group>
                    <Text size="sm" color="dimmed">
                        This plug-in is designed to help you create stunning progress bars for your games and applications.
                        With its modular design, you can easily customize the progress bar to fit your needs.
                    </Text>
                    <Link href='/modular-bar'  style={{textDecoration: 'none'}}>
                        <Button variant="outline" color="white.3" fullWidth mt="md" radius="md">
                            Explore
                        </Button>
                    </Link>
                </Card>
            </Center>
        </>
    );
}

export default projects;
