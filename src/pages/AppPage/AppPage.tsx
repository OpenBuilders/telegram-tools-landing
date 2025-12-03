import { TOOLS } from '@common';
import { Block, Button, Icon, Image, List, ListItem, PageLayout, Text } from '@components';
import { IconTypeName } from 'src/components/Icon/types';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useClipboard } from '@hooks';
import styles from './AppPage.module.scss';

export const AppPage = () => {
  const params = useParams();
  const toolId = params.id;
  const [appData, setAppData] = useState<(typeof TOOLS)[0] | null>(null);
  const navigate = useNavigate();

  const { copy } = useClipboard();

  useEffect(() => {
    const tool = TOOLS.find((tool) => tool.id === Number(toolId));
    if (!tool?.isActive || !tool?.link) {
      navigate('/');
      return;
    }
    setAppData(tool || null);
  }, [toolId, navigate]);

  if (!appData) return null;

  const handleOpenLink = (link?: string | null) => {
    if (!link) return;

    window.open(link, '_blank');
  };

  const handleCopy = () => {
    if (!appData.link) return;

    copy(appData.link, 'Link copied!');
  };

  return (
    <PageLayout center maxWidth={500} margin="32px auto">
      {(appData.icon && <Icon name={appData.icon as IconTypeName} size={112} />) ||
        (appData.image && <Image src={appData.image} size={112} borderRadius={16} />)}
      <Block margin="top" marginValue={16}>
        <Text type="title" align="center" weight="bold" color="primary">
          {appData.name}
        </Text>
      </Block>
      <Block margin="top" marginValue={12}>
        <Text type="text" align="center" color="primary">
          {appData.description}
        </Text>
      </Block>
      <Block margin="top" marginValue={8} onClick={handleCopy}>
        <Text type="text" align="center" color="tertiary" pointer>
          @{appData.botName}
        </Text>
      </Block>
      <Block
        margin="top"
        marginValue={24}
        className={styles.links}
        justify="between"
        align="center"
        gap={10}
      >
        <div style={{ flex: 1 }}>
          <Button type="primary" onClick={() => handleOpenLink(appData.link)}>
            Open App
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Block justify="between" align="center" gap={10} row>
            {appData.github &&
              appData.github.map((link) => {
                return (
                  <div style={{ flex: 1 }}>
                    <Button
                      type="accent"
                      onClick={() => handleOpenLink(link.link)}
                      prefix={<Icon name="github" size={24} />}
                    >
                      {link.name}
                    </Button>
                  </div>
                );
              })}
          </Block>
        </div>
      </Block>
      {appData.contributors && (
        <Block margin="top" marginValue={24}>
          <List separatorLeftGap={40} header="Contributors">
            {appData.contributors.map((contributor) => {
              const isActive = !!contributor.link;
              return (
                <ListItem
                  noPointer={!isActive}
                  key={contributor.name}
                  text={<Text type="text">{contributor.name}</Text>}
                  before={
                    contributor.image && (
                      <Image borderRadius={50} src={contributor.image} size={40} />
                    )
                  }
                  description={
                    <Text type="caption2" color="tertiary">
                      {contributor.role}
                    </Text>
                  }
                  onClick={() => handleOpenLink(contributor.link)}
                  chevron={isActive}
                />
              );
            })}
          </List>
        </Block>
      )}
      {appData.extraLinks && (
        <Block margin="top" marginValue={24}>
          <List>
            {appData.extraLinks.map((link) => {
              return (
                <ListItem
                  key={link.name}
                  text={<Text type="text">{link.name}</Text>}
                  onClick={() => handleOpenLink(link.link)}
                  chevron
                />
              );
            })}
          </List>
        </Block>
      )}
    </PageLayout>
  );
};
