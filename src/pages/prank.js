import { useRef, useState } from "react";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { Heading, Box, Text, BorderBox, YellowButton } from "@components/core";
import { MetaTags } from "@components/Head";

const meta = {
  title: "Notification Prank",
  abstract: "Prank people by playing random notification noises from this tab",
  route: "/prank",
};

const tabStyles = [
  {
    name: "Default",
    title: "Notification Prank",
    favicon: "/favicon.ico",
  },
  {
    name: "Google",
    title: "Google",
    favicon: "https://google.com/favicon.ico",
  },
  {
    name: "Gmail",
    title: "Inbox",
    favicon: "https://mail.google.com/favicon.ico",
  },
  {
    name: "Outlook",
    title: "Outlook",
    favicon: "https://outlook.live.com/favicon.ico",
  },
  {
    name: "Microsoft Teams",
    title: "Teams",
    favicon: "https://teamsdemo.office.com/favicon.ico",
  },
  {
    name: "Stack Overflow",
    title: "Stack Overflow",
    favicon: "https://stackoverflow.com/favicon.ico",
  },
  {
    name: "GitHub Default",
    title: "GitHub",
    favicon: "https://github.com/favicon.ico",
  },
  {
    name: "GitHub DarkMode",
    title: "GitHub",
    favicon: "https://github.githubassets.com/favicons/favicon-dark.svg",
  },
  {
    name: "Confluence",
    title: "Confluence",
    favicon:
      "https://cdn.iconscout.com/icon/free/png-256/free-confluence-3521361-2944805.png",
  },
];

const sounds = [
  { name: "Teams", sound: "/sfx/teams_notification.mp3" },
  { name: "Slack", sound: "/sfx/slack_notification.mp3" },
  { name: "Mac Email", sound: "/sfx/mac_new_mail.mp3" },
];

const soundCache = {};

const Prank = () => {
  const tabStyleRef = useRef();
  const soundRef = useRef();
  const messageRef = useRef();
  const delayRef = useRef();
  const frequencyRef = useRef();

  const [currentTabStyle, setCurrentTabStyle] = useState(null);
  const [started, setStarted] = useState(false);
  const [currentSound, setCurrentSound] = useState(sounds[0].sound);
  const tabStyleChanged = () =>
    setCurrentTabStyle(tabStyles?.[tabStyleRef.current?.value]);

  const soundChanged = () =>
    setCurrentSound(sounds?.[soundRef.current?.value].sound);

  const playSound = () => {
    if (!soundCache[currentSound]) {
      soundCache[currentSound] = new Audio(currentSound);
    }
    soundCache[currentSound].play();
  };

  const start = (delay = 1, frequency = 1) => {
    setStarted(true);
    setTimeout(() => {
      playSound();
      setInterval(() => {
        playSound();
      }, frequency * 1000 * 60);
    }, delay * 1000 * 60);
  };

  return (
    <Layout>
      <MetaTags meta={meta} />
      {currentTabStyle && (
        <Head>
          <title>{currentTabStyle.title}</title>
          <link
            rel="icon"
            type="image/x-icon"
            href={currentTabStyle.favicon}
          ></link>
        </Head>
      )}
      {started ? (
        <Box>
          <Heading my={60} center>
            {messageRef.current.value}
          </Heading>
        </Box>
      ) : (
        <BorderBox bg="bg-default">
          <Box mb={40}>
            <Heading>Notification Prank</Heading>
            <Text>
              Prank your friends if they leave their laptop unlocked. Simply
              disguise this tab amongst their others and click start. A
              notification sound of your choosing will play at the given
              interval and drive them insane.
            </Text>
          </Box>
          <Box mb={30}>
            <Heading>Tab Style</Heading>
            <select onChange={tabStyleChanged} ref={tabStyleRef}>
              {tabStyles.map((tabStyle, index) => (
                <option key={`TabStyleOption${tabStyle.name}`} value={index}>
                  {tabStyle.name}
                </option>
              ))}
            </select>
          </Box>
          <Box mb={30}>
            <Heading>Sound Effect</Heading>
            <select onChange={soundChanged} ref={soundRef}>
              {sounds.map((sound, index) => (
                <option key={`soundOption${sound.name}`} value={index}>
                  {sound.name}
                </option>
              ))}
            </select>
            <YellowButton
              ml={20}
              _css={{ display: "inline" }}
              onClick={playSound}
            >
              Test
            </YellowButton>
          </Box>
          <Box mb={30}>
            <Heading>Timing</Heading>
            <Text>Delay (minutes)</Text>
            <input type="number" defaultValue="2" ref={delayRef} />
            <Text>Frequency (seconds)</Text>
            <input type="number" defaultValue="30" ref={frequencyRef} />
          </Box>
          <Box mb={30}>
            <Heading>Message</Heading>
            <textarea ref={messageRef} defaultValue="You've been pranked!" />
          </Box>
          <YellowButton
            onClick={() =>
              start(delayRef.current.value, frequencyRef.current.value)
            }
          >
            Start
          </YellowButton>
        </BorderBox>
      )}
    </Layout>
  );
};

export default Prank;
