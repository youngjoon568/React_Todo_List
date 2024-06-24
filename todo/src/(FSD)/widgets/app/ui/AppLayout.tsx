import React from "react";
import styled from "styled-components";

const AppLayoutStyle = styled.div`
width: 100%;
height: 100%;
background: #f4f4f4;
`;

const LayoutInnerStyle = styled.div`
width: 512px;
height: 760px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background: #fff;
border-radius: 30px;
box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 8px 0px;
`;

const InnerContainer = styled.div`
width: 100%;
height: 100%;
position: relative;
`;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppLayoutStyle>
            <LayoutInnerStyle>
                <InnerContainer>
                    {children}
                </InnerContainer>
            </LayoutInnerStyle>
        </AppLayoutStyle>
    );
};

export default AppLayout;