<StandardHead />
<Logo />
<Menu />
<PageTitle height="100vh">
    <Title>DANNY WRAY</Title>
    <SubTitle pl={1}>SOFTWARE DEVELOPER</SubTitle>
</PageTitle>
<Footer>
    <Padding>
            <Box mb={220}>
            <VBar>
                <Title>Who am I?</Title>
            </VBar>
            <Text lineHeight={2} fontSize={20} fontFamily="Montserrat, sans serif" mb={10}>
            I'm Danny, a physics graduate from the university of Nottingham. I currently work in front end web development and in general just love writing code.
            </Text>
            <LinkButton href="/about">More about me</LinkButton>
            </Box>
        <Box mb={220}>
            <VBar>
                <Title>Building a Blog</Title>
            </VBar>
            <Text lineHeight={2} fontSize={20} fontFamily="Montserrat, sans serif" mb={10}>
This site has been through many iterations. It started out as a custom webserver running on an old laptop under my bed, and slowly evolved into this site here. My original goal was to host a website for as cheap as possible, so an old laptop wasn't a bad idea, but today it runs on AWS.
<br/>
To read more about this site and how it works, checkout the code on github.
</Text>

<LinkButton href={constants.Links.GithubSiteRepo}>See the code</LinkButton>
</Box>
<Box mb={100}>
<VBar>

<Title>Physics Notes</Title>
</VBar>
<Text lineHeight={2} fontSize={20} fontFamily="Montserrat, sans serif" mb={10}>
While at University I started typesetting my lecture notes as a revision tool. They're not great and they're not finished, but hopefully they'll be useful to someone somewhere. I've started off writing up my notes on quantum mechanics and once finished will start writing up on other areas of physics.
</Text>
<LinkButton href="/physics">Read More</LinkButton>
</Box>
</Padding>

</Footer>
