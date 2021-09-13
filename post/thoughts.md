---
title: THOUGHTS
indexTag: thoughts
---

<PageTitle centerX centerY>
    <Title>{title}</Title>
</PageTitle>

<BasicLayout>
    <SplitCard>
        <>
            <SplitCardText>1st Jan 2000</SplitCardText>
            <SplitCardTitle>Test featured post: cat pics</SplitCardTitle>
            <SplitCardText>
              Here you can see a picture of a cat, its very cute. Trying to fill
              this section with some placeholder text . Don't really know what
              to write, really enjoyed the marvel film i saw recently.
            </SplitCardText>
        </>
        <Image maxH={600} src="https://image.freepik.com/free-photo/cute-kitten-bed_1303-9321.jpg"/>
    </SplitCard>
    <SubTitle mb={70}>Latest</SubTitle>
    <PostList mb={100} posts={metaList} />
    <Center flexDir="column">
        <Description mb={30}>Still looking for something?</Description>
        <Button mb={30}>See all thoughts</Button>
    </Center>
</BasicLayout>
