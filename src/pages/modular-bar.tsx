import {Anchor, Box, Center, Group, Stack, Text} from "@mantine/core";
import {IconDownload} from "@tabler/icons-react";

const modularBar = () =>{
    return(
        <Box pl={'5%'} pr={'5%'}>
            <div style={{height:" 75vh", backgroundColor: "#ffffff", borderRadius:'22px', width:'100%'}} >
                <Center h='100%'>
                    <embed type="text/html" src="https://modularify.github.io/ProgressBars3D/"  width="80%" height="100%"/>
                </Center>
            </div>
            <Group position="right" mt={'1%'}>
                <div>
                    <Stack spacing={0}>
                        <Text fw={700} fz={'30px'} variant="gradient" gradient={{ from: 'brand.0', to: 'brand.1', deg: 45 }}>Modular 3d Progress Bars</Text>
                        <div>

                            <Anchor href="/Modularify_ProgressBarDocumentation.pdf" target="_blank" color='white.1'>
                                <Group position="left"><IconDownload size={16}/>Modularify doc</Group>
                            </Anchor>
                        </div>
                    </Stack>
                </div>
            </Group>
        </Box>
    );
}
export default modularBar;
