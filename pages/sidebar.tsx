import { useFormSidebarExtension, Wrapper } from "@graphcms/app-sdk-react";
import { Button, Flex, Inline, Stack, TextArea } from "@hygraph/baukasten";
import { useEffect, useRef } from "react";

function SidebarElement() {
    return <Flex>Your sidebar here</Flex>;
}

export default function Sidebar() {
    return (
        <Wrapper>
            <SidebarElement />
        </Wrapper>
    );
}
