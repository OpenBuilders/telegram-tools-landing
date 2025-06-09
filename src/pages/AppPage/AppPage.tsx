import { TOOLS } from '@common';
import { Block, Button, Icon, Image, List, ListItem, PageLayout, Text } from '@components';
import { IconTypeName } from 'src/components/Icon/types';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const AppPage = () => {
  const params = useParams();
  const toolId = params.id;
  const [appData, setAppData] = useState<(typeof TOOLS)[0] | null>(null);

  useEffect(() => {
    const tool = TOOLS.find((tool) => tool.id === Number(toolId));
    setAppData(tool || null);
  }, [toolId]);

  if (!appData) return null;

  const handleOpenLink = (link?: string | null) => {
    if (!link) return;

    window.open(link, '_blank');
  };

  return (
    <PageLayout center maxWidth={500}>
      <Icon name={appData.icon as IconTypeName} size={112} />
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
      <Block margin="top" marginValue={8}>
        <Text type="text" align="center" color="tertiary">
          @{appData.botName}
        </Text>
      </Block>
      <Block margin="top" marginValue={24} row justify="between" align="center" gap={10}>
        <div style={{ flex: 1 }}>
          <Button type="primary" onClick={() => handleOpenLink(appData.link)}>
            Open App
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <Button
            type="accent"
            onClick={() => handleOpenLink(appData.github)}
            prefix={<Icon name="github" size={24} />}
          >
            Github
          </Button>
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
