import { Wrapper } from "@graphcms/app-sdk-react";
import { Heading, Stack, Text } from "@hygraph/baukasten";

function PageElement() {
    const width = "99vw";
    const height = "95vh";
    return (
        <iframe
            name="chatseo"
            src="https://app.iana.ai/en-US/chatseo"
            width={width}
            height={height}
            style={{
                display: "block",
                overflow: "hidden",
                width: width,
                height: height,
            }}
            frameBorder="0"
            allow="clipboard-read; clipboard-write"
        ></iframe>
    );
}

export default function Page() {
    return (
        <Wrapper>
            <PageElement />
        </Wrapper>
    );
}
