import Link from 'next/link';
import React from 'react';
import Styled from 'styled-components';
const Wrapper = Styled.div`
	color: green;
`;

function Home(): React.ReactElement {
  return (
    <Wrapper>
      오투넥스트 하gggg<Link href="/about">소개</Link>
    </Wrapper>
  );
}

export default Home;
