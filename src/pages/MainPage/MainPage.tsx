import { TOOLS } from '@common';
import { Block, Icon, Image, List, ListItem, PageLayout, Text } from '@components';
import { IconTypeName } from 'src/components/Icon/types';
import logoImage from '@assets/images/main.png';

export const MainPage = () => {
  const handleNavigate = (link: string | null) => {
    if (!link) return;

    window.open(link, '_blank');
  };

  return (
    <PageLayout center maxWidth={500}>
      <Image size={112} src={logoImage} />
      <Block margin="top" marginValue={16}>
        <Text type="title" align="center" weight="bold" color="primary">
          Telegram Tools
        </Text>
      </Block>
      <Block margin="top" marginValue={12}>
        <Text type="text" align="center" color="primary">
          Open-source tools for Telegram. Created by independent developers for the community.
        </Text>
      </Block>
      <Block margin="top" marginValue={32}>
        <List header="Available Products" separatorLeftGap={40}>
          {TOOLS.map((tool) => {
            const isActive = !!tool.link;
            return (
              <ListItem
                noPointer={!isActive}
                key={tool.id}
                text={
                  <Text type="text" weight="medium">
                    {tool.name}
                  </Text>
                }
                description={
                  <Text type="caption2" color="tertiary">
                    {tool.description}
                  </Text>
                }
                label={isActive ? undefined : 'soon'}
                before={tool.icon && <Icon name={tool.icon as IconTypeName} size={44} />}
                onClick={() => handleNavigate(tool?.link)}
                chevron={isActive}
              />
            );
          })}
        </List>
      </Block>
      <Block fixed="bottom" margin="bottom" marginValue={16}>
        <Text
          type="text"
          align="center"
          color="tertiary"
          href="https://t.me/join_community/264"
          as="a"
          target="_blank"
        >
          BACKED BY BUILD
        </Text>
      </Block>
    </PageLayout>
  );
};
