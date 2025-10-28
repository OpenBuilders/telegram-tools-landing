import { TOOLS } from '@common';
import { Block, Icon, Image, List, ListItem, PageLayout, Text } from '@components';
import { IconTypeName } from 'src/components/Icon/types';
import logoImage from '@assets/images/tools-logo.png';
import { useNavigate } from 'react-router-dom';
import { ROUTES_NAME } from '@routes';

export const MainPage = () => {
  const navigate = useNavigate();

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
        <List separatorLeftGap={40}>
          {TOOLS.map((tool) => {
            return (
              <ListItem
                noPointer={!tool.isActive}
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
                label={tool.isActive ? undefined : 'soon'}
                before={
                  (tool.icon && <Icon name={tool.icon as IconTypeName} size={44} />) ||
                  (tool.image && <Image src={tool.image} size={40} borderRadius={12} />)
                }
                onClick={() => {
                  if (!tool.isActive || !tool.link) return;
                  navigate(`${ROUTES_NAME.APP_PAGE}/${tool.id}`);
                }}
                chevron={tool.isActive}
              />
            );
          })}
        </List>
      </Block>
      <Block fixed="bottom" margin="bottom" marginValue={16}>
        <Text
          type="caption"
          align="center"
          color="tertiary"
          href="https://t.me/builders/264"
          as="a"
          target="_blank"
        >
          BACKED BY BUILD
        </Text>
      </Block>
    </PageLayout>
  );
};
