import { useApp, Wrapper } from "@graphcms/app-sdk-react";
import { Box, Button, Text, Heading, Stack } from "@hygraph/baukasten";

function SetupElement() {
    return <Install />;
}

function Install() {
    const { updateInstallation, installation } = useApp();
    const buttonLabel =
        installation.status === "COMPLETED" ? "Update" : "Install";
    return (
        <Stack gap="12">
            <Box>
                <Heading>ChatSEO by iana.ai</Heading>
                <Text>
                    ChatSEO is a revolutionary AI chatbot assistant for SEO and
                    digital marketing.
                </Text>
                <Button
                    onClick={() =>
                        updateInstallation({ status: "COMPLETED", config: {} })
                    }
                >
                    {buttonLabel}
                </Button>
            </Box>
        </Stack>
    );
}

export default function Setup() {
    return (
        <Wrapper>
            <SetupElement />
        </Wrapper>
    );
}
